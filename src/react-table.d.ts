import '@tanstack/react-table';
import {CellContext, RowData} from "@tanstack/react-table";
import {DeepKeys} from "@tanstack/table-core/src/utils";
import {
    DeepKeysOfObjectArrayTypes,
    TypeByPath
} from "./components/interactive-tables/SplitSystemCombinationSearchTable";
import {DeepKeysMaxDepth, TypeOrArrayType} from "./types";
import {AccessorFn} from "@tanstack/table-core";
import {ExportType} from "export-from-json/dist/types/types";
import {downloadFile} from "export-from-json/dist/types/processors";

export type ChildCellContext<ParentType, ChildType> = Omit<CellContext<ParentType>, "row"> & {
    row: Omit<CellContext<ParentType>['row'], "original"> & {
        original: ChildType,
        totalChildRows: number
    }
}

export type ExportAccessorFn<TData> = (item: TData) => string;
export type ChildPath<TData> = Extract<DeepKeysMaxDepth<TData>, DeepKeysOfObjectArrayTypes<TData>>;
export type ChildType<TData> = TypeOrArrayType<TypeByPath<TData, ChildPath<TData> & string>>;


declare module '@tanstack/react-table' {
    // interface ColumnMeta<
    //     TData extends RowData,
    //     TValue,
    //     ChildPath extends Extract<DeepKeys<TData>, DeepKeysOfObjectArrayTypes<TData>>,
    //     ChildType extends RowData = TypeOrArrayType<TypeByPath<TData, ChildPath & string>>
    // > {
    //     childRow?: {
    //         path: ChildPath,
    //         cell: string | ((props: ChildCellContext<TData, ChildType>) => any),
    //         exportFn?: ExportAccessorFn<ChildType>
    //     },
    //     displayName?: string,
    //     align?: 'left' | 'center' | 'right',
    //     exportFn?: ExportAccessorFn<TData>,
    // }

    interface ColumnMeta<
        TData extends RowData,
        TValue,
        TChildPath = ChildPath<TData>,
        TChildType extends RowData = ChildType<TData>
    > {
        childRow?: {
            path: TChildPath,
            cell: string | ((props: ChildCellContext<TData, TChildType>) => any),
            exportFn?: ExportAccessorFn<TChildType>
        },
        displayName?: string,
        align?: 'left' | 'center' | 'right',
        exportFn?: ExportAccessorFn<TData>,
    }

    // interface ColumnMeta<TData extends RowData, TValue> {
    //     childRow?: {
    //         path: Extract<DeepKeysMaxDepth<TData>, DeepKeysOfObjectArrayTypes<TData>>,
    //         cell?: string | ((props: ChildCellContext<TData, TypeOrArrayType<TypeByPath<TData, ChildPath & string>>>) => any),
    //         exportFn?: ExportAccessorFn<TypeOrArrayType<TypeByPath<TData, Extract<DeepKeysMaxDepth<TData>, DeepKeysOfObjectArrayTypes<TData>> & string>>>
    //     },
    //     displayName?: string,
    //     align?: 'left' | 'center' | 'right',
    //     exportFn?: ExportAccessorFn<TData>,
    // }

    // interface ColumnMeta<TData extends RowData, TValue> {
    //     childRow?: {
    //         path: ChildPath<TData>,
    //         cell?: string | ((props: ChildCellContext<TData, ChildType<TData>>) => any),
    //         exportFn?: ExportAccessorFn<ChildType<TData>>
    //     },
    //     displayName?: string,
    //     align?: 'left' | 'center' | 'right',
    //     exportFn?: ExportAccessorFn<TData>,
    // }
}