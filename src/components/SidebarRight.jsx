import React from "react";

import { useSelector } from "react-redux";

import { BoxTransformContainer } from "containers/BoxTransformContainer";
import { BoxRotateContainer } from "containers/BoxRotateContainer";
import { BoxTextContainer } from "containers/BoxTextContainer";
import { BoxTextModalContainer } from "containers/BoxTextModalContainer";
import { LoadButtonContainer } from "containers/LoadButtonContainer";
import { ContainerBox } from "ui/ContainerBox";
import { BoxShadowContainer } from "containers/BoxShadowContainer";
import { Sidebar, Label, List } from "ui/Sidebar";

export function SidebarRight() {
  const viewMode = useSelector(state => state.modeState.viewMode);
  return (
    <Sidebar mode={viewMode}>
      <List
        value={
          <div>
            <Label value={"transform"} />
            <ContainerBox value={<BoxTransformContainer />} />
          </div>
        }
      />

      <List
        value={
          <div>
            <Label value={"rotate"} />
            <ContainerBox value={<BoxRotateContainer />} />
          </div>
        }
      />

      <List
        value={
          <div>
            <Label value={"text"} />
            <ContainerBox
              value={
                <div>
                  <BoxTextModalContainer />
                  <BoxTextContainer />
                </div>
              }
            />
          </div>
        }
      />

      <List
        value={
          <div>
            <Label value={"box-shadow"} />
            <ContainerBox value={<BoxShadowContainer />} />
          </div>
        }
      />

      <List
        value={
          <div>
            <Label value={"Load"} />
            <ContainerBox value={<LoadButtonContainer />} />
          </div>
        }
      />
    </Sidebar>
  );
}
