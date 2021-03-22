import React from "react";
import styled from "styled-components";

import { SidebarLeft } from "components/SidebarLeft";
import { SidebarRight } from "components/SidebarRight";
import { ModalContainer } from "containers/ModalContainer";
import { DrawingPaperComponent } from "components/DrawingPaperComponent";

const MainContent = styled.div`
  display: flex;
`;

export function MainComponent() {
  return (
    <MainContent>
      <ModalContainer />
      <SidebarLeft />
      <DrawingPaperComponent />
      <SidebarRight />
    </MainContent>
  );
}
