import React, { useState, useEffect, Dispatch, SetStateAction } from "react";

// dummy data
const labelValues = ["学习", "租房", "华大课友"]

function CreatePost() {

    // false for question; true for sharings
    const [isQuestion, setIsQuestion] = useState<boolean>(true);
    const [labels, setLabels] = useState<{[id: string]: boolean;}>({});
    const [questionInput, setQuestionInput] = useState<string>("");
    const [titleInput, setTitleInput] = useState<string>("");
    const [contentInput, setContentInput] = useState<string>("");

    const handlePostTypeClick = () => {
        setIsQuestion(!isQuestion);
    }

    const handleLabelClick = (event: any) => {
        const curLabels: {[id: string]: boolean;} = labels;
        const curEventLabel = event.target.textContent;
        if (event.target.className == "label-unselected") {
            event.target.className = "label-selected";
        } else {
            event.target.className = "label-unselected";
        }

        curLabels[curEventLabel] = !curLabels[curEventLabel];
        setLabels(curLabels);
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
                    <input onChange={(event) => setQuestionInput(event.target.value)}/>
                    {/*https://mui.com/material-ui/react-text-field/*/}
                </div>
            ) : (
                <div>
                    <div>标题：</div>
                    <input />
                    <div>分享内容：</div>
                    {/* rich text */}
                </div>
            )}
            <div>
                <div>标签：</div>
                {labelValues.map((label) => {
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