import React from "react";
import { TrendyContent } from "./Structure";

interface Props {
    Content: TrendyContent;
}

function TrendyCard({ Content }: Props) {
    return (
        <div className="trendyCard">
            <div className="trendyCard-title">{Content.title}</div>
            <div className="trendyCard-content">{Content.content}</div>
            <div className="trendyCard-footer">
                <div className="trendyCard-user">
                    <div>
                        <img className="trendyCard-avatar" src={Content.avatar} alt="avatar" />
                    </div>
                    <div className="trendyCard-userName">{Content.userName}</div>
                </div>
                <div className="trendyCard-tags">
                    {Content.tags.map((tag, idx) => {
                        return <div key={idx} className="trendyCard-tag"> {tag} </div>;
                    })}
                </div>
            </div>
        </div>
    );
}

export default TrendyCard;