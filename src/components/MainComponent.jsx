import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import { SidebarLeft } from "components/SidebarLeft";
import { SidebarRight } from "components/SidebarRight";
import { ModalContainer } from "containers/ModalContainer";
import { SwitchButton } from "containers/SwitchButton";
import { CSSBox } from "components/CSSBox";

import { PreviewBox } from "containers/PreviewBox";

const DrawingPaper = styled.div`
  background: #f5f5f5;
  margin: auto;
  height: 100vh;
  width: 60vw;
  display: inline-block;
  float: left;
`;
const MainContent = styled.div`
  display: flex;
`;

export function MainComponent() {
  const mode = useSelector(state => state.modeState.mode);

  return (
    <MainContent>
      <ModalContainer />
      <SidebarLeft />
      <DrawingPaper>
        <SwitchButton />
        {mode === "style" ? <PreviewBox /> : <CSSBox />}
      </DrawingPaper>
      <SidebarRight />
    </MainContent>
  );
}
