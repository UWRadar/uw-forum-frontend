import React, { useEffect } from "react";
import Banner from "../components/Banner";
import PostList from "../components/PostList";
import Trendy from "../components/Trendy";
import SideBar from "../components/SideBar";
import TypeHeader from "../components/TypeHeader";
import { TrendyContent, PostContent } from "../types";
import { HomePageTypes } from "../components/Enums";
import ServerConfig from "../ServerConfig";
import { getPosts } from "../api";

let PostContents = [
    { userName: "华大课友", postDate: "发布时间：18小时前", avatar: "/img/original.png", title: "华大课友介绍", content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。", numLikes: 1000, numComments: 1000, tags: ["租房"] },
    { userName: "华大课友", postDate: "发布时间：18小时前", avatar: "/img/original.png", title: "华大课友介绍", content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。", numLikes: 1000, numComments: 1000, tags: ["租房"] },
    { userName: "华大课友", postDate: "发布时间：18小时前", avatar: "/img/original.png", title: "华大课友介绍", content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。", numLikes: 1000, numComments: 1000, tags: ["租房"] },
    { userName: "华大课友", postDate: "发布时间：18小时前", avatar: "/img/original.png", title: "华大课友介绍", content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。", numLikes: 1000, numComments: 1000, tags: ["租房", "美食", "学习"] },
]



const typeList = ["今日最新", "租房", "吃瓜", "学习", "华大课友"]

function HomePage() {
    const [typeSelected, setTypeSelected] = React.useState(HomePageTypes.Latest);
    const [posts, setPosts] = React.useState(PostContents);

    useEffect(() => {
        // console.log(typeSelected);
        // getPosts(typeSelected, setPosts);
        getPosts(typeSelected).then((data) => {
            if (data) {
                setPosts(() => data.map((item: any) => ({
                    userName: item.userName,
                    postDate: new Date(item.publishDate).toLocaleString(),
                    // TODO avatar: item.avatar,
                    avatar: "img/original.png",
                    title: item.title,
                    content: item.content,
                    numLikes: item.upVote,
                    // TODO numComments: item.numComments,
                    numComments: 1000,
                    tags: item.tags.split(","),
                })));
            }
        }).catch((error) => {
            console.log(error);
        })
    }, [typeSelected]);

    // getTrendy();


    return (
        <div className="homepage">
            <Banner />
            <div className="homepage-main">
                <Trendy />
                <div className="homepage-main-post">
                    <div>
                        <div className="topics-list">
                            <TypeHeader typeList={typeList} typeSelected={typeSelected} setTypeSelected={setTypeSelected} />
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