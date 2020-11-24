import React from "react";
import { useSelector } from "react-redux";

export function PreviewBox(props) {
  const background =
    props.backgroundType === "color"
      ? {
          backgroundColor: props.backgroundColor
        }
      : {
          backgroundImage: props.backgroundImage
        };
  const { boxWidth, boxHeight, borderWidth, borderStyle } = useSelector(
    state => state.boxState
  );
  return (
    <div
      className="box"
      style={{
        width: boxWidth,
        height: boxHeight,
        borderWidth: borderWidth,
        borderStyle: borderStyle,
        borderColor: props.borderColor,
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
