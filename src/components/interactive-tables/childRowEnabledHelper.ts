import {AccessorFnColumnDef, ColumnHelper, ColumnMeta, createColumnHelper, RowData} from "@tanstack/react-table";
import {getAllByPath} from "../../helpers/getByPath";
import {DeepKeysMaxDepth, DeepKeysOfObjectArrayTypes, TypeByPath, TypeOrArrayType} from "../../types";
import {AccessorFn} from "@tanstack/table-core";
import {ChildCellContext, ChildPath, ChildType, ExportAccessorFn} from "../../react-table";

// export type ChildRowEnabledHelper<TData> =  ColumnHelper<TData> & {
//     childAccessor:
//         <
//             ChildPath extends DeepKeysMaxDepth<TData> = Extract<DeepKeysMaxDepth<TData>, DeepKeysOfObjectArrayTypes<TData>>,
//             ChildType = TypeOrArrayType<TypeByPath<TData, ChildPath & string>>,
//             ChildAccessorKeyOrFunction = AccessorFn<ChildType> | DeepKeysMaxDepth<ChildType>
//         >(
//             childPath: ChildPath,
//             childAccessorKeyOrFunction: ChildAccessorKeyOrFunction,
//             childColumnDef:
//                 Omit<AccessorFnColumnDef<TData>, "cell" | "accessorFn" | "meta">
//                 & {
//                 cell?: string | ((props: ChildCellContext<TData, ChildType>) => any),
//                 meta?: Omit<AccessorFnColumnDef<TData>['meta'], "childRow" | "exportFn"> & {
//                     exportFn?: ExportAccessorFn<ChildType>,
//                 },
//             }
//         ) => AccessorFnColumnDef<TData>
// };

export type ChildRowEnabledHelper<TData> =  ColumnHelper<TData> & {
    childAccessor:
        <
            TChildPath extends DeepKeysMaxDepth<TData> = ChildPath<TData>,
            TChildType = TypeOrArrayType<TypeByPath<TData, TChildPath & string>>,
            TChildAccessorKeyOrFunction = AccessorFn<TChildType> | DeepKeysMaxDepth<TChildType>,
        >(
            childPath: TChildPath,
            childAccessorKeyOrFunction: TChildAccessorKeyOrFunction,
            childColumnDef:
                Omit<AccessorFnColumnDef<TData>, "cell" | "accessorFn" | "meta">
                & {
                cell?: string | ((props: ChildCellContext<TData, TChildType>) => any),
                meta?: Omit<ColumnMeta<TData, unknown>, "childRow" | "exportFn"> & {
                    exportFn?: ExportAccessorFn<TChildType>,
                },
            }
        ) => AccessorFnColumnDef<TData>
};



const CONCATENATION_DELIMITER = "|~|"; //Just needs to be something unlikely to be in a symbol/name


const createChildRowEnabledHelper = <TData extends RowData,>() => {
    const originalHelper = createColumnHelper<TData>();

    const newHelper: ChildRowEnabledHelper<TData> = {
        ...originalHelper,
        childAccessor:(childPath, childAccessorKeyOrFunction, childColumnDef) => {
            return ({
                ...childColumnDef,
                id: typeof childAccessorKeyOrFunction === "function" ? childPath+"."+childColumnDef.id! : childPath+"."+childAccessorKeyOrFunction,
                cell: props => null,
                accessorFn: (row: TData) => {
                    const children = getAllByPath(row, childPath);

                    /*
                    * This check is needed because, for some reason, child rows get passed to accessor functions as well,
                    * meaning we need to ignore child rows in the logic.
                    * */
                    if(!Array.isArray(children)) {
                        return "";
                    }

                    const childAccessorValues = children.map(
                        (item, index) => typeof childAccessorKeyOrFunction === "function"
                            ? childAccessorKeyOrFunction(item, index)
                            : typeof childAccessorKeyOrFunction === "string"
                                ? item[childAccessorKeyOrFunction as keyof typeof item]
                                : ""
                    )

                    return childAccessorValues.join(CONCATENATION_DELIMITER);
                },
                meta: {
                    ...childColumnDef.meta,
                    exportFn: undefined,
                    childRow: {
                        path: childPath,
                        cell: childColumnDef.cell || (props => null),
                        // ...(childColumnDef.cell ? { cell: childColumnDef.cell } : {}),
                        ...(childColumnDef.meta?.exportFn ? { exportFn: childColumnDef.meta.exportFn } : {})
                    }
                }
            });
        },
    };

    return newHelper;
};

export default createChildRowEnabledHelper;