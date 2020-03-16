import React from "react";

(() => {})();
export function PreviewBox(props) {
    const background = props.backgroundType === "color" ? {
        backgroundColor: props.backgroundColor,
    } : {
        backgroundImage: props.backgroundImage,
    };
    return <div 
        className="box"
        style={{
            width: props.width ,
            height: props.height,
            borderWidth: props.borderWidth ,
            borderStyle: props.borderStyle ,
            borderColor: props.borderColor,
            transform: props.transform,
            textAlign: props.textAlign,
            color: props.color,
            ...background,
        }}
        >
            {props.textButton}
            {props.boxText}
    </div>
}