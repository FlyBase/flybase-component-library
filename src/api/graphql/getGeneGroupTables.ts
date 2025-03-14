import {gql} from "../../__generated__";

const geneTookKitMostCommonlyUsed = gql(/* GraphQL */ `
    query GeneGroupTables($FBgg: String!) {
        geneGroupv2 (id: $FBgg) {
            id
            type
            subgroups: geneGroupv2sByGeneGroupMemberv2GeneGroupIdAndSubgroupIdList {
                id
                name
                nameSgml
                symbol
                symbolSgml
                memberships: geneGroupMemberv2sBySubgroupId( condition: { geneGroupId: $FBgg } ) {
                    ...GeneGroupMember
                }
            }
            memberships: geneGroupMemberv2sByGeneGroupId( condition: { subgroupId: null } ) {
                ...GeneGroupMember
            }
        }
    }
`);

export default geneTookKitMostCommonlyUsed;
