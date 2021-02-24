import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const FlexBox = styled.div`
  display: flex;
`;
const TextArea = styled.textarea`
  width: 500px;
  height: 500px;
`;

export function CSSBox(props) {
  const state = useSelector(state => state.boxState.state);
  return (
    <FlexBox>
      <TextArea>
        {`.name{
    width: ${state.boxWidth}px
    height ${state.boxHeight}px
    border ${state.borderWidth}px ${state.borderStyle} ${state.borderColor}
    background: ${
      state.colorType === "color"
        ? state.boxColor
        : `linear-gradient(${
            state.gradientStyle === "n deg"
              ? `${state.deg}deg`
              : `${state.gradientStyle}`
          }, ${state.color1}, ${state.color2})`
    }
    color: ${state.textColor}
    font-size: ${state.fontSize}px
    text-align: ${state.textStyle}
    transform: rotateX(${state.rotateX}deg) rotateY(${
          state.rotateY
        }deg) rotateZ(${state.rotateZ}deg) translateX(${
          state.transformX
        }px); translateY(${state.transformY}px);
}`}
      </TextArea>
    </FlexBox>
  );
}
