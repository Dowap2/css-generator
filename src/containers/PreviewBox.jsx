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
  border-color: ${props => props.borderColor};
  border-style: ${props => props.borderStyle};
  border-radius: ${props => props.borderRadius};
  transform: ${props => props.transform};
  text-align: ${props => props.textAlign};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  background: ${props => props.background};
`;

export function PreviewBox(props) {
  const boxState = useSelector(state => state.boxState);
  const background =
    boxState.state.colorType === "gradient"
      ? `linear-gradient(${
          boxState.state.gradientStyle === "n deg"
            ? `${boxState.state.deg || 0}deg`
            : boxState.state.gradientStyle || "to top"
        },${boxState.state.color1 || "#000000"},${boxState.state.color2 ||
          "#ffffff"})`
      : boxState.state.boxColor || "#ffffff";

  const transform = `scaleX(${boxState.state.transformX || 1}) scaleY(${boxState
    .state.transformY || 1}) rotateX(${boxState.state.rotateX ||
    0}deg)rotateY(${boxState.state.rotateY || 0}deg)rotateZ(${boxState.state
    .rotateZ || 0}deg)`;
  const radius = `${boxState.state.borderRadiusTopLeft}% ${boxState.state.borderRadiusTopRight}% ${boxState.state.borderRadiusBottomLeft}% ${boxState.state.borderRadiusBottomRight}%`;
  return (
    <DrawingPaper
      width={`${boxState.state.boxWidth || 500}px`}
      height={`${boxState.state.boxHeight || 500}px`}
      borderWidth={`${boxState.state.borderWidth || 5}px`}
      borderRadius={`${radius || "0%"}`}
      borderStyle={boxState.state.borderStyle || "solid"}
      borderColor={boxState.state.borderColor || "#000000"}
      transform={transform}
      textAlign={boxState.state.textStyle || "left"}
      color={boxState.state.textColor || "#000000"}
      fontSize={`${boxState.state.fontSize || 12}px`}
      background={background || "#ffffff"}
    >
      {boxState.state.text}
    </DrawingPaper>
  );
}
