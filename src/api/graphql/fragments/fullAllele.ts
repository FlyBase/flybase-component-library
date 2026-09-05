import {gql} from "../../../__generated__";

const FullAllele = gql(/* GraphQL */ `
    fragment FullAllele on Allele {
        id
        symbol
        isConstruct
        stocksCount
        pubCount
        knownLesion
        hasImage
        geneIsRegulatoryRegion
        propagateTransgenicUses
        gene { id symbol }
        mutagens {
            id
            name
        }
        classes {
            id
            name
        }
        insertions {
            id
            symbol
            constructs {
                tools { id symbol relType toolUses: uses { id name } }
                toolUses { id name }
            }
        }
        constructs {
            id
            symbol
            tools { id symbol relType toolUses: uses { id name } }
            toolUses { id name }
        }
        tools { id symbol relType toolUses: uses { id name } }
        toolUses { id name }
    }
`);

export default FullAllele;
