import React from "react";
import { TrendyContent } from "../types";

interface Props {
  Content: TrendyContent;
}

function TrendyCard({ Content }: Props) {
  return (
    <div className="trendyCard shadow-sm hover:shadow-lg hover:bg-purple-600/70 duration-300 transition-all cursor-pointer">
      <div>
        <div className="trendyCard-title line-clamp-2">{Content.title}</div>
        <div className="trendyCard-content line-clamp-2">{Content.content}</div>
      </div>
      <div className="trendyCard-footer">
        <div className="flex gap-2 items-center">
          <div>
            <img
              className="trendyCard-avatar"
              src={Content.avatar}
              alt="avatar"
            />
          </div>
          <div className="text-white text-sm">{Content.userName}</div>
        </div>
        <div className="trendyCard-tags">
          {Content.tags.map((tag) => {
            return <div className="px-2 py-1.5 bg-white text-[#9683BD] text-xs rounded-full"> {tag} </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default TrendyCard;
