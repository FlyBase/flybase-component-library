import {FullAlleleFragment, GetSplitSystemCombinationsQuery} from "../__generated__/graphql";

/*
* GraphQL Utils/Helpers/Extensions
* */
export type DataClass = {
    id?: string | null
    symbol?: string | null,
    name?: string | null,
    [key: string]: any
};

export type ExpressionTerm = {
    id: string,
    name?: string | null | undefined,
} | null;

export type AlleleWithExpressionTerms = DataClass & FullAlleleFragment & {
    expressionTerms: ExpressionTerm[]
}

export type SSCWithExpressionTerms = DataClass & Omit<NonNullable<GetSplitSystemCombinationsQuery['splitSystemCombinations']> extends Array<infer SSC> ? SSC : (null | undefined), "componentAlleles"> & {
    componentAlleles: AlleleWithExpressionTerms[]
};
