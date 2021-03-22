import React from "react";
import styled from "styled-components";

import { BoxTransformContainer } from "containers/BoxTransformContainer";
import { BoxRotateContainer } from "containers/BoxRotateContainer";
import { BoxTextContainer } from "containers/BoxTextContainer";
import { BoxTextModalContainer } from "containers/BoxTextModalContainer";
import { LoadButtonContainer } from "containers/LoadButtonContainer";
import { ContainerBox } from "ui/ContainerBox";
import { BoxShadowContainer } from "containers/BoxShadowContainer";
import { Sidebar, Label, List } from "ui/Sidebar";

export function SidebarRight() {
  return (
    <Sidebar>
      <List>
        <Label>transform</Label>
        <ContainerBox value={<BoxTransformContainer />} />
      </List>

      <List>
        <Label>rotate</Label>
        <ContainerBox value={<BoxRotateContainer />} />
      </List>

      <List>
        <Label>text</Label>
        <ContainerBox
          value={
            <div>
              <BoxTextModalContainer />
              <BoxTextContainer />
            </div>
          }
        />
      </List>

      <List>
        <Label>box-shadow</Label>
        <ContainerBox value={<BoxShadowContainer />} />
      </List>

      <List>
        <Label>Load</Label>
        <ContainerBox value={<LoadButtonContainer />} />
      </List>
    </Sidebar>
  );
}
