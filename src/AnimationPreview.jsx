import React, { useState, useEffect } from 'react';

export function AnimationPreview(props) {
    const background = props.value[0].backgroundType === "color" ? {
        backgroundColor: props.value[0].boxColor,
    } : {
        backgroundImage: props.value[0].backgroundImage,
    };
    const [text, setText] = useState("pause")
    function clickEvent(value) {
        if(value === "running"){
            props.onChange("paused")
            setText("play")
        }
        else{
            props.onChange("running")
            setText("pause")
        }
    }
    return (<div>
        <div 
            className="animation-paper"
            style={{
                width: props.value[0].boxWidth ,
                height: props.value[0].boxHeight,
                borderWidth: props.value[0].borderWidth ,
                borderStyle: props.value[0].borderStyle ,
                borderColor: props.value[0].borderColor,
                transform: props.value[0].transform,
                textAlign: props.value[0].textStyle,
                color: props.value[0].textColor,
                animationPlayState: props.play,
                ...background,
            }}
            >
                {props.value[0].modalText}
        </div>
        <button 
            value={props.play} 
            onClick={e => clickEvent(e.target.value)}
            className="animation_btn" 
        >{text}</button>
    </div>
    )
}