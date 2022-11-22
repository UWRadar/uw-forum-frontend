import React, { Dispatch, SetStateAction } from "react";
import { HomePageTypes } from "./Enums";
import classNames from 'classnames/bind';

interface Props {
    typeList: string[];
    typeSelected: HomePageTypes;
    setTypeSelected: Dispatch<SetStateAction<HomePageTypes>>
}

function onClick() {
    console.log("clicked");
}

function TypeHeader({ typeList, typeSelected, setTypeSelected }: Props) {
    const topicsElement = typeList.map((type, idx) => {
        let className;
        if (typeSelected === idx) {
            return (
                <div className="type type-focused" key={idx} onClick={() => setTypeSelected(idx)}>
                    <p>{type}</p>
                </div>
            );
        }
        return <div key={idx} className="type" onClick={() => setTypeSelected(idx)}><p>{type}</p></div>
    });
    return (
        <div className="type-header">
            {topicsElement}
        </div>
    );
}

export default TypeHeader;