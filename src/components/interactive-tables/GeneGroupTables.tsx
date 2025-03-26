import React, {useId} from 'react';
import InteractiveTable from "./InteractiveTable";
import createChildRowEnabledHelper from "./childRowEnabledHelper";
import LoadingIndicator from "../icons/LoadingIndicator";
import GenericError from "../GenericError";
import useGeneGroupTables, {GeneWithGeneGroupPubs} from "../../hooks/useGeneGroupTables";
import {
    dataClassAccessorFn,
    dataClassAccessorFnByPath,
    dataClassExportFn,
    DataClassLink,
    defined, exportByName,
    HitlistLink,
    MultiHitlistLink,
    PubCountLink, sanitizeSGMLForAccessor, sanitizeSGMLForExport,
    SGML, SimpleList,
    unique
} from "./helpers";
import {ColumnDef, createColumnHelper} from "@tanstack/react-table";
import {CONCATENATION_DELIMITER} from "../../helpers/constants";
import {DataClass} from "../../types";
import {GeneGroupv2} from "../../__generated__/graphql";
import ReportSection from "../layouts/ReportSection";

type GeneGroupTablesProps = {
    FBgg: string
};


const geneGroupTableHelper = createChildRowEnabledHelper<GeneWithGeneGroupPubs>();


const GENE_GROUP_TABLE_COLUMNS = [
    geneGroupTableHelper.accessor(dataClassAccessorFn, {
        id: "symbol",
        header: "Symbol",
        meta: {
            exportFn: dataClassExportFn
        },
        cell: props => <DataClassLink data={props.row.original} />,
    }),
    geneGroupTableHelper.accessor("name", {
        header: "Name",
        cell: props => <SGML value={props.row.original.nameSgml} />,
        meta: {
            nowrap: true
        }
    }),
    geneGroupTableHelper.accessor(gene => sanitizeSGMLForAccessor(gene.aka), {
        id: "aka",
        header: "Also Known As",
        cell: props => <SGML value={props.row.original.aka} />,
        meta: {
            exportFn: gene => sanitizeSGMLForExport(gene.aka)
        }
    }),
    geneGroupTableHelper.accessor(gene => `${defined(gene.pubs).length} ${defined(gene.pubs).join(", ")}`, {
        id: "allResearchRefs",
        header: "# all research refs",
        cell: props => <MultiHitlistLink ids={props.row.original.pubs} />,
        sortingFn: "alphanumeric",
        meta: {
            exportFn: gene => defined(gene.pubs).length+"",
            align: "right",
            defaultVisibility: "hidden"
        }
    }),
    geneGroupTableHelper.accessor(gene => gene.antibody ? "Yes true" : "No false", {
        id: "antibody",
        header: "Antibody",
        cell: props => props.row.original.antibody ? <DataClassLink data={props.row.original} formatter={_ => "Yes"} subsection="stocks_reagents" /> : null,
        meta: {
            exportFn: gene => gene.antibody ? "Yes" : "",
            defaultVisibility: "hidden"
        }
    }),
    geneGroupTableHelper.accessor(gene => gene.classicalAndInsertionAlleles.length, {
        id: "classicalInsertionAlleles",
        header: "Classical/Insertion Alleles",
        cell: props => <DataClassLink data={props.row.original} formatter={gene => gene.classicalAndInsertionAlleles.length+""} subsection="alleles_main" />,
        meta: {
            align: "right",
            defaultVisibility: "hidden"
        }
    }),
    geneGroupTableHelper.accessor(gene => gene.transgenicConstructs.length, {
        id: "transgenicConstructs",
        header: "Transgenic Constructs",
        cell: props => <DataClassLink data={props.row.original} formatter={gene => gene.transgenicConstructs.length+""} subsection="alleles_main" />,
        meta: {
            align: "right",
            defaultVisibility: "hidden"
        }
    }),
    geneGroupTableHelper.accessor(gene => dataClassAccessorFn(gene.experimentalDiseaseModels), {
        id: "experimentalDiseaseModels",
        header: "Disease Models (experimental)",
        cell: props => {
            const uniqueModels = unique(props.row.original.experimentalDiseaseModels, model => model.id);
            return <DataClassLink data={uniqueModels} />
        },
        meta: {
            exportFn: gene =>
                unique(
                    gene.experimentalDiseaseModels
                        .filter(model => Boolean(model.name))
                        .map(model => model.name)
                )
                .join(", "),
            defaultVisibility: "hidden"
        }
    }),
    geneGroupTableHelper.accessor(gene => dataClassAccessorFn(gene.potentialDiseaseModels), {
        id: "potentialDiseaseModels",
        header: "Potential Disease Models",
        cell: props => {
            const uniqueModels = unique(props.row.original.potentialDiseaseModels, model => model.id);
            return <DataClassLink data={uniqueModels} />
        },
        meta: {
            exportFn: gene =>
                unique(
                    gene.potentialDiseaseModels
                        .filter(model => Boolean(model.name))
                        .map(model => model.name)
                )
                .join(", "),
            defaultVisibility: "hidden"
        }
    }),
    geneGroupTableHelper.accessor(gene => dataClassAccessorFn(gene.humanOrthologs), {
        id: "humanOrthologs",
        header: "Human Orthologs",
        cell: props => <DataClassLink data={props.row.original.humanOrthologs} formatter={ortholog => ortholog.name}/>,
        meta: {
            nowrap: true,
            exportFn: gene => exportByName(gene.humanOrthologs),
            defaultVisibility: "hidden"
        }
    }),
    geneGroupTableHelper.accessor("testisSpecificityIndex", {
        header: "Testis-Specificity Index",
        sortingFn: "alphanumeric",
        meta: {
            align: "right",
            defaultVisibility: "hidden"
        }
    }),
    geneGroupTableHelper.accessor(gene => dataClassAccessorFn(gene.enzymes), {
        id: "enzyme",
        header: "Enzyme Name (EC)",
        cell: props => <DataClassLink data={props.row.original.enzymes} formatter={enzyme => `${enzyme.name} (${enzyme.id})`} />,
        meta: {
            exportFn: gene => gene.enzymes.map(enzyme => `${enzyme.name} (${enzyme.id})`).join(", "),
            defaultVisibility: "hidden"
        }
    }),
    geneGroupTableHelper.accessor(gene => dataClassAccessorFn(gene.experimentalGoMolecularFunctions), {
        id: "goMolecularFunctionExperimental",
        header: "Go Molecular Function (Experimental)",
        cell: props => <DataClassLink data={props.row.original.experimentalGoMolecularFunctions} formatter={goFunction => goFunction.goMolecularFunction || goFunction.goId}/>,
        meta: {
            exportFn: gene => gene.experimentalGoMolecularFunctions.map(goFunction => goFunction.goMolecularFunction || goFunction.goId).join(", "),
            defaultVisibility: "hidden"
        }
    }),
    geneGroupTableHelper.accessor(gene => dataClassAccessorFnByPath(gene.nonExperimentalGoMolecularFunctions), {
        id: "goMolecularFunctionNonExperimental",
        header: "Go Molecular Function (Non-Experimental)",
        cell: props => <DataClassLink data={props.row.original.nonExperimentalGoMolecularFunctions} formatter={goFunction => goFunction.goMolecularFunction || goFunction.goId}/>,
        meta: {
            exportFn: gene => gene.nonExperimentalGoMolecularFunctions.map(goFunction => goFunction.goMolecularFunction || goFunction.goId).join(", "),
            defaultVisibility: "hidden"
        }
    }),
    geneGroupTableHelper.accessor("cytogenicMap", {
        header: "Cytogenic Map",
        cell: props => <SimpleList items={props.row.original.cytogenicMap}/>,
        meta: {
            nowrap: true,
            exportFn: gene => (gene.cytogenicMap || []).join(", "),
            defaultVisibility: "hidden"
        }
    })
] as ColumnDef<GeneWithGeneGroupPubs, unknown>[];

