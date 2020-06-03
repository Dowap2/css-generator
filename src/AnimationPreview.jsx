import React from 'react';

export function AnimationPreview(props) {
    const background = props.value[0].backgroundType === "color" ? {
        backgroundColor: props.value[0].boxColor,
    } : {
        backgroundImage: props.value[0].backgroundImage,
    };
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
                textAlign: props.value[0].textAlign,
                color: props.value[0].color,
                ...background,
            }}
            >
                {props.value[0].textButton}
                {props.value[0].boxText}
        </div>
        <button onClick={e=>console.log(props.value)}></button>
    </div>
    )
}