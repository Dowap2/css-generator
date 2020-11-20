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
  const width = useSelector(state => state.boxWidth.boxWidth);
  const height = useSelector(state => state.boxHeight.boxHeight);
  return (
    <div
      className="box"
      style={{
        width: width,
        height: height,
        borderWidth: props.borderWidth,
        borderStyle: props.borderStyle,
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
