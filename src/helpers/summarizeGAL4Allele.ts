import {FullAlleleFragment} from '../__generated__/graphql';

type Tool = {id?: string | null, symbol?: string | null};
type Use = {id?: string | null, name?: string | null};

// Fetch the relationship graph once, instead of invoking seven nested GraphQL
// resolvers per allele. Preserve their traversal order and duplicate entries.
export function summarizeGAL4Allele(allele: FullAlleleFragment) {
    const insertedElementTypes: Use[] = [];
    const regRegions: Tool[] = [];
    let encodedTools: (Tool | null)[] = [];
    const encodedToolUses: Use[] = [];
    const taggedWith: Tool[] = [];
    const tagUses: Use[] = [];
    const alsoCarries: Tool[] = [];
    const visit = (node: Pick<FullAlleleFragment, 'tools' | 'toolUses'>) => {
        insertedElementTypes.push(...node.toolUses);
        for (const tool of node.tools) {
            const value = {id: tool.id, symbol: tool.symbol};
            switch (tool.relType) {
                case 'has_reg_region': regRegions.push(value); break;
                case 'encodes_tool':
                    encodedTools.push(value);
                    encodedToolUses.push(...tool.toolUses);
                    break;
                case 'tagged_with':
                    taggedWith.push(value);
                    tagUses.push(...tool.toolUses);
                    break;
                case 'carries_tool': alsoCarries.push(value); break;
            }
        }
    };
    visit(allele);
    const propagate = allele.propagateTransgenicUses === undefined || Boolean(allele.propagateTransgenicUses);
    if (propagate) {
        for (const insertion of allele.insertions) {
            for (const construct of insertion.constructs) visit(construct);
        }
        for (const construct of allele.constructs) visit(construct);
    } else {
        // The existing use-summary resolvers discard the top-level `tools`
        // branch when propagation is disabled, including its direct uses.
        encodedToolUses.length = 0;
        tagUses.length = 0;
    }
    if (encodedTools.length === 0 && allele.isConstruct) {
        encodedTools = [allele.gene ?? null];
    }
    return {insertedElementTypes, regRegions, encodedTools, encodedToolUses,
        taggedWith, tagUses, alsoCarries};
}
