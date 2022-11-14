import React from "react";
import { PostContent } from "./Structure";

interface Props {
    post: PostContent;
}

function Post({ post }: Props) {
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-user">
                    <div>
                        <img className="post-avatar" src={post.avatar} alt="avatar" />
                    </div>
                    <div className="post-userName">&nbsp; {post.userName}</div>
                </div>
                <div className="post-date"> {post.postDate} </div>
            </div>

            <div className="post-title">{post.title} </div>
            <div className="post-content">{post.content} </div>
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