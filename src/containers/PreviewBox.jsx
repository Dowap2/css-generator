import React from "react";
import { useSelector } from "react-redux";

export function PreviewBox(props) {
  const boxState = useSelector(state => state.boxState);
  const background =
    props.backgroundType === "color"
      ? {
          backgroundColor: boxState.boxColor
        }
      : {
          backgroundImage: props.backgroundImage
        };
  return (
    <div
      className="box"
      style={{
        width: boxState.boxWidth,
        height: boxState.boxHeight,
        borderWidth: boxState.borderWidth,
        borderStyle: boxState.borderStyle,
        borderColor: boxState.borderColor,
        transform: props.transform,
        textAlign: props.textAlign,
        color: props.color,
        fontSize: props.fontSize + "px",
        ...background
      }}
    >
      {props.boxText}
    </div>
  );
}
