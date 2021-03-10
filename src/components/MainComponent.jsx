import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux";
import { useState } from "react";
import "../App.css";

import { BoxWidthContainer } from "containers/BoxWidthContainer";
import { BoxHeightContainer } from "containers/BoxHeightContainer";
import { BoxBorderWidthContainer } from "containers/BoxBorderWidthContainer";
import { BoxBorderStyleContainer } from "containers/BoxBorderStyleContainer";
import { BoxBorderColorContainer } from "containers/BoxBorderColorContainer";
import { BoxColorContainer } from "containers/BoxColorContainer";
import { BoxGradientContainer } from "containers/BoxGradientContainer";
import { BoxTransformContainer } from "containers/BoxTransformContainer";
import { BoxRotateContainer } from "containers/BoxRotateContainer";
import { BoxTextContainer } from "containers/BoxTextContainer";
import { BoxTextModalContainer } from "containers/BoxTextModalContainer";
import { ModalContainer } from "containers/ModalContainer";
import { BoxColorTypeContainer } from "containers/BoxColorTypeContainer";
import { LoadButtonContainer } from "containers/LoadButtonContainer";
import { SwitchButton } from "containers/SwitchButton";
import { CSSBox } from "components/CSSBox";
import { BoxBorderRadiusContainer } from "containers/BoxBorderRadiusContainer";
import { ContainerBox } from "ui/ContainerBox";
import { BoxShadowContainer } from "containers/BoxShadowContainer";
import { AddAnimationContainer } from "containers/AddAnimationContainer";

import { PreviewBox } from "containers/PreviewBox";

const Sidebar = styled.div`
  background: #fff;
  height: 100vh;
  width: 20vw;
  display: block;
  float: left;
`;
const List = styled.li`
  list-style: none;
  margin: 0;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  color: #594f3c;
  background: #d9c8b4;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.12);
`;
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
const Label = styled.div`
  width: 100%;
  height: 40px;
  color: #fff;
  font-weight: 700;
  background: #594f3c;
  text-align: center;
  line-height: 40px;
`;

export function MainComponent() {
  const colorType =
    useSelector(state => state.boxState.state.colorType) || "color";
  const mode = useSelector(state => state.modeState.mode);

  return (
    <MainContent>
      <ModalContainer />
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
      </Sidebar>

      <DrawingPaper>
        <SwitchButton />
        {mode === "style" ? <PreviewBox /> : <CSSBox />}
      </DrawingPaper>

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
    </MainContent>
  );
}
