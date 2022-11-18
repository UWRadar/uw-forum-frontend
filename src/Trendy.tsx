import React from "react";
import TrendyCard from "./TrendyCard";
import { TrendyContent } from "./Structure";

interface Props {
    trendyList: TrendyContent[];
}


function Trendy({ trendyList }: Props) {
    const trendyElements = trendyList.map((trendy, idx) => {
        return <TrendyCard key={idx} Content={trendy} />
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