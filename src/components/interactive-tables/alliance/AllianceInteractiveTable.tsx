import React, {ReactNode, useCallback, useEffect, useRef, useState} from 'react';
import {
    Cell,
    Column,
    ColumnDef, getExpandedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    RowData
} from "@tanstack/react-table";
import {
    useChildRowEnabledReactTable
} from "../getChildRowEnabledCoreRowModel";
import  {
    useAllianceInteractiveTableSettings
} from "../../../hooks/useInteractiveTableSettings";
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
import "./allianceInteractiveTable.scss";
import classNames from "classnames";
import LeftAngleIcon from "../../icons/LeftAngleIcon";
import RightAngleIcon from "../../icons/RightAngleIcon";
import DropdownButton from "../../form-elements/DropdownButton";
import RectangleListIcon from "../../icons/RectangleListIcon";
import ExcelFileIcon from "../../icons/ExcelFileIcon";
import exportFromJSON, {ExportTypeWithTSV, ExportFromJSONWithTSVFunction} from "export-from-json";
import TSVFileIcon from "../../icons/TSVFileIcon";
import {ChildRowEnabledRow} from "../../../types";
import CaretLeftIcon from "../../icons/CaretLeftIcon";
import CaretRightIcon from "../../icons/CaretRightIcon";
import TableSortableContext from "./TableSortableContext";
import TableHeader from "./TableHeader";
import TableCell from "./TableCell";


type InteractiveTableProps<DataType> = {
    id: string,
    columns: ColumnDef<DataType, unknown>[],
    data: DataType[],
    totalText?: string,
    fullWidth?: boolean,
    showColumnLines?: boolean,
    showHiddenColumnText?: boolean,
    useHorizontalScrollArrows?: boolean,
    useResetButton?: boolean,
    useColumnVisibility?: boolean,
    useLocalStorageForTableState?: boolean,
    ExpandedRowComponent?: ({ rowData }: { rowData: DataType }) => React.ReactNode,
    downloadUrl?: string
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

const MAX_PAGE_INDEX_BUTTONS = 3;


const AllianceInteractiveTable = <TData extends RowData, >({
    id,
    columns,
    data,
    totalText = "total",
    fullWidth = false,
    showColumnLines = false,
    showHiddenColumnText = true,
    useResetButton = false,
    useHorizontalScrollArrows = false,
    useColumnVisibility = false,
    useLocalStorageForTableState = false,
    ExpandedRowComponent
}: InteractiveTableProps<TData>): ReactNode => {

    const table = useChildRowEnabledReactTable({
        columns,
        data,
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getRowCanExpand: _ => true,
        getExpandedRowModel: getExpandedRowModel(),
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

    useEffect(() => console.log(table.getState()), [table]);


    const initialSettings = {
        columnOrder: table.getAllLeafColumns().map(c=>c.id),
        sorting: [{
            id: table.getAllLeafColumns()
                    .filter(column => column.getCanSort())
                    .filter(column => useColumnVisibility ? (column.columnDef.meta?.defaultVisibility ? column.columnDef.meta.defaultVisibility !== "hidden" : true) : true)[0].id,
            desc: false
        }],
        columnVisibility: Object.fromEntries(
            table.getAllFlatColumns().map(column => [
                column.id,
                useColumnVisibility ? (column.columnDef.meta?.defaultVisibility ? column.columnDef.meta.defaultVisibility === "visible" : true) : true
            ])
        )
    }


    const { resetTableState } = useAllianceInteractiveTableSettings(id, table, initialSettings, useLocalStorageForTableState);


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

    if(JSON.stringify(table.getState()) === "{}") return null;

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

    const sortableColumns = table.getAllLeafColumns().filter(column => column.getCanSort());

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
                        { useResetButton && <button className="reset-button" onClick={() => resetTableState()}>Reset</button> }
                        {
                            useColumnVisibility &&
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
                        }
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
                                    <TableSortableContext table={table}>
                                        {headerGroup.headers.map(header => (
                                            <TableHeader header={header} key={header.id}/>
                                        ))}
                                    </TableSortableContext>
                                </tr>
                            ))}
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
                                                                    {/*<DragAlongCell cell={cell} key={cell.id} showColumnLines={showColumnLines} />*/}
                                                                    <TableCell cell={cell} key={cell.id} showColumnLines={showColumnLines} />
                                                                </React.Fragment>
                                                            ))}
                                                        </SortableContext>
                                                    </tr>

                                            ))
                                        }
                                        {ExpandedRowComponent && row.getIsExpanded() && (
                                            <tr>
                                                <td colSpan={row.getAllCells().length}>
                                                    <ExpandedRowComponent rowData={row.original} />
                                                </td>
                                            </tr>
                                        )}
                                    </React.Fragment>
                                )
                            })
                        }
                        </tbody>
                    </table>
                    {
                        sortableColumns.length > 0 &&
                        <select value={table.getState().sorting[0].id} onChange={e => table.getColumn(e.target.value)?.toggleSorting(false)}>
                            {sortableColumns.map((column, index) => (
                                <option value={column.id} key={`${id}-sort-option-${column.id}-${index}`}>{getDisplayName(column)}</option>
                            ))}
                        </select>
                    }
                </div>
            </div>
        </DndContext>
    );
};

export default AllianceInteractiveTable;
