import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import { SwitchButton } from "containers/SwitchButton";
import { CSSBox } from "components/CSSBox";
import { ViewModeSwitchButton } from "containers/ViewModeSwitchButton";

import { PreviewBox } from "containers/PreviewBox";

const DrawingPaper = styled.div`
  display: flex;
  background: #f5f5f5;
  margin: auto;
  height: 100vh;
  width: 60vw;
  display: inline-block;
`;

export function DrawingPaperComponent() {
  const mode = useSelector(state => state.modeState.mode);
  return (
    <DrawingPaper>
      <SwitchButton />
      {mode === "style" ? <PreviewBox /> : <CSSBox />}
      <ViewModeSwitchButton />
    </DrawingPaper>
  );
}
