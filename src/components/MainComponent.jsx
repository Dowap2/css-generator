import React from "react";

import { SidebarLeft } from "components/SidebarLeft";
import { SidebarRight } from "components/SidebarRight";
import { ModalContainer } from "containers/ModalContainer";
import { DrawingPaperComponent } from "components/DrawingPaperComponent";
import { FlexBox } from "ui/ContainerBox";

export function MainComponent() {
  return (
    <FlexBox>
      <ModalContainer />
      <SidebarLeft />
      <DrawingPaperComponent />
      <SidebarRight />
    </FlexBox>
  );
}
