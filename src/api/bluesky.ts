import {useAPI} from "./useApi";
import {AppBskyFeedGetAuthorFeed, ComAtprotoIdentityResolveHandle} from "@atproto/api";
import {useEffect} from "react";

export const BLUESKY_PUBLIC_API_BASE_URL = "https://public.api.bsky.app";

export type BlueskyResolveHandleResponse = {
    did: string
};


export const useBlueskyResolveHandle = (handle: string) =>
    useAPI<{}, ComAtprotoIdentityResolveHandle.Response>(
        `${BLUESKY_PUBLIC_API_BASE_URL}/xrpc/com.atproto.identity.resolveHandle`,
        undefined,
        { handle }
    );

export const useBlueskyGetAuthorFeed = (did: string, params: AppBskyFeedGetAuthorFeed.QueryParams) =>
    useAPI<{}, AppBskyFeedGetAuthorFeed.Response >(
        `${BLUESKY_PUBLIC_API_BASE_URL}/xrpc/app.bsky.feed.getAuthorFeed`,
        undefined,
        params
    );

export const useBlueskyFeed = (handle: string, params: Omit<AppBskyFeedGetAuthorFeed.QueryParams, 'actor'>) => {
    const { response: handleInfo, loadData: loadHandle, isLoading: isLoadingHandle } = useBlueskyResolveHandle(handle);
    const { response: feed, loadData: loadFeed, isLoading: isLoadingFeed } = useBlueskyGetAuthorFeed(handle, {
        actor: handleInfo?.data?.did || "",
        ...params
    });

    console.log("handleInfo", handleInfo);

    const loadData = () => {
        if(!handleInfo && !isLoadingHandle) {
            loadHandle();
        }
    };

    useEffect(() => {
        if(handleInfo?.data?.did && !feed && !isLoadingFeed) {
            loadFeed();
        }
    }, [handleInfo, isLoadingFeed, loadFeed, feed]);

    return { feed, handleInfo, loadData, isLoading: isLoadingHandle || isLoadingFeed };
};
