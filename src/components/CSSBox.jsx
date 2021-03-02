import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const FlexBox = styled.div`
  display: flex;
`;
const TextArea = styled.textarea`
  display: flex;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 500px;
  height: 500px;
`;

export function CSSBox(props) {
  const state = useSelector(state => state.boxState.state);

  const copyFunc = () => {
    const text = document.createElement("textarea");
    text.select();
    document.execCommand("copy");
  };
  return (
    <FlexBox>
      <TextArea
        value={`.sampleName{
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
      ></TextArea>
      <button onClick={e => copyFunc()}>copy</button>
    </FlexBox>
  );
}
