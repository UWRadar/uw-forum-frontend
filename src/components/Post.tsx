import React from "react";
import { PostContent } from "../types";

interface Props {
  post: PostContent;
}

function Post({ post }: Props) {
  return (
    <div className="post shadow-sm hover:shadow-lg duration-300 transition-all rounded-xl cursor-pointer">
      <div className="flex flex-col gap-2">
        <div className="post-header">
          <div className="post-user">
            <div>
              <img className="post-avatar" src={post.avatar} alt="avatar" />
            </div>
            <div className="text-sm pl-2">{post.userName}</div>
          </div>
          <div className="text-sm text-gray-400"> {post.postDate} </div>
        </div>

        <div className="post-title line-clamp-1">{post.title} </div>
        <div className="post-content line-clamp-3">{post.content} </div>
      </div>
      <div className="post-footer">
        <div className="post-data">
          <div className="post-likes"> {post.numLikes} 人点赞</div>
          <div className="post-comments"> {post.numComments} 人评论</div>
        </div>

        <div className="post-tags">
          {post.tags.map((tag) => {
            return <div className="post-tag"> {tag} </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
