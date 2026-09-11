import React, {CSSProperties, ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {
    Cell, CellContext,
    Column,
    ColumnDef,
    flexRender,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    Header, Renderable, RowData
} from "@tanstack/react-table";
import {
    useChildRowEnabledReactTable
} from "./getChildRowEnabledCoreRowModel";
import useInteractiveTableSettings from "../../hooks/useInteractiveTableSettings";
import UpArrowIcon from "../icons/UpArrowIcon";
import DownArrowIcon from "../icons/DownArrowIcon";
import MultiTextInput from "../form-elements/MultiTextInput";
import {useSortable} from "@dnd-kit/sortable";
import { CSS } from '@dnd-kit/utilities';
import {
    DndContext,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    closestCenter,
    type DragEndEvent,
    useSensor,
    useSensors, PointerSensor,
} from '@dnd-kit/core'
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers'
import {
    arrayMove,
    SortableContext,
    horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import "../../styles/interactiveTable.scss";
import classNames from "classnames";
import UpDownArrowIcon from "../icons/UpDownArrowIcon";
import LeftAngleIcon from "../icons/LeftAngleIcon";
import RightAngleIcon from "../icons/RightAngleIcon";
import DropdownButton from "../form-elements/DropdownButton";
import RectangleListIcon from "../icons/RectangleListIcon";
import ExcelFileIcon from "../icons/ExcelFileIcon";
import exportFromJSON, {ExportTypeWithTSV, ExportFromJSONWithTSVFunction} from "export-from-json";
import TSVFileIcon from "../icons/TSVFileIcon";
import {ChildRowEnabledRow} from "../../types";
import CaretLeftIcon from "../icons/CaretLeftIcon";
import CaretRightIcon from "../icons/CaretRightIcon";
import {tab} from "@testing-library/user-event/dist/tab";


type InteractiveTableProps<DataType> = {
    id: string,
    columns: ColumnDef<DataType, unknown>[],
    data: DataType[],
    fullWidth?: boolean,
    showColumnLines?: boolean,
    useHorizontalScrollArrows?: boolean,
    showHiddenColumnText?: boolean,
    totalText?: string
};

type MultiTextInputFilterValue = {
    pills: string[],
    inputText: string,
}

const getDisplayName = <TData,>(column: Column<TData>) => {
    if(column.columnDef.meta?.displayName)
        return column.columnDef.meta.displayName;
    if(typeof column.columnDef.header === "string")
        return column.columnDef.header;
    return column.id;
}

type DraggableHeaderProps = {
  header: Header<any, unknown>
};

const DraggableHeader: React.FC<DraggableHeaderProps> = ({ header }) => {
    const { attributes, isDragging, listeners, setNodeRef, transform, transition } =
        useSortable({
            id: header.column.id,
        })

    //TODO: columnOrder includes hidden columns leading to bugs with border rendering
    const table = header.getContext().table;
    const columnOrder = table.getState().columnOrder;
    const prevColId = columnOrder[header.index - 1];
    const nextColId = columnOrder[header.index + 1];


    let showLeftBorder = false;
    let showRightBorder = false;

    if(header.column.parent) {
        if(!prevColId) showLeftBorder = true;
        else {
            const prevCol = prevColId ? table.getColumn(prevColId) : null;
            if(!prevCol) showLeftBorder = false;
            else if(!prevCol.parent) showLeftBorder = false;
            else if(prevCol.parent.id !== header.column.parent.id) showLeftBorder = true;
        }

        if(!nextColId) showRightBorder = true;
        else {
            const nextCol = nextColId ? table.getColumn(nextColId) : null;
            if(!nextCol) showRightBorder = false;
            else if(!nextCol.parent) showRightBorder = false;
            else if(nextCol.parent.id !== header.column.parent.id) showRightBorder = true;
        }
    }


    const isBottomMostHeader = header.subHeaders.length === 0;
    const alignment = header.column.columnDef.meta?.align || "center";

    const style: CSSProperties = {
        position: 'relative',
        transform: CSS.Translate.toString(transform), // translate instead of transform to avoid squishing
        // transition: 'width transform 0.2s ease-in-out',
        transition,
        cursor: "default",
        whiteSpace: !isBottomMostHeader ? 'normal' : 'nowrap',
        ...(isBottomMostHeader ? {
            cursor: isDragging ? "grabbing" : "pointer",
            opacity: isDragging ? 0.8 : 1,
        } : ""),
        zIndex: isDragging ? 1 : 0,
        textAlign: isBottomMostHeader ? "left" : "center",
        ...( showLeftBorder ? { borderLeft: "1px solid rgb(221, 221, 221)"} : ""),
        ...( showRightBorder ? { borderRight: "1px solid rgb(221, 221, 221)"} : ""),
        ...(
            (alignment !== "center") ? ({
                textAlign: alignment
            }) : ""
        ),
    }

    const indexWithinGroup = header.headerGroup.headers.map(h => h.id).indexOf(header.id);

    return (
        <th colSpan={header.colSpan}
            onClick={() => {
                isBottomMostHeader && header.column.toggleSorting()
            }}
            className={classNames({
                "border-column": indexWithinGroup === 0 || indexWithinGroup === header.headerGroup.headers.length - 1,
                "right-aligned": alignment === "right"
            })}
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            {
                isBottomMostHeader && alignment === "right" &&
                <>
                    {header.column.getIsSorted() === "desc" && <UpArrowIcon/>}
                    {header.column.getIsSorted() === "asc" && <DownArrowIcon/>}
                    {!header.column.getIsSorted() && <UpDownArrowIcon />}
                </>
            }
            {flexRender(header.column.columnDef.header, header.getContext())}
            {
                isBottomMostHeader && alignment !== "right" &&
                <>
                    {header.column.getIsSorted() === "desc" && <UpArrowIcon/>}
                    {header.column.getIsSorted() === "asc" && <DownArrowIcon/>}
                    {!header.column.getIsSorted() && <UpDownArrowIcon />}
                </>
            }
        </th>
    )
};

const DragAlongCell = ({cell, showColumnLines}: { cell: Cell<any, unknown>, showColumnLines: boolean }) => {
    const { isDragging, setNodeRef, transform, transition } = useSortable({
        id: cell.column.id,
    })

    const table = cell.getContext().table;
    const columnOrder = table.getState().columnOrder;
    const prevColId = columnOrder[cell.column.getIndex() - 1];
    const nextColId = columnOrder[cell.column.getIndex() + 1];


    let showLeftBorder = false;
    let showRightBorder = false;

    if(showColumnLines) {
        showLeftBorder = prevColId !== undefined;
    } else if (cell.column.parent) {
        if(!prevColId) showLeftBorder = true;
        else {
            const prevCol = prevColId ? table.getColumn(prevColId) : null;
            if(!prevCol) showLeftBorder = false;
            else if(!prevCol.parent) showLeftBorder = false;
            else if(prevCol.parent.id !== cell.column.parent.id) showLeftBorder = true;
        }

        if(!nextColId) showRightBorder = true;
        else {
            const nextCol = nextColId ? table.getColumn(nextColId) : null;
            if(!nextCol) showRightBorder = false;
            else if(!nextCol.parent) showRightBorder = false;
            else if(nextCol.parent.id !== cell.column.parent.id) showRightBorder = true;
        }
    }


    const style: CSSProperties = {
        opacity: isDragging ? 0.8 : 1,
        position: 'relative',
        transform: CSS.Translate.toString(transform), // translate instead of transform to avoid squishing
        transition,
        // transition: 'width transform 0.2s ease-in-out',
        zIndex: isDragging ? 1 : 0,
        textAlign: "left",
        ...( showLeftBorder ? { borderLeft: "1px solid rgb(221, 221, 221)"} : ""),
        ...( showRightBorder ? { borderRight: "1px solid rgb(221, 221, 221)"} : ""),
        ...(
            (cell.column.columnDef.meta?.align && cell.column.columnDef.meta.align !== "center") ? ({
                textAlign: cell.column.columnDef.meta.align
            }) : ""
        ),
        ...( (cell.row as ChildRowEnabledRow<any>).childDepth === 0 ? {
            backgroundColor: "rgb(249, 249, 249) !important"
        } : ""),
        ...( (cell.row as ChildRowEnabledRow<any>).childDepth === 1 ? {
            backgroundColor: "white !important"
        } : ""),
        ...(cell.column.columnDef.meta?.nowrap ? ({ whiteSpace: "nowrap" }) : "")
    }

    return (
        <td style={style} ref={setNodeRef} rowSpan={(cell.row as ChildRowEnabledRow<any>).totalChildRows || 1}>
            {flexRender(
                (cell.column.columnDef.meta?.childRow?.cell
                    ? cell.column.columnDef.meta.childRow.cell
                    : cell.column.columnDef.cell) as Renderable<CellContext<any, unknown>>
                , cell.getContext()
            )}
        </td>
    )
}

const DragAlongFilterHeader = ({header}: { header: Header<any, unknown> }) => {
    const { isDragging, setNodeRef, transform, transition } = useSortable({
        id: header.column.id,
    })

    const table = header.getContext().table;
    const columnOrder = table.getState().columnOrder;
    const prevColId = columnOrder[header.index - 1];
    const nextColId = columnOrder[header.index + 1];


    let showLeftBorder = false;
    let showRightBorder = false;

    if(header.column.parent) {
        if(!prevColId) showLeftBorder = true;
        else {
            const prevCol = prevColId ? table.getColumn(prevColId) : null;
            if(!prevCol) showLeftBorder = false;
            else if(!prevCol.parent) showLeftBorder = false;
            else if(prevCol.parent.id !== header.column.parent.id) showLeftBorder = true;
        }

        if(!nextColId) showRightBorder = true;
        else {
            const nextCol = nextColId ? table.getColumn(nextColId) : null;
            if(!nextCol) showRightBorder = false;
            else if(!nextCol.parent) showRightBorder = false;
            else if(nextCol.parent.id !== header.column.parent.id) showRightBorder = true;
        }
    }

    const style: CSSProperties = {
        opacity: isDragging ? 0.8 : 1,
        position: 'relative',
        transform: CSS.Translate.toString(transform), // translate instead of transform to avoid squishing
        // transition: 'width transform 0.2s ease-in-out',
        transition,
        zIndex: isDragging ? 1 : 0,
        ...( showLeftBorder ? { borderLeft: "1px solid rgb(221, 221, 221)"} : ""),
        ...( showRightBorder ? { borderRight: "1px solid rgb(221, 221, 221)"} : ""),
    }

    return (
        <th key={`filter-${header.id}`} style={style} ref={setNodeRef}>
            <MultiTextInput id={header.column.id}
                            placeholder="Filter..."
                            defaultPills={header.column.getIsFiltered() ? (header.column.getFilterValue() as MultiTextInputFilterValue).pills : []}
                            defaultInputText={header.column.getIsFiltered() ? (header.column.getFilterValue() as MultiTextInputFilterValue).inputText : ""}
                            onValueChange={(pills, inputText) => {
                                header.column.setFilterValue({
                                    pills,
                                    inputText
                                })
                            }}
            />
        </th>
    )
}

const MAX_PAGE_INDEX_BUTTONS = 3;


const InteractiveTable = <TData extends RowData, >({
    id,
    columns,
    data,
    fullWidth = false,
    showColumnLines = false,
    useHorizontalScrollArrows = false,
    showHiddenColumnText = true,
    totalText = "total"
}: InteractiveTableProps<TData>): ReactNode => {

    const table = useChildRowEnabledReactTable({
        columns,
        data,
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        defaultColumn: {
            filterFn: (row, columnId, filterValue) => {
                filterValue = filterValue as MultiTextInputFilterValue;
                const values = [...filterValue.pills, ...(filterValue.inputText === "" ? [] : [filterValue.inputText])];

                for (let i = 0; i < values.length; i++) {
                    if (!((row.getValue(columnId) || "") as string).toLowerCase().includes(values[i].toLowerCase())) {
                        return false;
                    }
                }
                return true;
            }
        }
    });

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, updateState, _deleteState, resetState] = useInteractiveTableSettings(id, table, {
        columnOrder: table.getAllLeafColumns().map(c=>c.id),
        sorting: [{ id: table.getAllLeafColumns().filter(column => column.columnDef.meta?.defaultVisibility ? column.columnDef.meta.defaultVisibility !== "hidden" : true)[0].id, desc: false }],
        columnVisibility: Object.fromEntries(
            table.getAllFlatColumns().map(column => [
                column.id,
                column.columnDef.meta?.defaultVisibility ? column.columnDef.meta.defaultVisibility === "visible" : true
            ])
        )
    });
    const [horizontalScrollEnabled, setHorizontalScrollEnabled] = useState(false);
    const hitlistFormRef = useRef<HTMLFormElement>(null);
    const [tableContainerElement, setTableContainerElement] = useState<HTMLDivElement | null>(null);

    const tableWrapperRef = useCallback((container: HTMLDivElement) => {
        if(!container) return;

        const observer = new ResizeObserver(() => {
            setHorizontalScrollEnabled(container.scrollWidth !== container.clientWidth);
        });

        observer.observe(container);
        setTableContainerElement(container);
    },[]);

    const onHorizontalScroll = (direction: "left" | "right") => {
        if(!tableContainerElement) return;

        const totalWidth = tableContainerElement.clientWidth;
        const scrollLimit = tableContainerElement.scrollWidth - totalWidth;
        const currentScrollPosition = tableContainerElement!.scrollLeft;

        if(direction === "left") {
            tableContainerElement.scrollLeft = Math.max(0, currentScrollPosition - totalWidth);
        } else {
            tableContainerElement.scrollLeft = Math.min(scrollLimit, currentScrollPosition + totalWidth);
        }
    }

    table.setOptions(prev => {
        return {
            ...prev,
            state,
            onStateChange: newState => {
                updateState("", typeof newState === "function" ? newState(state) : newState)
            },
        };
    });

    const sensors = useSensors(
        useSensor(MouseSensor, {}),
        useSensor(TouchSensor, {}),
        useSensor(KeyboardSensor, {}),
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: .5
            }
        })
    )

    if( JSON.stringify(state) === "{}" ) return null;

    // reorder columns after drag & drop
    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event
        if (active && over && active.id !== over.id) {
            table.setColumnOrder(columnOrder => {
                const oldIndex = columnOrder.indexOf(active.id as string)
                const newIndex = columnOrder.indexOf(over.id as string)
                return arrayMove(columnOrder, oldIndex, newIndex) //this is just a splice util
            })
        }
    }

    const currentPageIndex = table.getState().pagination.pageIndex;
    const totalIndexes = Math.min(MAX_PAGE_INDEX_BUTTONS, table.getPageCount());
    const totalIndexesEachSideOfCurrent = (totalIndexes - 1) / 2;
    let minIndex = currentPageIndex - Math.ceil(totalIndexesEachSideOfCurrent);
    let maxIndex = currentPageIndex + Math.floor(totalIndexesEachSideOfCurrent);

    if(minIndex < 0) {
        maxIndex -= minIndex;
        minIndex = 0;
    }

    const maxPageIndex = table.getPageCount() - 1;

    if(maxIndex > maxPageIndex) {
        minIndex = Math.max(minIndex - (maxIndex - maxPageIndex), 0);
        maxIndex = maxPageIndex;
    }

    const pageIndexRadioIndexes = [];
    for(let i = minIndex; i <= maxIndex; i++) {
        pageIndexRadioIndexes.push(i);
    }

    const showFirstPage = pageIndexRadioIndexes[0] > 2;
    const showLastPage = pageIndexRadioIndexes[pageIndexRadioIndexes.length - 1] < table.getPageCount() - 3;

    const exportToHitlist = () => {
        hitlistFormRef.current && hitlistFormRef.current.submit();
    };

    const exportFile = (exportType: ExportTypeWithTSV) => {
        const date = new Date();
        const fileName = `flybase_table_export_${date.getFullYear()}${date.getMonth()}${date.getDay()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        const data: Array<{ [key: string]: string }> = [];

        table.getRowModel().rows.forEach(row => {
            const parentRowJSON: { [key: string]: string } = {};

            row.getVisibleCells().forEach(cell => {
                let exportValue = cell.getValue();
                if(cell.column.columnDef.meta?.exportFn) {
                    exportValue = cell.column.columnDef.meta.exportFn(cell.row.original);
                }
                if(exportValue === null || exportValue === undefined) {
                    exportValue = "";
                }
                parentRowJSON[getDisplayName(cell.column)] = exportValue as string;
            });

            (row as ChildRowEnabledRow<TData>).childRows.forEach(childRow => {

                const childRowJSON: { [key: string]: string } = {};

                childRow.getVisibleCells().forEach(cell => {

                    let exportValue = cell.getValue();
                    if(cell.column.columnDef.meta?.childRow?.exportFn) {
                        exportValue = cell.column.columnDef.meta.childRow.exportFn(cell.row.original);
                    }
                    if(exportValue === null || exportValue === undefined) {
                        exportValue = "";
                    }
                    childRowJSON[getDisplayName(cell.column)] = exportValue as string;
                });

                data.push({
                    ...parentRowJSON,
                    ...childRowJSON
                })
            })

            if(data.length === 0 || (row as ChildRowEnabledRow<TData>).childRows.length === 0){
                data.push(parentRowJSON);
            }

        })

        /*
        * Okay. So this is not ideal, but good enough for now. I think in the future, we should look for/build
        * a better library for exports. The current one "export-from-json" does not _technically_ support tsv,
        * however, it does have all the capability to do so. I submitted a pull request, but the library hasn't
        * been updated in a couple of years, so who knows.
        *
        * It has options for a "delimiter" and "extension". Setting those to "\t" and "tsv" respectively gets the
        * job done, except for one thing: typing. The library is js with .d files to enforce types. These types do
        * not include tsv (which is okay since we can run it as csv), but also only allows for the delimiter to be ","
        * or ";" even though the code would work perfectly well with any delimiter.
        *
        * To trick typescript into letting us use "\t" while also ensuring type safety, I had to create custom types
        * in our own .d file. Unfortunately, there was no way to modify the existing delimiter type, (and the function's
        * type by extension) so we have to cast the original function to our new type.
        *
        * But alas, typescript is still mad because you "can't cast this function to your new function type", which is
        * why we have the "as any as ExportFromJSONWithTSVFunction".
        * */

        const exportFromJSONWithTSV = exportFromJSON as any as ExportFromJSONWithTSVFunction;

        let isTSV = false;
        if(exportType === 'tsv') {
            isTSV = true;
            exportType = 'csv';
        }

        exportFromJSONWithTSV({
            data,
            fileName,
            exportType,
            ...(isTSV ? {
                extension: "tsv",
                delimiter: "\t"
            } : {})
        });
    };

    return (
        <DndContext
            collisionDetection={closestCenter}
            modifiers={[restrictToHorizontalAxis]}
            onDragEnd={handleDragEnd}
            sensors={sensors}
        >
            <div className={classNames("interactive-table", { "full-width": fullWidth })}>
                {
                    horizontalScrollEnabled && useHorizontalScrollArrows &&
                    <div className="horizontal-scroll-arrows">
                        <button className="scroll-left" onClick={() => onHorizontalScroll("left")}>
                            <CaretLeftIcon />
                        </button>
                        <button className="scroll-right" onClick={() => onHorizontalScroll("right")}>
                            <CaretRightIcon />
                        </button>
                    </div>
                }
                <div className="main-toolbar">
                    <section className="export-show-hide-options">
                        <button className="reset-button" onClick={() => resetState()}>Reset</button>
                        <DropdownButton text="Export">
                            <ul className="export-options">
                                <li>
                                    <form method="post" action="/hitlist/" ref={hitlistFormRef}>
                                        <input type="hidden" name="ids" value={table.getRowModel().rows.map(row => (row.original as unknown as { id: string }).id).join(",")}/>
                                    </form>
                                    <button className="icon-button" onClick={() => exportToHitlist()}>
                                        <RectangleListIcon />
                                        <span>Hitlist</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="icon-button" onClick={() => exportFile("tsv")}>
                                        <TSVFileIcon />
                                        <span>TSV</span>
                                    </button>
                                </li>
                                <li>
                                    <button className="icon-button" onClick={() => exportFile("xls")}>
                                        <ExcelFileIcon />
                                        <span>Excel</span>
                                    </button>
                                </li>
                            </ul>
                        </DropdownButton>
                        <DropdownButton text="Show/Hide Columns">
                            <ul className="show-hide-list">
                                {table.getAllColumns().map((column) => (
                                    <li key={column.id}>
                                        <label className="parent-column">
                                            <input type="checkbox" checked={column.columns.length > 0 ? column.columns.map(subColumn => subColumn.getIsVisible()).reduce((a,b) => a || b) : column.getIsVisible()}
                                                   onChange={e => {
                                                       const checked = e.target.checked;
                                                       table.setColumnVisibility(old => ({
                                                           ...old,
                                                           ...(
                                                               column.columns.length > 0
                                                               ? Object.fromEntries(column.columns.map(column => [column.id, checked]))
                                                               : { [column.id]: checked }
                                                           )
                                                       }))
                                                   }}/>
                                            {getDisplayName(column)}
                                        </label>
                                        <ul className="child-columns">
                                            {column.columns.map(subColumn => (
                                                <li key={subColumn.id}>
                                                    <label>
                                                        <input type="checkbox" checked={subColumn.getIsVisible()}
                                                               onChange={_ => subColumn.toggleVisibility()}/>
                                                        {getDisplayName(subColumn)}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </DropdownButton>
                        {
                            showHiddenColumnText && table.getAllLeafColumns().length !== table.getAllLeafColumns().filter(c => c.getIsVisible()).length &&
                            <span className="hidden-columns">Hidden columns: {
                                table.getAllLeafColumns()
                                    .filter(column => !column.getIsVisible())
                                    .map(column => getDisplayName(column))
                                    .join(", ")
                            }</span>
                        }
                    </section>
                    <section className="pagination-options">
                        <span className="count">({data.length} {totalText})</span>
                        <ol className="button-bar">
                            {
                                ["Show All", 20, 100].map(pageSize => (
                                    <li key={pageSize}>
                                        <label className="radio-button">
                                            <input type="radio"
                                                   name={`${id}-pageSize-radio`}
                                                   checked={table.getState().pagination.pageSize === (Number(pageSize === "Show All" ? table.getRowCount() : pageSize))}
                                                   onChange={_ => table.setPageSize(Number(pageSize === "Show All" ? table.getRowCount() : pageSize))}
                                            />
                                            {pageSize}
                                        </label>
                                    </li>
                                ))
                            }
                        </ol>
                        <ol className="button-bar">
                            <li>
                                <button onClick={() => table.previousPage()}
                                        disabled={!table.getCanPreviousPage()}
                                >
                                    <LeftAngleIcon/>
                                </button>
                            </li>
                            {
                                showFirstPage &&
                                <>
                                    <li>
                                        <label className="radio-button">
                                            <input type="radio"
                                                   name={`${id}-pageIndex-radio`}
                                                   checked={table.getState().pagination.pageIndex === 1}
                                                   onChange={_ => table.firstPage()}
                                            />

                                            <span>1</span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="radio-button">...</label>
                                    </li>
                                </>
                            }
                            {
                                pageIndexRadioIndexes.map(pageIndex => (
                                    <li key={pageIndex}>
                                        <label className="radio-button">
                                            <input type="radio"
                                                   name={`${id}-pageIndex-radio`}
                                                   checked={table.getState().pagination.pageIndex === pageIndex}
                                                   onChange={_ => table.setPageIndex(pageIndex)}
                                            />

                                            <span>
                                                {pageIndex + 1}
                                            </span>
                                        </label>
                                    </li>
                                ))
                            }
                            {
                                showLastPage &&
                                <>
                                    <li>
                                        <label className="radio-button">...</label>
                                    </li>
                                    <li>
                                        <label className="radio-button">
                                            <input type="radio"
                                                   name={`${id}-pageIndex-radio`}
                                                   checked={table.getState().pagination.pageIndex === table.getPageCount() - 1}
                                                   onChange={_ => table.lastPage()}
                                            />

                                            <span>{table.getPageCount()}</span>
                                        </label>
                                    </li>
                                </>
                            }
                            <li>
                                <button onClick={() => table.nextPage()}
                                        disabled={!table.getCanNextPage()}
                                >
                                    <RightAngleIcon/>
                                </button>
                            </li>
                        </ol>
                    </section>
                </div>
                <div className="table-wrapper" ref={tableWrapperRef}>
                    <table className={classNames({ "full-width": fullWidth })}>
                        <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id} className="group-header">
                                <SortableContext
                                    items={table.getState().columnOrder}
                                    strategy={horizontalListSortingStrategy}
                                >
                                    {headerGroup.headers.map(header => (
                                        <DraggableHeader header={header} key={header.id}/>
                                    ))}
                                </SortableContext>
                            </tr>
                        ))}
                        <tr>
                            <SortableContext
                                items={table.getState().columnOrder}
                                strategy={horizontalListSortingStrategy}
                            >
                                {table.getHeaderGroups()[table.getHeaderGroups().length - 1].headers.map(header =>
                                    <DragAlongFilterHeader header={header} key={header.id}/>)}
                            </SortableContext>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            table.getRowModel().rows.map(row => {


                                const getSubRows = (rowToRender: ChildRowEnabledRow<TData>) => {

                                    const parentCells = rowToRender.getVisibleCells();

                                    if (rowToRender.childRows.length === 0)
                                        return [parentCells];
                                    const childCells: Cell<TData, unknown>[][] = rowToRender.childRows.map(childRow => getSubRows(childRow as ChildRowEnabledRow<TData>)).reduce((p, c) => p.concat(c));
                                    const combinedCells = [...childCells];
                                    combinedCells[0] = parentCells.concat(childCells[0]);
                                    return combinedCells.map(subRowCells => subRowCells.sort((aCell, bCell) => aCell.column.getIndex() - bCell.column.getIndex()));
                                }

                                const subRowsOfCells = getSubRows(row as ChildRowEnabledRow<TData>);

                                return (
                                    <React.Fragment key={row.id}>
                                        {
                                            subRowsOfCells.map((subRowCells, rowIndex) => (

                                                <tr key={`${row.id}-${rowIndex}`}
                                                    className={classNames({"first-of-group": rowIndex === 0})}>
                                                    <SortableContext
                                                        items={table.getState().columnOrder}
                                                        strategy={horizontalListSortingStrategy}
                                                    >
                                                        {subRowCells.map((cell, cellIndex) => (
                                                                <React.Fragment key={`${row.id}-${rowIndex}-${cellIndex}`}>
                                                                    <DragAlongCell cell={cell} key={cell.id} showColumnLines={showColumnLines} />
                                                                </React.Fragment>
                                                            ))}
                                                        </SortableContext>
                                                    </tr>

                                            ))
                                        }

                                    </React.Fragment>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </DndContext>
    );
};

export default InteractiveTable;
