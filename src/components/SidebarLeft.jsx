import React from "react";

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
  const viewMode = useSelector(state => state.modeState.viewMode);
  return (
    <Sidebar mode={viewMode}>
      <List
        value={
          <div>
            <Label value={"length"} />
            <ContainerBox
              value={
                <div>
                  <BoxWidthContainer />
                  <BoxHeightContainer />
                </div>
              }
            />
          </div>
        }
      />

      <List
        value={
          <div>
            <Label value={"border"} />
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
          </div>
        }
      />

      <List
        value={
          <div>
            <Label value={"color"} />
            <ContainerBox
              value={
                <div>
                  <BoxColorTypeContainer />
                  {colorType === "color" && <BoxColorContainer />}
                  {colorType === "gradient" && <BoxGradientContainer />}
                </div>
              }
            />
          </div>
        }
      />
      <List
        value={
          <div>
            <Label value={"Frame"} />
            <ContainerBox value={<ChangeFrameContainer />} />
          </div>
        }
      />
    </Sidebar>
  );
}
