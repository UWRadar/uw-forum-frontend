import React from "react";
import { TrendyContent } from "../types";

interface Props {
  Content: TrendyContent;
}

function TrendyCard({ Content }: Props) {
  return (
    <div className="trendyCard">
      <div>
        <div className="trendyCard-title line-clamp-2">{Content.title}</div>
        <div className="trendyCard-content line-clamp-2">{Content.content}</div>
      </div>
      <div className="trendyCard-footer">
        <div className="trendyCard-user">
          <div>
            <img
              className="trendyCard-avatar"
              src={Content.avatar}
              alt="avatar"
            />
          </div>
          <div className="trendyCard-userName">{Content.userName}</div>
        </div>
        <div className="trendyCard-tags">
          {Content.tags.map((tag) => {
            return <div className="trendyCard-tag"> {tag} </div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default TrendyCard;
