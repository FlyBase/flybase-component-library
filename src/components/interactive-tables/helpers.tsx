import {DataClass, DeepKeysMaxDepth} from "../../types";
import {CONCATENATION_DELIMITER} from "../../helpers/constants";
import {ChildType} from "../../react-table";
import {getAllByPath} from "../../helpers/getByPath";
import React, {useId} from "react";
import {ChildRowEnabledHelper} from "./childRowEnabledHelper";

export type DataClassOrArray<TData> = (TData | null | undefined) | (TData | null | undefined)[];

export const sanitizeSGMLForAccessor = (text: string | null) =>
    (text || "")
        .replaceAll(/[[∩\]]/g, "")
        .replaceAll(/INTERSECTION/g, "")
        .replaceAll(/<\/?up>/g, "")
        .replaceAll(/<\/?down>/g, "");

export const sanitizeSGMLForExport = (text: string | null) =>
    (text || "")
        .replaceAll(/INTERSECTION/g, "∩")
        .replaceAll(/<up>/g, "[")
        .replaceAll(/<\/up>/g, "]")
        .replaceAll(/<down>/g, "[[")
        .replaceAll(/<\/down>/g, "]]");

export const sanitizeDataClassForAccessor = <TData extends DataClass,>(item?: TData) => {
    const value = item?.symbol || item?.name;
    if(!value) return "";
    const sanitizedValue = value.replaceAll(/[[∩\]]/g, "")
        .replaceAll(/INTERSECTION/g, "")
        .replaceAll(/<\/?up>/g, "")
        .replaceAll(/<\/?down>/g, "");
    return sanitizedValue + CONCATENATION_DELIMITER + item?.id;
}

export const sanitizeDataClassForCell = <TData extends DataClass,>(item?: TData, preferName: boolean = false) => {
    const value = preferName ? item?.name || item?.symbol : item?.symbol || item?.name;
    if(!value) return "";
    return value.split("INTERSECTION")
        .join("∩<br/>")
        .replaceAll(/\[/g, "<up>")
        .replaceAll(/]/g, "</up>");
}

export const sanitizeDataClassForExport = <TData extends DataClass,>(item?: TData) => {
    const value = item?.symbol || item?.name;
    if(!value) return "";
    return value.replaceAll(/INTERSECTION/g, "∩")
        .replaceAll(/<up>/g, "[")
        .replaceAll(/<\/up>/g, "]")
        .replaceAll(/<down>/g, "[[")
        .replaceAll(/<\/down>/g, "]]")
}

export type ObjectOrObjectArray<TData extends { [key: string]: any } = { [key: string]: any }> = TData | TData[];

export const exportByKey = <TData extends { [key: string]: any },>(items: ObjectOrObjectArray<TData>, key: keyof TData): string => {
    if(!Array.isArray(items)) items = [items] as TData[];
    return unique(defined(items as TData[]).map(item => item[key])).join(", ");
}

export const exportByName = (items: ObjectOrObjectArray) => exportByKey(items, "name");

export const defined = <TData,>(items: (TData | null | undefined)[] | null | undefined): TData[] => (items || []).filter((item): item is TData => item !== null && item !== undefined);

export const unique = <TData,>(items: TData[], valueFunction?: (item: TData) => string | number | boolean ): TData[] => {

    if(!valueFunction && items.length > 0 && typeof items[0] !== "string" && typeof items[0] !== "number" && typeof items[0] !== "boolean") {
        throw new Error("Items must be comparable if no value function is provided.")
    }

    const values = valueFunction ? items.map(valueFunction) : items as (string | number | boolean)[];
    const uniqueItems: TData[] = [];

    values.forEach((value, index) => {
        if(index === values.indexOf(value)) {
            uniqueItems.push(items[index]);
        }
    })

    return uniqueItems;
}


export const getDataClassValue = <TData extends DataClass>(data: DataClassOrArray<TData>, valueFunction: (item: TData) => string, delimiter = CONCATENATION_DELIMITER) => {
    if(!data) return "";
    if(!Array.isArray(data)) data = [data];
    return defined(data).map(valueFunction).join(delimiter);
}

export const createDataClassValueFunction = <TData extends DataClass>(valueFunction: (item: TData) => string, delimiter?: string) => {
    return (data: DataClassOrArray<TData>) => getDataClassValue(data, valueFunction, delimiter);
}

