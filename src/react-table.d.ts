import '@tanstack/react-table';
import {CellContext, RowData} from "@tanstack/react-table";
import {
    DeepKeysOfObjectArrayTypes,
    TypeByPath
} from "./components/interactive-tables/SplitSystemCombinationSearchTable";
import {DeepKeysMaxDepth, TypeOrArrayType} from "./types";

export type ChildCellContext<ParentType, ChildType> = Omit<CellContext<ParentType>, "row"> & {
    row: Omit<CellContext<ParentType>['row'], "original"> & {
        original: ChildType,
        totalChildRows: number
    }
}

export type ExportAccessorFn<TData> = (item: TData) => string; //TODO: remove in alliance project
export type ChildPath<TData> = Extract<DeepKeysMaxDepth<TData>, DeepKeysOfObjectArrayTypes<TData>>;
export type ChildType<TData> = TypeOrArrayType<TypeByPath<TData, ChildPath<TData> & string>>;

declare module '@tanstack/react-table' {

    interface ColumnMeta<
        TData extends RowData,
        TValue,
        TChildPath = ChildPath<TData>,
        TChildType extends RowData = ChildType<TData>
    > {
        childRow?: {
            path: TChildPath,
            cell: string | ((props: ChildCellContext<TData, TChildType>) => any),
            exportFn?: ExportAccessorFn<TChildType> //TODO: remove in alliance project
        },
        displayName?: string,
        align?: 'left' | 'center' | 'right',
        exportFn?: ExportAccessorFn<TData>, //TODO: remove in alliance project
        nowrap?: boolean,
        defaultVisibility?: 'visible' | 'hidden'
    }

}
