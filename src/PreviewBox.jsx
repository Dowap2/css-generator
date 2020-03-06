import React from "react";

export function PreviewBox(props) {
    console.log(props)
    if(props.value == "none"){
        return <div 
            className="box"
            style={{
                backgroundImage: props.backgroundImage
            }}
        />
    }
    return <div 
        className="box"
        style={{
            width: props.width ,
            height: props.height,
            borderWidth: props.borderWidth ,
            borderStyle: props.borderStyle ,
            borderColor: props.borderColor,
            backgroundColor: props.backgroundColor,
            //backgroundImage: props.backgroundImage,
            transform: props.transform,
            textAlign: props.textAlign,
            color: props.color
        }}
        >
            {props.textButton}
            {props.boxText}
    </div>
}