export const dataClassExportFn = createDataClassValueFunction(sanitizeDataClassForExport, "\n");
export const dataClassAccessorFn = createDataClassValueFunction(sanitizeDataClassForAccessor);


export const getDataClassValueByPath = <
    TData extends DataClass,
    Path extends DeepKeysMaxDepth<TData>,
    TChildData extends DataClass = ChildType<TData>
>(data: DataClassOrArray<TData>, valueFunction: (data: DataClassOrArray<TChildData> | DataClassOrArray<TData>) => string, path?: Path): string => {

    if(!data) return "";

    if(!Array.isArray(data)) data = [data];

    return valueFunction(
        defined(data)
            .map(item => path !== undefined ? getAllByPath(item, path) : [item])
            .flat() as (undefined extends typeof path ? TData[] : TChildData[])
    );
}

export const createDataClassValueByPathFunction = <TData extends DataClass>(
    valueFunction: (data: DataClassOrArray<ChildType<TData>> | DataClassOrArray<TData>) => string
) => {
    /*
    * InnerTData is necessary for typescript to infer generic types properly
    *
    * TODO: put explanation of why
    * */
    return <InnerTData extends DataClass = TData>(
        data: DataClassOrArray<InnerTData>,
        path?: DeepKeysMaxDepth<InnerTData>
    ) => getDataClassValueByPath(data, valueFunction, path);
}

export const dataClassAccessorFnByPath = createDataClassValueByPathFunction(dataClassAccessorFn);
export const dataClassExportFnByPath = createDataClassValueByPathFunction(dataClassExportFn);

export const DataClassLink = <TData extends DataClass,>({ data, formatter, subsection, multiline = true, preferName = false }: { data: DataClassOrArray<TData>, formatter?: (item: TData) => string, subsection?: string, multiline?: boolean, preferName?: boolean }) => {

    if(!formatter) {
        formatter =  item => sanitizeDataClassForCell(item, preferName);
    }

    const id = useId();

    if(!data) return null;

    if(!Array.isArray(data)) data = [data];

    return (
        <>
            {
                defined(data).map((item, index) => {
                    let html = preferName ? item.name || item.symbol || "" : item.symbol || item.name || "";
                    if(formatter) {
                        html = formatter(item);
                    }

                    return (
                        <React.Fragment key={id+item.id+index}>
                        <a href={`/reports/${item.id}${subsection ? "#"+subsection : ""}`}
                    dangerouslySetInnerHTML={{__html: html}}
                >
                    </a>
                    {multiline && <br/>}
                    </React.Fragment>
                )
                })
            }
        </>
    );
}

export const HitlistLink = ({id, to, text}: {id: string | number | null | undefined, to: string | undefined, text: string | number | null | undefined}) => {
    if(!id || !to || !text) return null;
    return <a href={`/hitlist/${id}/to/${to}`}>{text}</a>;
}

export const MultiHitlistLink = ({ids, text}: {ids: (string | null)[] | null, text?: string | number}) => {
    if(ids === null) return null;
    return (
        <form method="post" action="/hitlist/" target="_blank">
            <input type="hidden" name="ids" readOnly value={defined(ids).concat(",")} />
            <button className="button-link" type="submit">{text || defined(ids).length}</button>
        </form>
    );
}

export const PubCountLink = <TData extends DataClass & { pubCount?: string | number }>({data}: {data: TData}) => <HitlistLink to="FBrf" text={data.pubCount} id={data.id} />;
export const StocksCountLink = <TData extends DataClass & { stocksCount?: string | number }>({data}: {data: TData}) => <HitlistLink to="FBst" text={data.stocksCount} id={data.id} />;

export const symbolColumnDef = <TData extends DataClass>(helper: ChildRowEnabledHelper<TData>) => helper.accessor(dataClassAccessorFn, {
    id: "symbol",
    header: "Symbol",
    meta: {
        exportFn: dataClassExportFn
    },
    cell: props => <DataClassLink data={props.row.original} />
})

export const SimpleList = ({items}: {items: (string | null)[] | null}) => {
    const id = useId();

    return (
        <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
            {defined(items || []).map((item, index) => (
                <li key={`${id}-${index}`}>{item}</li>
            ))}
        </ul>
    )
}

export const SGML: React.FC<{ value: string | null | undefined }> = ({ value }) => <span dangerouslySetInnerHTML={{ __html: value || "" }}></span>
