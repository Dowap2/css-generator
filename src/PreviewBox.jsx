import React from "react";
import { element } from "prop-types";

export function PreviewBox(props) {
    console.log(props.backgroundColor)

    return <div 
        className="box"
        style={{
            width: props.width ,
            height: props.height,
            borderWidth: props.borderWidth ,
            borderStyle: props.borderStyle ,
            backgroundColor: props.backgroundColor
        }}
    />
}