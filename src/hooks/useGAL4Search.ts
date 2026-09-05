import {useLazyQuery, useQuery} from "@apollo/client";
import searchExpressionTools from "../api/graphql/searchExpressionTools";
import {
    FullAlleleFragment,
    GetSplitSystemCombinationsQuery,
    QuerySearchExpressionToolsArgs
} from "../__generated__/graphql";
import getAlleles from "../api/graphql/getAlleles";
import getSplitSystemCombinations from "../api/graphql/getSplitSystemCombinations";
import {useEffect, useState} from "react";
import {summarizeGAL4Allele} from "../helpers/summarizeGAL4Allele";
import {gal4DetailOptions} from "../api/graphql/gal4DetailOptions";

export type ExpressionTerm = {
    id: string,
    name?: string | null | undefined,
} | null;

export type AlleleWithExpressionTerms = FullAlleleFragment & ReturnType<typeof summarizeGAL4Allele> & {
    expressionTerms: ExpressionTerm[]
}

export type SSCWithExpressionTerms = Omit<NonNullable<GetSplitSystemCombinationsQuery['splitSystemCombinations']> extends Array<infer SSC> ? SSC : (null | undefined), "componentAlleles"> & {
    componentAlleles: AlleleWithExpressionTerms[]
};

export type ExpressionTermsIndexed = {
    [key: string]: ExpressionTerm[]
}

const appendExpressionTerms = (alleles: FullAlleleFragment[], expressionTerms: ExpressionTermsIndexed) => {
    const allelesWithExpressionTerms: AlleleWithExpressionTerms[] = [];
    alleles.forEach(allele => {
        if(!allele.id) return;
        const matchingTerms = expressionTerms[allele.id];
        allelesWithExpressionTerms.push({
            ...allele,
            ...summarizeGAL4Allele(allele),
            expressionTerms: matchingTerms
        })
    });
    return allelesWithExpressionTerms;
}

const useGAL4Search = (variables: QuerySearchExpressionToolsArgs, mode: "ssc" | "allele" | "both" = "both", enabled = true) => {
    const {
        loading: expressionTermsLoading,
        error: expressionTermsError,
        data: expressionTermsAlleles
    } = useQuery(searchExpressionTools, {variables, skip: !enabled});

    const [getAlleleSearch, {
        loading: alleleSearchLoading,
        error: alleleSearchError
    }] = useLazyQuery(getAlleles, gal4DetailOptions);

    const [getSSCSearch, {
        loading: sscSearchLoading,
        error: sscSearchError
    }] = useLazyQuery(getSplitSystemCombinations, gal4DetailOptions);

    const [alleleSearchResults, setAlleleSearchResults] = useState<AlleleWithExpressionTerms[] | null>(null);
    const [sscSearchResults, setSSCSearchResults] = useState<SSCWithExpressionTerms[] | null>(null);

    useEffect(() => {
        if(enabled && !expressionTermsLoading && !expressionTermsError && expressionTermsAlleles?.alleles) {
            const fbal_ids = expressionTermsAlleles.alleles.map(allele => allele!.id);

            const expressionTermsIndexed: ExpressionTermsIndexed = {};
            expressionTermsAlleles.alleles.forEach(allele => {
                if(!allele) return;
                expressionTermsIndexed[allele.id] = allele.expression_terms;
            })

            if(mode === "allele" || mode === "both") {
                getAlleleSearch({ variables: { fbal_ids }})
                    .then(result => result.data?.alleles && setAlleleSearchResults(
                        appendExpressionTerms(result.data.alleles as FullAlleleFragment[], expressionTermsIndexed)
                    ));
            }

            if(mode === "ssc" || mode === "both") {
                getSSCSearch({ variables: { fbal_ids }})
                    .then(result => result.data?.splitSystemCombinations && setSSCSearchResults(
                        result.data.splitSystemCombinations.map(ssc => ({
                            ...ssc,
                            componentAlleles: appendExpressionTerms(ssc.componentAlleles as FullAlleleFragment[], expressionTermsIndexed)
                        }))
                    ));
            }
        }
    }, [enabled, expressionTermsAlleles?.alleles, expressionTermsError, expressionTermsLoading, getAlleleSearch, getSSCSearch, mode]);

    return {
        loading: expressionTermsLoading || alleleSearchLoading || sscSearchLoading,
        errors: [expressionTermsError, alleleSearchError, sscSearchError].filter(error => error !== undefined),
        data: {
            expressionTerms: expressionTermsAlleles,
            alleleSearch: alleleSearchResults,
            sscSearch: sscSearchResults,
        }
    }
};

export default useGAL4Search;
