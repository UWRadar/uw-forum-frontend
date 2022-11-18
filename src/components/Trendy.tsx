import React from "react";
import TrendyCard from "./TrendyCard";
import { TrendyContent } from "../types";
import "./Trendy.css";

interface Props {
    trendyList: TrendyContent[];
}


function Trendy({ trendyList }: Props) {
    const trendyElements = trendyList.map((trendy) => {
        return <TrendyCard Content={trendy} />
    });

    return (
        <div className="trendy">
            <div className="trendy-title">热点话题</div>
            <div className="trendy-list scrollbar-hide">
                {trendyElements}
            </div>
        </div>
    );
}

export default Trendy;