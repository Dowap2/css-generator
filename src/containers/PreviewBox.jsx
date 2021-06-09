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
  box-shadow: ${props => props.shadow};
`;

export function PreviewBox(props) {
  const state = useSelector(state => state.boxState).state;

  const background =
    state.colorType === "gradient"
      ? `linear-gradient(${
          state.gradientStyle === "n deg"
            ? `${state.deg || 0}deg`
            : state.gradientStyle || "to top"
        },${state.color1 || "#000"},${state.color2 || "#fff"})`
      : state.boxColor || "#fff";

  const transform = `scaleX(${state.transformX ||
    1}) scaleY(${state.transformY || 1}) rotateX(${state.rotateX ||
    0}deg)rotateY(${state.rotateY || 0}deg)rotateZ(${state.rotateZ || 0}deg)`;

  const radius = `${state.borderRadiusTopLeft}% ${state.borderRadiusTopRight}% ${state.borderRadiusBottomLeft}% ${state.borderRadiusBottomRight}%`;

  return (
    <DrawingPaper
      width={`${state.boxWidth || 500}px`}
      height={`${state.boxHeight || 500}px`}
      borderWidth={`${state.borderWidth || 5}px`}
      borderRadius={`${radius || "0%"}`}
      borderStyle={state.borderStyle || "solid"}
      borderColor={state.borderColor || "#000"}
      transform={transform}
      textAlign={state.textStyle || "left"}
      color={state.textColor || "#000"}
      fontSize={`${state.fontSize || 12}px`}
      background={background || "#fff"}
      shadow={`${state.shadowX}px ${state.shadowY}px ${state.shadowColor}`}
    >
      {state.text}
    </DrawingPaper>
  );
}
