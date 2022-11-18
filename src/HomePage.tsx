import React, { useEffect } from "react";
import Banner from "./Banner";
import PostList from "./PostList";
import Trendy from "./Trendy";
import SideBar from "./SideBar";
import img from "./img/original.png";
import TypeHeader from "./TypeHeader";
import { TrendyContent, PostContent } from "./Structure";
import { HomePageTypes } from "./Enums";
import ServerConfig from "./ServerConfig";

const PostContents = [
    { userName: "华大课友", postDate: "发布时间：18小时前", avatar: img, title: "华大课友介绍", content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。", numLikes: 1000, numComments: 1000, tags: ["租房"] },
    { userName: "华大课友", postDate: "发布时间：18小时前", avatar: img, title: "华大课友介绍", content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。", numLikes: 1000, numComments: 1000, tags: ["租房"] },
    { userName: "华大课友", postDate: "发布时间：18小时前", avatar: img, title: "华大课友介绍", content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。", numLikes: 1000, numComments: 1000, tags: ["租房"] },
    { userName: "华大课友", postDate: "发布时间：18小时前", avatar: img, title: "华大课友介绍", content: "华大课友是一个社团，它分为技术部，策划部，人力资源部，公共宣传部，编辑部。其中，技术部人数最多，也是最厉害的一个部门。", numLikes: 1000, numComments: 1000, tags: ["租房", "美食", "学习"] },
]

const TrendyContents = [
    { userName: "居家小妙招", avatar: img, title: "如何在99度高温的西雅图生存？", content: "炎炎夏日，这些居家避暑小妙招你值得拥有....", tags: ["本周热点话题"] },
    { userName: "华大课友", avatar: img, title: "大一水课排名", content: "大一新生如何DIY课表？如何大一拿到高平均GPA？有哪些有意思的水课值得上...", tags: ["本月最热"] },
    { userName: "华大课友", avatar: img, title: "华大课友介绍", content: "UW社团独角兽，帮助国际华人群体适应美国学习环境...", tags: ["1W+赞"] },
    { userName: "华大课友", avatar: img, title: "华大又出新瓜？", content: "华大恋爱渣男渣女避雷宝典正式上线，需要的请留言...", tags: ["1K+赞"] },
]

const typeList = ["今日最新", "租房", "吃瓜", "学习", "华大课友"]

function getPosts(typeSelected: HomePageTypes) {
    fetch(ServerConfig.SERVER_URL + "post/getPostByType", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            type: typeSelected,
        }),
    })
        .then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                console.log("error");
            }
        })
        .then((data) => {
            if (data) {
                console.log(data);
            }
        })
}

function HomePage() {
    const [typeSelected, setTypeSelected] = React.useState(HomePageTypes.Latest);
    useEffect(() => {
        // console.log(typeSelected);
        getPosts(typeSelected);
    }, [typeSelected]);

    return (
        <div className="homepage">
            <Banner />
            <div className="homepage-main">
                <Trendy trendyList={TrendyContents} />
                <div className="homepage-main-post">
                    <div>
                        <div className="topics-list">
                            <TypeHeader typeList={typeList} typeSelected={typeSelected} setTypeSelected={setTypeSelected} />
                        </div>
                        <PostList postList={PostContents} />
                    </div>
                    <SideBar />
                </div>
            </div>
        </div>
    );
}

export default HomePage;