import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { FlexBox } from "ui/ContainerBox";

const AreaButtonBox = styled.div`
  display: flex;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 700px;
  width: 500px;
`;
const TextArea = styled.textarea`
  padding: 0;
  width: 500px;
  height: 500px;
  border: 1px solid #000000;
`;
const Button = styled.button`
  width: 502px;
  height: 100px;
  border: 1px solid #000000;
`;

export function CSSBox(props) {
  const state = useSelector(state => state.boxState.state);

  const copyFunc = () => {
    const text = document.getElementsByClassName("textArea");
    text[0].select();
    document.execCommand("copy");
    text[0].blur();
    alert("클립보드에 복사 되었습니다.");
  };
  const cssText = `.sampleName{
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
}`;
  return (
    <FlexBox>
      <AreaButtonBox>
        <TextArea className="textArea" value={cssText}></TextArea>
        <Button onClick={e => copyFunc()}>copy</Button>
      </AreaButtonBox>
    </FlexBox>
  );
}
