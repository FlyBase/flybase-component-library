import { useQuery } from "@apollo/client";
import {
    Allelev2, Diseasev2,
    GeneAllelev2,
    GeneGroupMemberFragment,
    GeneGroupMemberv2,
    GeneGroupTablesQuery,
    GeneGroupTablesQueryVariables, GeneGroupv2, Orthologv2
} from "../__generated__/graphql";
import {useEffect, useState} from "react";
import getGeneGroupTables from "../api/graphql/getGeneGroupTables";
import {DataClass} from "../types";
import GeneGroupMember from "../api/graphql/fragments/geneGroupMember";
import {unique} from "../components/interactive-tables/helpers";

export type OrthologWithDioptScoreAndName = Orthologv2 & {
    dioptScore: number,
    name: string,
    url: string
};

const getFilteredGeneGroupMember = (geneGroupMember: GeneGroupMemberFragment, excludeGeneGroupIds?: string[]): GeneWithGeneGroupPubs => ({
    ...geneGroupMember.gene,
    geneGroupPubs: unique(geneGroupMember.geneGroupPubs, pub => pub.id) || [],
    transgenicConstructs: geneGroupMember.gene?.transgenicConstructs.map(construct => construct.allele as Allelev2) || [],
    classicalAndInsertionAlleles: geneGroupMember.gene?.classicalAndInsertionAlleles.map(construct => construct.allele as Allelev2) || [],
    geneGroups: geneGroupMember.gene?.geneGroups
        .map(group => group.geneGroup as GeneGroupv2)
        .filter(group => excludeGeneGroupIds === undefined || !excludeGeneGroupIds.includes(group.id)) || [],
    experimentalDiseaseModels: geneGroupMember.gene?.experimentalDiseaseModels.map(model => model.disease as Diseasev2) || [],
    potentialDiseaseModels: geneGroupMember.gene?.potentialDiseaseModels.map(model => model.disease as Diseasev2) || [],
    humanOrthologs: geneGroupMember.gene?.humanOrthologs
        .filter(orthologRelationship => orthologRelationship.dioptScore && orthologRelationship.dioptScore > 2)
        .map(ortholog => ({
            ...ortholog.ortholog,
            dioptScore: ortholog.dioptScore,
            name: ortholog.name,
            url: ortholog.url
        } as OrthologWithDioptScoreAndName)) || []
}) as GeneWithGeneGroupPubs;

export type GeneWithGeneGroupPubs = DataClass & Omit<
    Required<NonNullable<GeneGroupMemberFragment['gene']>>,
    "transgenicConstructs" | "classicalAndInsertionAlleles" | "geneGroups" | "experimentalDiseaseModels" | "potentialDiseaseModels" | "humanOrthologs"
> & {
    geneGroupPubs: {
        id: string,
        name: string
    }[],
    transgenicConstructs: Allelev2[],
    classicalAndInsertionAlleles: Allelev2[],
    geneGroups: GeneGroupv2[],
    experimentalDiseaseModels: Diseasev2[],
    potentialDiseaseModels: Diseasev2[],
    humanOrthologs: (OrthologWithDioptScoreAndName)[]
}


export type FormattedGeneGroupTables = Omit<GeneGroupTablesQuery['geneGroupv2'], "memberships" | "subgroups"> & {
    memberships: GeneWithGeneGroupPubs[],
    subgroups:
        (
            Omit<NonNullable<GeneGroupTablesQuery['geneGroupv2']>['subgroups'] extends Array<infer SubGroup> ? SubGroup : never, 'memberships'> & {
                memberships: GeneWithGeneGroupPubs[]
            }
        )[]
}



const useGeneGroupTables = (variables: GeneGroupTablesQueryVariables) => {
    const {loading, error, data} = useQuery(getGeneGroupTables, {variables});

    const [filteredData, setFilteredData] = useState<FormattedGeneGroupTables | undefined>(undefined);

    useEffect(() => {
        if(!loading && !error && data?.geneGroupv2) {

            const filtered: FormattedGeneGroupTables = {
                ...data.geneGroupv2,
                memberships: data.geneGroupv2.memberships.map(member => getFilteredGeneGroupMember(member, [data.geneGroupv2?.id || ""])),
                subgroups: data.geneGroupv2.subgroups.map(subgroup => ({
                    ...subgroup,
                    memberships: subgroup.memberships.map(member => getFilteredGeneGroupMember(member, [data.geneGroupv2?.id || "", subgroup.id]))
                }))
            };

            setFilteredData(filtered);


            //pre filtering, determine type?

        }
    }, [data, error, loading]);

    return {
        loading,
        error,
        data,
        filteredData
    }
};

export default useGeneGroupTables;
