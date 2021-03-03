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
// import { AddAnimationContainer } from "containers/AddAnimationContainer";

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
  padding: 20px;
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
const DropdownButton = styled.button`
  width: 10px;
  height: 10px;
`;

export function MainComponent() {
  const colorType =
    useSelector(state => state.boxState.state.colorType) || "color";
  const mode = useSelector(state => state.modeState.mode);

  const dropdownFunc = (func, state) => {
    const changeValue = state === "block" ? "none" : "block";
    func(changeValue);
  };
  return (
    <MainContent>
      <ModalContainer />
      <Sidebar>
        <List>
          length
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
          border
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
          color
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
          transform
          <ContainerBox value={<BoxTransformContainer />} />
        </List>
        <List>
          rotate
          <ContainerBox value={<BoxRotateContainer />} />
        </List>
        <List>
          text
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
          Load
          <ContainerBox value={<LoadButtonContainer />} />
        </List>
      </Sidebar>
    </MainContent>
  );
}
