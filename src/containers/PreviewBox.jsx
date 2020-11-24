import React from "react";
import { useSelector } from "react-redux";

export function PreviewBox(props) {
  const boxState = useSelector(state => state.boxState);

  const background =
    boxState.colorType === "gradient"
      ? {
          backgroundImage: `linear-gradient(${boxState.gradientStyle ||
            "to top"},${boxState.color1 || "#000000"},${boxState.color2 ||
            "#ffffff"})`
        }
      : {
          backgroundColor: boxState.boxColor
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
