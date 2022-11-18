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
        <div className="flex flex-col gap-6">
            {postElements}
        </div>
    );
}

export default PostList;