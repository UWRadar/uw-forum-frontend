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

const TrendyContents = [
    {
        userName: "居家小妙招", avatar: "/img/original.png", title: "如何在99度高温的西雅图生存？", content: "炎炎夏日，这些居家避暑小妙招你值得拥有....", tags: ["本周热点话题"]
    },
    { userName: "华大课友", avatar: "/img/original.png", title: "大一水课排名", content: "大一新生如何DIY课表？如何大一拿到高平均GPA？有哪些有意思的水课值得上...", tags: ["本月最热"] },
    { userName: "华大课友", avatar: "/img/original.png", title: "华大课友介绍", content: "UW社团独角兽，帮助国际华人群体适应美国学习环境...", tags: ["1W+赞"] },
    { userName: "华大课友", avatar: "/img/original.png", title: "华大又出新瓜？", content: "华大恋爱渣男渣女避雷宝典正式上线，需要的请留言...", tags: ["1K+赞"] },
]

const typeList = ["今日最新", "租房", "吃瓜", "学习", "华大课友"]

// function getPosts(typeSelected: HomePageTypes, setPosts: React.Dispatch<React.SetStateAction<{
//     userName: string;
//     postDate: string;
//     avatar: string;
//     title: string;
//     content: string;
//     numLikes: number;
//     numComments: number;
//     tags: string[];
// }[]>>) {
//     let api = ServerConfig.SERVER_URL + ServerConfig.GET_POST_BY_TYPE + typeList[typeSelected];
//     console.log(api);
//     fetch(api, {
//         method: "GET",
//     })
//         .then((response) => {
//             if (response.ok) {
//                 return response.json()
//             } else {
//                 console.log("error");
//             }
//         })
//         .then((data) => {
//             if (data) {
//                 // console.log(data);
//                 PostContents = [];
//                 data.forEach((item: any) => {
//                     console.log(item.postDate);
//                     PostContents.push({
//                         userName: item.userName,
//                         postDate: new Date(item.publishDate).toLocaleString(),
//                         // TODO avatar: item.avatar,
//                         avatar: "img/original.png",
//                         title: item.title,
//                         content: item.content,
//                         numLikes: item.upVote,
//                         // TODO numComments: item.numComments,
//                         numComments: 1000,
//                         tags: item.tags.split(","),
//                     })
//                 })
//                 setPosts(PostContents);
//             }
//         })
// }

// function getTrendy() {
//     let api = ServerConfig.SERVER_URL + ServerConfig.GET_TRENDY;
//     console.log(api);
//     fetch(api, {
//         method: "GET",
//     })
//         .then((response) => {
//             if (response.ok) {
//                 return response.json()
//             } else {
//                 console.log("error");
//             }
//         })
//         .then((data) => {
//             if (data) {
//                 console.log(data);
//             }
//         })
// }

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