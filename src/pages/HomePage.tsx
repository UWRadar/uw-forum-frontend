import { Dispatch, SetStateAction, useEffect, useState } from "react";
import PostList from "../components/PostList";
import Trendy from "../components/Trendy";
import SideBar from "../components/SideBar";
import TypeHeader from "../components/TypeHeader";
import { HomePageTypes } from "../types";
import ServerConfig from "../ServerConfig";
import Header from "../components/Header";

interface Post {
	avatar: string;
	content: string;
	numComments: number;
	postDate: string;
	publishDate: string;
	tags: string;
	title: string;
	userName: string;
	upVote: number;
}

let PostContents = [{
	userName: "华大课友",
	postDate: "发布时间：18小时前",
	avatar: "/img/original.png",
	title: "华大课友介绍",
	content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。",
	numLikes: 1000,
	numComments: 1000,
	tags: ["租房"]
}, {
	userName: "华大课友",
	postDate: "发布时间：18小时前",
	avatar: "/img/original.png",
	title: "华大课友介绍",
	content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。",
	numLikes: 1000,
	numComments: 1000,
	tags: ["租房"]
}, {
	userName: "华大课友",
	postDate: "发布时间：18小时前",
	avatar: "/img/original.png",
	title: "华大课友介绍",
	content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。",
	numLikes: 1000,
	numComments: 1000,
	tags: ["租房"]
}, {
	userName: "华大课友",
	postDate: "发布时间：18小时前",
	avatar: "/img/original.png",
	title: "华大课友介绍",
	content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。",
	numLikes: 1000,
	numComments: 1000,
	tags: ["租房"]
}];

const typeList = ["今日最新", "租房", "吃瓜", "学习", "华大课友"];

function getPosts(
	typeSelected: HomePageTypes,
	setPosts: Dispatch<SetStateAction<{
		userName: string;
		postDate: string;
		avatar: string;
		title: string;
		content: string;
		numLikes: number;
		numComments: number;
		tags: string[];
	}[]>>
) {
	const api = ServerConfig.SERVER_URL + ServerConfig.GET_POST_BY_TYPE +
		typeList[typeSelected];
	console.log(api);
	fetch(api, {
		method: "GET",
	}).then((response) => {
		if (response.ok) {
			return response.json();
		} else {
			console.log("error");
		}
	}).then((data) => {
		if (data) {
			console.log("post", data);
			PostContents = [];
			data.forEach((item: Post) => {
				console.log(item.postDate);
				PostContents.push({
					userName: item.userName,
					postDate: new Date
					(item.publishDate).toLocaleString(),
					// TODO avatar: item.avatar,
					avatar: "/img/original.png",
					title: item.title,
					content: item.content,
					numLikes: item.upVote,
					// TODO numComments: item.numComments,
					numComments: 1000,
					tags: item.tags.split(","),
				});
			});
			setPosts(PostContents);
		}
	});
}

function getTrendy() {
	const api = ServerConfig.SERVER_URL + ServerConfig.GET_TRENDY;
	console.log(api);
	fetch(api, {
		method: "GET",
	})
		.then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				console.log("error");
			}
		})
		.then((data) => {
			if (data) {
				console.log(data);
			}
		});
}

function HomePage() {
	const [typeSelected, setTypeSelected] = useState(HomePageTypes.Latest);
	const [posts, setPosts] = useState(PostContents);

	useEffect(() => {
		// console.log(typeSelected);
		getPosts(typeSelected, setPosts);
	}, [typeSelected]);

	useEffect(() => {
		getTrendy();
		getPosts(typeSelected, setPosts);
	}, []);

	return (
		<div className="homepage">
			<Header />
			<div className="homepage-main">
				<Trendy />
				<div className="homepage-main-post">
					<div>
						<div className="topics-list">
							<TypeHeader
								typeList={typeList}
								typeSelected={typeSelected}
								setTypeSelected={setTypeSelected}
							/>
						</div>
						{/* <PostList postList={PostContents} /> */}
						<PostList postList={posts} />
					</div>
					<SideBar />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
