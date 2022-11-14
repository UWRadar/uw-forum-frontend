import React from "react";

interface Props {
    typeList: string[];
}

function onClick() {
    console.log("clicked");
}

function TypeHeader({ typeList }: Props) {
    const topicsElement = typeList.map((type) => {
        return <div key={type} className="type" onClick={() => alert("click " + type)}><p>{type}</p></div>
    });
    return (
        <div className="type-header">
            {topicsElement}
        </div>
    );
}

export default TypeHeader;