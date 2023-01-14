import Post from "./Post";
import { PostContent } from "./Structure";

interface Props {
	postList: PostContent[];
}

function PostList({ postList }: Props) {
	const postElements = postList.map((post, idx) => {
		return (
			<Post key={idx} post={post} />
		);
	});
	return (
		<div className="post-list">
			{postElements}
		</div>
	);
}

export default PostList;