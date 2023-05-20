import { useEffect, useState } from "react";
import TrendyCard from "./TrendyCard";
import { getTrendy } from "../api";

const TrendyContents = [{
	userName: "居家小妙招",
	avatar: "/img/original.png",
	title: "如何在99度高温的西雅图生存？",
	content: "炎炎夏日，这些居家避暑小妙招你值得拥有....",
	tags: ["本周热点话题"]
}, {
	userName: "华大课友",
	avatar: "/img/original.png",
	title: "大一水课排名",
	content: "大一新生如何DIY课表？如何大一拿到高平均GPA？有哪些有意思的水课值得上...",
	tags: ["本月最热"]
}, {
	userName: "华大课友",
	avatar: "/img/original.png",
	title: "华大课友介绍",
	content: "UW社团独角兽，帮助国际华人群体适应美国学习环境...",
	tags: ["1W+赞"]
}, {
	userName: "华大课友",
	avatar: "/img/original.png",
	title: "华大又出新瓜？",
	content: "华大恋爱渣男渣女避雷宝典正式上线，需要的请留言...",
	tags: ["1K+赞"]
}];

function Trendy() {
	const [trendyContents, setTrendyContents] = useState(TrendyContents);

	useEffect(() => {
		getTrendy().then((data) => {
			console.log("trendy data", data);
			if (data) {
				setTrendyContents(() => data.map((item) => ({
					userName: "居家小妙招",
					avatar: "",
					title: "如何在99度高温的西雅图生存？",
					content: "炎炎夏日，这些居家避暑小妙招你值得拥有....",
					tags: ["本周热点话题"],
				})));
			}
		}).catch((error) => {
			console.log(error);
		});
	}, []);

	const trendyElements = trendyContents.map((trendy, idx) => {
		return (
			<TrendyCard key={idx} Content={trendy} />
		);
	});

	return (
		<div className="trendy">
			<div className="trendy-title">热点话题</div>
			<div className="trendy-list">
				{trendyElements}
			</div>
		</div>
	);
}

export default Trendy;
