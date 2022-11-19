import React, { useState } from "react";

interface Props {
  typeList: string[];
}

function onClick() {
  console.log("clicked");
}

function TypeHeader({ typeList }: Props) {
  const [tab, setTab] = useState(0);
  const topicsElement = typeList.map((type, i) => {
    return (
      <div
        key={type}
        className={`type ${tab === i ? "type-selected" : ""}`}
        onClick={() => setTab(() => i)}
      >
        <p>{type}</p>
      </div>
    );
  });
  return <div className="type-header">{topicsElement}</div>;
}

export default TypeHeader;
