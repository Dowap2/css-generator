import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import SwitchButton from "containers/SwitchButton";
import ViewModeSwitchButton from "containers/ViewModeSwitchButton";

import { CSSBox } from "components/CSSBox";
import { PreviewBox } from "containers/PreviewBox";

const DrawingPaper = styled.div`
  display: flex;
  background: ${props => (props.mode === "light" ? "#f5f5f5" : "#0d1218")};
  margin: auto;
  height: 100vh;
  width: 60vw;
`;
const ViewModeButton = styled.div`
  margin-left: 60%;
`;
const TopButtonContainer = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
`;

export function DrawingPaperComponent() {
  const mode = useSelector(state => state.modeState.mode);
  const viewMode = useSelector(state => state.modeState.viewMode);
  return (
    <DrawingPaper mode={viewMode}>
      <TopButtonContainer>
        <SwitchButton />
        {mode === "style" ? <PreviewBox /> : <CSSBox />}
        <ViewModeButton>
          <ViewModeSwitchButton />
        </ViewModeButton>
      </TopButtonContainer>
    </DrawingPaper>
  );
}
