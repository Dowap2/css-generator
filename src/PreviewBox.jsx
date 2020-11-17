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
  const width = useSelector(state => state.boxValue.boxWidth);
  return (
    <div
      className="box"
      style={{
        width: width,
        height: props.height,
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
      <button onClick={e => console.log(width)}>click</button>
    </div>
  );
}
