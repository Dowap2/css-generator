import React from "react";

export function PreviewBox(props) {
    console.log(props)
    return <div 
        className="box"
        style={{
            borderWidth: props.borderWidth ,
            BackgroundColor: props.BackgroundColor
        }}
    />
}