const PATHWAYS_COLUMN = geneGroupTableHelper.accessor(gene => dataClassAccessorFn(gene.geneGroups.filter(isPathway)), {
    id: "pathways",
    header: "Pathways",
    cell: props => <DataClassLink data={props.row.original.geneGroups.filter(group => isPathway(group))} preferName />,
    meta: {
        exportFn: gene => dataClassExportFn(gene.geneGroups.filter(isPathway)),
        defaultVisibility: "hidden",
        nowrap: true
    }
});

const SOURCE_MATERIAL_FOR_MEMBERSHIP_COLUMN = geneGroupTableHelper.accessor(gene => dataClassAccessorFn(gene.geneGroupPubs), {
    id: "sourceMaterialForMembership",
    header: "Source Material For Membership",
    cell: props => <>({
        props.row.original.geneGroupPubs.map((pub, index) => <React.Fragment key={`${pub.id}-${index}-${props.cell.id}}`}><DataClassLink data={pub} multiline={false} />{index === props.row.original.geneGroupPubs.length - 1 ? "" : ", "}</React.Fragment>)
    })</>
});

const GENE_GROUPS_COLUMN = geneGroupTableHelper.accessor(gene => dataClassAccessorFn(gene.geneGroups.filter(group => !isPathway(group))), {
    id: "geneGroups",
    header: "Gene Groups",
    cell: props => <DataClassLink data={props.row.original.geneGroups.filter(group => !isPathway(group))} preferName />,
    meta: {
        exportFn: gene => dataClassExportFn(gene.geneGroups.filter(group => !isPathway(group))),
        nowrap: true
    }
});

