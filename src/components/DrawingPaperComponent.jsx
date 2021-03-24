import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import { SwitchButton } from "containers/SwitchButton";
import { CSSBox } from "components/CSSBox";
import { ViewModeSwitchButton } from "containers/ViewModeSwitchButton";

import { PreviewBox } from "containers/PreviewBox";

const DrawingPaper = styled.div`
  display: flex;
  background: ${props => (props.mode === "light" ? "#f5f5f5" : "#000000")};
  margin: auto;
  height: 100vh;
  width: 60vw;
`;
const ViewModeButton = styled.div`
  margin-left: 60%;
`;

export function DrawingPaperComponent() {
  const mode = useSelector(state => state.modeState.mode);
  const viewMode = useSelector(state => state.modeState.viewMode);
  return (
    <DrawingPaper mode={viewMode}>
      <SwitchButton />
      {mode === "style" ? <PreviewBox /> : <CSSBox />}
      <ViewModeButton>
        <ViewModeSwitchButton />
      </ViewModeButton>
    </DrawingPaper>
  );
}
