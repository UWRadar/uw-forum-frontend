import React from "react";
import TopicsHeader from "./TypeHeader";
import Post from "./Post";
import { PostContent } from "../types";

interface Props {
    postList: PostContent[];
}

function PostList({ postList }: Props) {
    const postElements = postList.map((post) => {
        return <Post post={post} />
    });
    return (
        <div className="post-list">
            {postElements}
        </div>
    );
}

export default PostList;