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
  const transform = `scaleX(${boxState.transformX ||
    1}) scaleY(${boxState.transformY || 1}) rotateX(${boxState.rotateX ||
    0}deg)rotateY(${boxState.rotateY || 0}deg)rotateZ(${boxState.rotateZ ||
    0}deg)`;

  return (
    <div
      className="box"
      style={{
        width: boxState.boxWidth,
        height: boxState.boxHeight,
        borderWidth: boxState.borderWidth,
        borderStyle: boxState.borderStyle,
        borderColor: boxState.borderColor,
        transform: transform,
        textAlign: boxState.textStyle,
        color: boxState.textColor,
        fontSize: boxState.fontSize + "px",
        ...background
      }}
    >
      {props.boxText}
    </div>
  );
}
