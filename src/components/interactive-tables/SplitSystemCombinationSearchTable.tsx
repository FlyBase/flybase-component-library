import React from 'react';
import InteractiveTable from "./InteractiveTable";
import useGAL4Search from "../../hooks/useGAL4Search";
import {ExpressionSearchInput} from "../../__generated__/graphql";
import createChildRowEnabledHelper from "./childRowEnabledHelper";
import useSmartStorage from "../../hooks/useSmartStorage";
import LoadingIndicator from "../icons/LoadingIndicator";
import GenericError from "../GenericError";
import {
    dataClassAccessorFn,
    dataClassAccessorFnByPath,
    dataClassExportFn,
    dataClassExportFnByPath,
    symbolColumnDef,
    DataClassLink, PubCountLink, StocksCountLink, unique
} from "./helpers";
import {SSCWithExpressionTerms} from "../../types";

type SplitSystemCombinationSearchTableProps = {
    expression: ExpressionSearchInput
};


const sscSearchTableColumnHelper = createChildRowEnabledHelper<SSCWithExpressionTerms>();

const SSC_COLUMNS = [
    sscSearchTableColumnHelper.group({
        header: "Split System Combination",
        columns: [
            sscSearchTableColumnHelper.accessor(dataClassAccessorFn, {
                id: "symbol",
                header: "Symbol",
                meta: {
                    exportFn: dataClassExportFn
                },
                cell: props => <DataClassLink data={props.row.original} />
            }),
            sscSearchTableColumnHelper.accessor(ssc => dataClassAccessorFnByPath(ssc.componentAlleles, "expressionTerms"), {
                    id: "expressionTerms",
                    header: "Expression Terms",
                    cell: props => {
                        const allExpressionTerms = unique(props.row.original.componentAlleles.map(allele => allele.expressionTerms).flat(), expressionTerm => expressionTerm?.id || "");
                        return <DataClassLink data={allExpressionTerms} />;
                    },
                    meta: {
                        exportFn: ssc => dataClassExportFnByPath(ssc.componentAlleles, "expressionTerms")
                    }
                }
            ),
            sscSearchTableColumnHelper.accessor("stocksCount", {
                header: "# Stocks",
                cell: props => <StocksCountLink data={props.row.original} />,
                sortingFn: "alphanumeric",
                meta: {
                    align: "right"
                }
            }),
            sscSearchTableColumnHelper.accessor("pubCount", {
                header: "# Refs",
                cell: props => <PubCountLink data={props.row.original} />,
                sortingFn: "alphanumeric",
                meta: {
                    align: "right"
                }
            })
        ]
    }),
    sscSearchTableColumnHelper.group({
        header: "Component Alleles",
        columns: [
            sscSearchTableColumnHelper.childAccessor("componentAlleles", dataClassAccessorFn, {
                id: "symbol",
                header: "Symbol",
                cell: props => <DataClassLink data={props.row.original} />,
                meta: {
                    exportFn: dataClassExportFn
                }
            }),
            sscSearchTableColumnHelper.childAccessor(
                "componentAlleles",
                allele => dataClassAccessorFn([...allele.insertions, ...allele.constructs]),
                {
                    id: "insertionsConstructs",
                    header: "Insertion / Construct",
                    cell: props => <DataClassLink data={[...props.row.original.insertions, ...props.row.original.constructs]}/>,
                    meta: {
                        exportFn: allele => dataClassExportFn([...allele.insertions, ...allele.constructs])
                    }
                }
            ),
            sscSearchTableColumnHelper.childAccessor(
                "componentAlleles",
                allele => dataClassAccessorFn(allele.insertedElementTypes),
                {
                    id: "insertedElementTypes",
                    header: "Inserted Element Type",
                    cell: props => <DataClassLink data={props.row.original.insertedElementTypes} />,
                    meta: {
                        exportFn: allele => dataClassExportFn(allele.insertedElementTypes)
                    }
                }
            ),
            sscSearchTableColumnHelper.childAccessor(
                "componentAlleles",
                allele => dataClassAccessorFn(allele.regRegions),
                {
                    id: "regRegions",
                    header: "Regulatory Region",
                    cell: props => <DataClassLink data={props.row.original.regRegions} />,
                    meta: {
                        exportFn: allele => dataClassExportFn(allele.regRegions)
                    }
                }
            ),
            sscSearchTableColumnHelper.childAccessor(
                "componentAlleles",
                allele => dataClassAccessorFn(allele.encodedTools),
                {
                    id: "encodedTools",
                    header: "Encoded Tool",
                    cell: props => <DataClassLink data={props.row.original.encodedTools} />,
                    meta: {
                        exportFn: allele => dataClassExportFn(allele.encodedTools)
                    }
                }
            ),
            sscSearchTableColumnHelper.childAccessor(
                "componentAlleles",
                allele => dataClassAccessorFn(allele.taggedWith),
                {
                    id: "taggedWith",
                    header: "Tagged With",
                    cell: props => <DataClassLink data={props.row.original.taggedWith} />,
                    meta: {
                        exportFn: allele => dataClassExportFn(allele.taggedWith)
                    }
                }
            ),
            sscSearchTableColumnHelper.childAccessor(
                "componentAlleles",
                allele => dataClassAccessorFn(allele.tagUses),
                {
                    id: "taggedUses",
                    header: "Tagged Uses",
                    cell: props => <DataClassLink data={props.row.original.tagUses} />,
                    meta: {
                        exportFn: allele => dataClassExportFn(allele.tagUses)
                    }
                }
            ),
            sscSearchTableColumnHelper.childAccessor("componentAlleles", "stocksCount", {
                header: "# Stocks",
                cell: props => <StocksCountLink data={props.row.original} />,
                sortingFn: (rowA, rowB, _columnId) => {
                    const rowASum = rowA.original.componentAlleles
                        .map(allele => parseInt(allele.stocksCount, 10))
                        .reduce((total, current) => total + current);
                    const rowBSum = rowB.original.componentAlleles
                        .map(allele => parseInt(allele.stocksCount, 10))
                        .reduce((total, current) => total + current);
                    return rowASum - rowBSum;
                },
                meta: {
                    align: "right"
                }
            }),
            sscSearchTableColumnHelper.childAccessor("componentAlleles", "pubCount", {
                header: "# Refs",
                cell: props => <PubCountLink data={props.row.original} />,
                sortingFn: (rowA, rowB, _columnId) => {
                    const rowASum = rowA.original.componentAlleles
                        .map(allele => parseInt(allele.pubCount, 10))
                        .reduce((total, current) => total + current);
                    const rowBSum = rowB.original.componentAlleles
                        .map(allele => parseInt(allele.pubCount, 10))
                        .reduce((total, current) => total + current);
                    return rowASum - rowBSum;
                },
                meta: {
                    align: "right"
                }
            })
        ]
    })
];

const SplitSystemCombinationSearchTable: React.FC<SplitSystemCombinationSearchTableProps> = ({expression}) => {

    const [gal4Search] = useSmartStorage("gal4Search");

    const {loading, errors, data: { sscSearch }} = useGAL4Search({ expression }, "ssc");

    if(!gal4Search || !gal4Search.type || gal4Search.type !== "ssc") return null;

    if(loading)
        return (
            <div style={{ width: "100%" }}>
                <LoadingIndicator />
            </div>
        );

    if(errors.length > 0) return <GenericError />;

    if(sscSearch !== null)
        return (
            <InteractiveTable id="splitSystemCombinationSearch" columns={SSC_COLUMNS} data={sscSearch}/>
        );

    return null;
};


export default SplitSystemCombinationSearchTable;
