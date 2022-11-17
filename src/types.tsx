import React from "react";

interface PostContent {
    userName: string;
    avatar: string;
    postDate: string;
    title: string;
    content: string;
    numLikes: number;
    numComments: number;
    tags: string[];
}

// export default PostContent;

interface TrendyContent {
    userName: string;
    title: string;
    avatar: string;
    content: string;
    tags: string[];
}


export interface UserProfileItem {
    avatarUrl: string;
    username: string;
  }
  

export type { PostContent, TrendyContent };