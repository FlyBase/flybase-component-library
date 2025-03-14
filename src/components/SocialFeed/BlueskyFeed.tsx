import SocialFeed from "./SocialFeed";
import React, {useEffect} from "react";
import {SocialPostProps} from "./SocialPost";
import LoadingIndicator from "../icons/LoadingIndicator";
import {useBlueskyFeed} from "../../api/bluesky";
import {FeedViewPost, ReasonRepost} from "@atproto/api/dist/client/types/app/bsky/feed/defs";
import {AppBskyEmbedImages, AppBskyFeedPost} from "@atproto/api";
import {ProfileViewBasic} from "@atproto/api/dist/client/types/app/bsky/actor/defs";

type BlueskyFeedProps = {
    accountHandle: string,
    limit?: number
};

const mapPostToProps = (post: FeedViewPost): SocialPostProps => {

    let author = {
        name: post.post.author.displayName || post.post.author.handle,
        handle: post.post.author.handle,
        profileImageUrl: post.post.author.avatar,
        profileUrl: "https://bsky.app/profile/"+post.post.author.handle
    };
    let accountInteractedWith = { ...author };

    if(post.reason?.$type === "app.bsky.feed.defs#reasonRepost" && post.reason.by) {
        author = {
            name: (post.reason.by as ProfileViewBasic).displayName || (post.reason.by as ProfileViewBasic).handle,
            handle: (post.reason.by as ProfileViewBasic).handle,
            profileImageUrl: (post.reason.by as ProfileViewBasic).avatar,
            profileUrl: "https://bsky.app/profile/"+(post.reason.by as ProfileViewBasic).handle
        }
    }


    return {
        author,
        postedTime: (post.post.record as AppBskyFeedPost.Record).createdAt,
        content: (post.post.record as AppBskyFeedPost.Record).text,
        ...(post.reblog ? {
            accountInteractedWith: {
                interactionType: "repost",
                ...accountInteractedWith
            }
        } : ""),
        ...((post.post.embed && post.post.embed.$type === "app.bsky.embed.images#view") ? {
            card: {
                imageURL: (post.post.embed.images as AppBskyEmbedImages.ViewImage[])[0].fullsize,
                imageAltText: (post.post.embed.images as AppBskyEmbedImages.ViewImage[])[0].alt
            }
        } : ""),
    };
};

const MastodonFeed: React.FC<BlueskyFeedProps> = ({ accountHandle, limit }) => {

    const { feed, loadData, isLoading } = useBlueskyFeed("flybase.bsky.social", {
        limit,
        filter: "posts_no_replies"
    });

    useEffect(() => {
        if(!feed && !isLoading) {
            loadData();
        }
    }, [isLoading, loadData, feed]);

    const formattedPosts: SocialPostProps[] | null = !feed ? null : feed.data.feed.map(post => mapPostToProps(post));

    if(!formattedPosts) return <div><LoadingIndicator /></div>;

    return <SocialFeed posts={formattedPosts} />
};
export default MastodonFeed;
