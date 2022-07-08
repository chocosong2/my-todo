import React from "react";
import "./Template.css"


const Template = (props, todoLength) => {
    return (
        <div className="Template">
            <div className="title">오늘의 할일({props.todoLength})</div>
            <div>{props.children}</div>
        </div>)
}

export default Template;