import {gql} from "../../../__generated__";

const GeneGroupMember = gql(/* GraphQL */ `
    fragment GeneGroupMember on GeneGroupMemberv2 {
        geneGroupPubs
        gene {
            id
            symbol
            symbolSgml
            name
            nameSgml
            aka
            pubs
            antibody
            transgenicConstructs: geneAllelev2sByGeneId(condition: { isConstruct: true }) {
                allele {
                    id
                    symbol
                }
            }
            classicalAndInsertionAlleles: geneAllelev2sByGeneId(condition: { isConstruct: false }) {
                allele {
                    id
                    symbol
                }
            }
            geneGroups: geneGroupMemberv2sByGeneId(condition: { subgroupId: null }) {
                geneGroup {
                    id
                    symbol
                    name
                    type
                }
            }
            experimentalDiseaseModels: geneDiseasev2sByGeneId( condition: { isExperimental: true } ) {
                disease {
                    id
                    name
                }
            }
            potentialDiseaseModels: geneDiseasev2sByGeneId( condition: { isExperimental: false } ) {
                disease {
                    id
                    name
                }
            }
            humanOrthologs: geneHumanOrthologv2sByGeneId {
                dioptScore
                name
                ortholog {
                    id
                    symbol
                    organismId
                }
            }
            testisSpecificityIndex
            enzymes: enzymev2sByGeneEnzymev2GeneIdAndEnzymeIdList {
                id
                name
            }
            experimentalGoMolecularFunctions: geneGoMolecularFunctionv2sByGeneId(condition: { isExperimental: true }) {
                goId
                goMolecularFunction
            }
            nonExperimentalGoMolecularFunctions: geneGoMolecularFunctionv2sByGeneId(condition: { isExperimental: false }) {
                goId
                goMolecularFunction
            }
            cytogenicMap
        }
    }
`);

export default GeneGroupMember;
