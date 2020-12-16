import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
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

export function MainComponent() {
  const colorType =
    useSelector(state => state.boxState.state.colorType) || "color";
  const state = useSelector(state => state.boxState.state);

  const uploadFunc = state => {
    axios.post("http://localhost:8000/api", {
      state: state,
      headers: { Authorization: "token" }
    });
  };

  return (
    <div>
      <ModalContainer />
      <Sidebar>
        <List>
          length
          <BoxWidthContainer />
          <BoxHeightContainer />
        </List>
        <List>
          border
          <BoxBorderWidthContainer />
          <BoxBorderStyleContainer />
          <BoxBorderColorContainer />
        </List>
        <List>
          color
          <BoxColorTypeContainer />
          {colorType === "color" && <BoxColorContainer />}
          {colorType === "gradient" && <BoxGradientContainer />}
        </List>
      </Sidebar>
      <DrawingPaper>
        {/* <AddAnimationContainer /> */}
        <PreviewBox />
      </DrawingPaper>
      <Sidebar>
        <List>
          transform
          <BoxTransformContainer />
        </List>
        <List>
          rotate
          <BoxRotateContainer />
        </List>
        <List>
          text
          <BoxTextModalContainer />
          <BoxTextContainer />
        </List>
        <List>
          <button onClick={e => uploadFunc(state)}>upload</button>
        </List>
      </Sidebar>
    </div>
  );
}
