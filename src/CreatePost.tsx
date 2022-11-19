import React, { useState, useEffect, Dispatch, SetStateAction } from "react";

// dummy data
const labelValues = ["学习", "租房", "华大课友"]

function CreatePost() {

    // false for question; true for sharings
    const [isQuestion, setIsQuestion] = useState<boolean>(true);
    const [labels, setLabels] = useState<{[id: string]: boolean;}>({});

    const handlePostTypeClick = () => {
        setIsQuestion(!isQuestion);
        console.log(isQuestion);
    }

    const handleLabelClick = (event: any) => {
        const curLabels: {[id: string]: boolean;} = labels;
        const curEventLabel = event.target.textContent;
        console.log(curEventLabel);
        console.log(event.target);
        curLabels[curEventLabel] = !curLabels[curEventLabel];
        setLabels(curLabels);
        console.log(curLabels);
    }

    useEffect(() => {
        const defaultLabels: {[id: string]: boolean;} = {};
        labelValues.forEach((labelValue) => {
            defaultLabels[labelValue] = false;
        })
        setLabels(defaultLabels);
    }, []);

    return (
        <div className="create-post">
            <div className="create-post-head-bar">
                <div>说出你的故事</div>
            </div>

            <div>
                <div>帖子类型：</div>
                <div>
                    <div className={isQuestion ? "post-type-btn-selected" : "post-type-btn-unselected"} onClick={handlePostTypeClick}>提问</div>
                    <div className={isQuestion ? "post-type-btn-unselected" : "post-type-btn-selected"} onClick={handlePostTypeClick}>分享</div>
                </div>
            </div>

            <div></div>
            {isQuestion ? (
                <div>
                    <div>问题内容：</div>
                    {/*https://mui.com/material-ui/react-text-field/*/}
                </div>
            ) : (<div>这是分享</div>)}
            <div>
                <div>标签：</div>
                {labelValues.map((label) => {
                    console.log(labels[label]);
                    return (
                        <div key={label} className={labels[label] ? "label-selected" : "label-unselected"} onClick={handleLabelClick}>{label}</div>
                    )
                })}
            </div>

            <div>
                {/*checkbox ui*/}
                <div>我想要匿名发帖</div>
            </div>

            <div>
                <div>退出</div>
                <div>发布</div>
            </div>
        </div>
    );
}

export default CreatePost;