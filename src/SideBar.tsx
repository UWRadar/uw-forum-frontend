import React from "react";
import img from "./img/original.png";
import zhihu from "./img/zhihu.svg";
import weibo from "./img/weibo.svg";
import bilibili from "./img/bilibili.svg";
import wechat from "./img/wechat.svg";

// TODO: update links
function SideBar() {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={img} alt="logo" />
            </div>
            <div className="sidebar-appName">
                <p>华大树洞</p>
            </div>
            <div className="sidebar-introduction">
                <p>不管你是想发帖求助，倾诉生活中的烦恼，还是找一起玩的朋友，华大树洞等你来！</p>
            </div>

            <div className="sidebar-links">
                <div>
                    <div className="link">
                        <a href="">关于我们</a>
                    </div>
                    <div className="link">
                        <a href="">联系我们</a>
                    </div>
                    <div className="link">
                        <a href="">社区守则</a>
                    </div>
                    <div className="link">
                        <a href="">常见问题</a>
                    </div>
                </div>
            </div>

            <div className="sidebar-social">
                <div>
                    <a href="https://mp.weixin.qq.com/">
                        <img src={wechat} alt="wechat" />
                    </a>
                </div>
                <div>
                    <a href="https://www.zhihu.com/people/">
                        <img src={zhihu} alt="zhihu" />
                    </a>
                </div>
                <div>
                    <a href="https://weibo.com/">
                        <img src={weibo} alt="weibo" />
                    </a>
                </div>
                <div>
                    <a href="https://space.bilibili.com/">
                        <img src={bilibili} alt="bilibili" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SideBar;