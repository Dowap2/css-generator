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
  border-width: ${props => props.borderWidth || "5px"};
  border-color: ${props => props.borderColor || "#000000"};
  border-style: ${props => props.borderStyle};
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
    boxState.state.colorType === "gradient"
      ? `linear-gradient(${
          boxState.state.gradientStyle === "n deg"
            ? `${boxState.state.deg}deg`
            : boxState.state.gradientStyle || "to top"
        },${boxState.state.color1 || "#000000"},${boxState.state.color2 ||
          "#ffffff"})`
      : boxState.state.boxColor || "#ffffff";
  const transform = `scaleX(${boxState.transformX || 1}) scaleY(${boxState.state
    .transformY || 1}) rotateX(${boxState.state.rotateX ||
    0}deg)rotateY(${boxState.state.rotateY || 0}deg)rotateZ(${boxState.state
    .rotateZ || 0}deg)`;
  return (
    <DrawingPaper
      width={`${boxState.state.boxWidth || 500}px`}
      height={`${boxState.state.boxHeight || 500}px`}
      borderWidth={`${boxState.state.borderWidth || 50}px`}
      borderStyle={boxState.state.borderStyle || "solid"}
      borderColor={boxState.state.borderColor}
      transform={transform}
      textAlign={boxState.state.textStyle}
      color={boxState.state.textColor}
      fontSize={`${boxState.state.fontSize || 12}px`}
      background={background}
    >
      {boxState.state.text}
      <button onClick={e => console.log(boxState)}></button>
    </DrawingPaper>
  );
}
