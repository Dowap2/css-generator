import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DrawingPaper = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: ${props => props.width};
  height: ${props => props.height};
  border-width: ${props => props.borderWidth};
  border-color: ${props => props.borderColor || "#000000"};
  border-style: ${props => props.borderStyle || "solid"};
  transform: ${props =>
    props.transform ||
    "scaleX(1) scaleY(1)rotateX(0deg)rotateY(0deg)rotateZ(0deg)"};
  text-align: ${props => props.textAlign || "left"};
  color: ${props => props.color || "#000000"};
  font-size: ${props => props.fontSize};
  background: ${props => props.background || "#ffffff"};
`;

export function PreviewBox(props) {
  const boxState = useSelector(state => state.boxState);
  const background =
    boxState.colorType === "gradient"
      ? `linear-gradient(${
          boxState.gradientStyle === "n deg"
            ? `${boxState.deg}deg`
            : boxState.gradientStyle || "to top"
        },${boxState.color1 || "#000000"},${boxState.color2 || "#ffffff"})`
      : boxState.boxColor || "#ffffff";
  const transform = `scaleX(${boxState.transformX ||
    1}) scaleY(${boxState.transformY || 1}) rotateX(${boxState.rotateX ||
    0}deg)rotateY(${boxState.rotateY || 0}deg)rotateZ(${boxState.rotateZ ||
    0}deg)`;
  return (
    <DrawingPaper
      width={`${boxState.boxWidth || 500}px`}
      height={`${boxState.boxHeight || 500}px`}
      borderWidth={`${boxState.borderWidth || 50}px`}
      borderStyle={boxState.borderStyle}
      borderColor={boxState.borderColor}
      transform={transform}
      textAlign={boxState.textStyle}
      color={boxState.textColor}
      fontSize={`${boxState.fontSize || 12}px`}
      background={background}
    >
      {boxState.text}
    </DrawingPaper>
  );
}