const OTHER_GENE_GROUPS_COLUMN = geneGroupTableHelper.accessor(gene => dataClassAccessorFn(gene.geneGroups.filter(group => !isPathway(group))), {
    id: "otherGeneGroups",
    header: "Other Gene Groups",
    cell: props => <DataClassLink data={props.row.original.geneGroups.filter(group => !isPathway(group))} preferName />,
    meta: {
        exportFn: gene => dataClassExportFn(gene.geneGroups.filter(group => !isPathway(group))),
        nowrap: true
    }
});

const OTHER_PATHWAYS_COLUMN = geneGroupTableHelper.accessor(gene => dataClassAccessorFn(gene.geneGroups.filter(isPathway)), {
    id: "otherPathways",
    header: "Other Pathways",
    cell: props => <DataClassLink data={props.row.original.geneGroups.filter(group => isPathway(group))} preferName />,
    meta: {
        exportFn: gene => dataClassExportFn(gene.geneGroups.filter(isPathway)),
        nowrap: true
    }
})

const PATHWAY_REFS_COLUMN = geneGroupTableHelper.accessor(gene => gene.geneGroupPubs.length, {
    id: "pathwayRefs",
    header: "# Pathway Refs",
    cell: props => <MultiHitlistLink ids={props.row.original.geneGroupPubs.map(pub => pub.id)} text={props.row.original.geneGroupPubs.length} />
});


export enum GeneGroupType {
    Generic = 'generic',
    SignalingPathway = 'signaling pathway group',
    MetabolicPathway = 'metabolic pathway group'
}

export const isPathway = (gene_group: GeneWithGeneGroupPubs | GeneGroupv2) => {
    switch (gene_group.type) {
        case GeneGroupType.SignalingPathway:
        case GeneGroupType.MetabolicPathway:
            return true;
        default: return false;
    }
}

export const getGeneGroupType = (gene_group: GeneWithGeneGroupPubs | GeneGroupv2) => {
    switch (gene_group.type) {
        case GeneGroupType.SignalingPathway: return GeneGroupType.SignalingPathway;
        case GeneGroupType.MetabolicPathway: return GeneGroupType.MetabolicPathway;
        default: return GeneGroupType.Generic;
    }
}


const GeneGroupTables: React.FC<GeneGroupTablesProps> = ({ FBgg }) => {

    const {loading, error, data, filteredData } = useGeneGroupTables({ FBgg });
    const id = useId();

    const COLUMNS = [
        ...GENE_GROUP_TABLE_COLUMNS,
        ...((() => {
            switch (data?.geneGroupv2?.type) {
                case GeneGroupType.SignalingPathway: return [
                    PATHWAY_REFS_COLUMN,
                    GENE_GROUPS_COLUMN,
                    OTHER_PATHWAYS_COLUMN
                ];
                case GeneGroupType.MetabolicPathway: return [
                    SOURCE_MATERIAL_FOR_MEMBERSHIP_COLUMN,
                    GENE_GROUPS_COLUMN,
                    OTHER_PATHWAYS_COLUMN
                ];
                default: return [
                    PATHWAYS_COLUMN,
                    SOURCE_MATERIAL_FOR_MEMBERSHIP_COLUMN,
                    OTHER_GENE_GROUPS_COLUMN
                ];
            }
        })())
    ] as ColumnDef<GeneWithGeneGroupPubs, unknown>[];

    if(loading)
        return (
            <div style={{ width: "100%" }}>
                <LoadingIndicator />
            </div>
        );

    if(error) return <GenericError />;

    if(!filteredData) return null;

    return (
        <>
            {
                filteredData.memberships.length > 0 &&
                <ReportSection heading="" variant="level-2" sectionId="groupMembers" blindLocation="reports" collapsible={false}>
                    <InteractiveTable id="geneGroupMemberTable" columns={COLUMNS} data={filteredData.memberships} showColumnLines />
                </ReportSection>
            }
            {
                filteredData.subgroups.length > 0 &&
                filteredData.subgroups.map((subgroup, index) => (
                    <React.Fragment key={`${id}-${subgroup.id}-${index}}`}>
                        <ReportSection url={"/reports/"+subgroup.id} collapsible={false} heading={subgroup.name || ""} variant="level-2" sectionId={`subgroup-table-${subgroup.id}`} blindLocation="reports">
                            <InteractiveTable
                                id={`geneGroupMemberTable-${subgroup.id}`}
                                columns={COLUMNS}
                                data={subgroup.memberships}
                                fullWidth
                                showColumnLines
                            />
                        </ReportSection>
                    </React.Fragment>
                ))
            }
        </>
    );
};

export default GeneGroupTables;
