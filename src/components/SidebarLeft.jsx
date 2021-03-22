import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";

import { BoxWidthContainer } from "containers/BoxWidthContainer";
import { BoxHeightContainer } from "containers/BoxHeightContainer";
import { BoxBorderWidthContainer } from "containers/BoxBorderWidthContainer";
import { BoxBorderStyleContainer } from "containers/BoxBorderStyleContainer";
import { BoxBorderColorContainer } from "containers/BoxBorderColorContainer";
import { BoxColorContainer } from "containers/BoxColorContainer";
import { BoxGradientContainer } from "containers/BoxGradientContainer";
import { BoxColorTypeContainer } from "containers/BoxColorTypeContainer";
import { BoxBorderRadiusContainer } from "containers/BoxBorderRadiusContainer";
import { ContainerBox } from "ui/ContainerBox";
import { ChangeFrameContainer } from "containers/ChangeFrameContainer";
import { Sidebar, Label, List } from "ui/Sidebar";

export function SidebarLeft() {
  const colorType =
    useSelector(state => state.boxState.state.colorType) || "color";

  return (
    <Sidebar>
      <List>
        <Label>length</Label>
        <ContainerBox
          value={
            <div>
              <BoxWidthContainer />
              <BoxHeightContainer />
            </div>
          }
        />
      </List>

      <List>
        <Label>border</Label>
        <ContainerBox
          value={
            <div>
              <BoxBorderWidthContainer />
              <BoxBorderRadiusContainer />
              <BoxBorderStyleContainer />
              <BoxBorderColorContainer />
            </div>
          }
        />
      </List>

      <List>
        <Label>color</Label>
        <ContainerBox
          value={
            <div>
              <BoxColorTypeContainer />
              {colorType === "color" && <BoxColorContainer />}
              {colorType === "gradient" && <BoxGradientContainer />}
            </div>
          }
        />
      </List>
      <List>
        <Label>Frame</Label>
        <ContainerBox value={<ChangeFrameContainer />} />
      </List>
    </Sidebar>
  );
}
