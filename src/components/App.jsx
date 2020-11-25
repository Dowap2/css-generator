import React, { useState, useEffect } from "react";
import "../App.css";
import { BoxWidthContainer } from "containers/BoxWidthContainer";
import { BoxHeightContainer } from "containers/BoxHeightContainer";
import { BoxBorderWidthContainer } from "containers/BoxBorderWidthContainer";
import { BoxBorderStyleContainer } from "containers/BoxBorderStyleContainer";
import { BoxBorderColorContainer } from "containers/BoxBorderColorContainer";
import { BoxColorContainer } from "containers/BoxColorContainer";
import { BoxGradientComponent } from "containers/BoxGradientComponent";
import { BoxTransformContainer } from "containers/BoxTransformContainer";
import { BoxRotateContainer } from "containers/BoxRotateContainer";
import { BoxTextContainer } from "containers/BoxTextContainer";
import { BoxTextModalContainer } from "containers/BoxTextModalContainer";
import { ModalContainer } from "containers/ModalContainer";
import { Close } from "containers/Close";
import { BoxColorTypeContainer } from "containers/BoxColorTypeContainer";
import { AnimationClose } from "containers/AnimationClose";
import { AnimationOpen } from "containers/AnimationOpen";
import { AnimationPreview } from "containers/AnimationPreview";
import { AddAnimationContainer } from "containers/addAnimationContainer";
import { useSelector } from "react-redux";
import { PreviewBox } from "containers/PreviewBox";

let state = {};

function App() {
  let [modalText, setModalText] = useState("");
  let [isTextModalVisible, setisTextModalVisible] = useState(false);
  let [isAnimationModalVisible, setIsAnimationModalVisible] = useState(false);
  let [play, setPlay] = useState("running");

  const frameIndex = useSelector(state => state.frameIndex.frameIndex);
  const createIndex = useSelector(state => state.createIndex.createIndex);
  const colorType = useSelector(state => state.boxState.colorType) || "color";
  const textModalState = useSelector(state => state.modalState.textModalState);

  useEffect(() => {
    if (state[createIndex] === undefined) {
      state[createIndex] = {
        textStyle: "left",
        modalText: "dsfd",
        textColor: "#000000",
        fontSize: 24,
        backgroundType: "color"
      };
      setModalText((modalText = state[createIndex].modalText));
    }
  }, [createIndex]);

  useEffect(() => {
    setModalText((modalText = state[frameIndex].modalText));
  }, [frameIndex]);

  useEffect(() => {
    state[frameIndex] = {
      modalText: modalText
    };
  });

  return (
    <div className="App">
      <ModalContainer
        isOpened={textModalState || "none"}
        onClose={() => setisTextModalVisible(false)}
      >
        <textarea
          name="textbox"
          className="text_box"
          cols="30"
          rows="10"
          placeholder="텍스트를 입력해주세요"
          value={modalText}
          onChange={e => setModalText(e.target.value)}
        />
        <Close
          value={isTextModalVisible}
          onClick={() => setisTextModalVisible(false)}
        />
      </ModalContainer>
      <ModalContainer
        isOpened={isAnimationModalVisible || "none"}
        onClose={() => setIsAnimationModalVisible(false)}
      >
        <AnimationPreview
          value={state}
          index={frameIndex}
          play={play}
          onChange={setPlay}
        />
        <AnimationClose
          value={isAnimationModalVisible}
          onClick={() => setIsAnimationModalVisible(!isAnimationModalVisible)}
        />
      </ModalContainer>
      <div className="Side-bar-left">
        <menu className="menu-left">
          <li className="menu-left-first">
            length
            <ul className="menu-left-first-submenu">
              <BoxWidthContainer />
              <BoxHeightContainer />
            </ul>
          </li>

          <li className="menu-left-second">
            border
            <ul className="menu-left-second-submenu">
              <BoxBorderWidthContainer />
              <BoxBorderStyleContainer />
              <BoxBorderColorContainer />
            </ul>
          </li>
          <li className="menu-left-third">
            color
            <ul className="menu-left-third-submenu">
              <BoxColorTypeContainer />
              {colorType === "color" && <BoxColorContainer />}
              {colorType === "gradient" && <BoxGradientComponent />}
            </ul>
          </li>
        </menu>
      </div>

      <div className="Drawing-paper">
        <AddAnimationContainer />
        <PreviewBox boxText={modalText} />
        <button onClick={e => console.log(textModalState)}></button>
      </div>

      <div className="Side-bar-right">
        <menu className="menu-right">
          <li className="menu-right-first">
            transform
            <ul className="menu-right-first-submenu">
              <BoxTransformContainer />
            </ul>
          </li>
          <li className="menu-right-second">
            rotate
            <ul className="menu-right-second-submenu">
              <BoxRotateContainer />
            </ul>
          </li>
          <li className="menu-right-third">
            text
            <ul className="menu-right-third-submenu">
              <BoxTextModalContainer />
              <BoxTextContainer />
            </ul>
          </li>
          <li>
            <AnimationOpen
              value={isAnimationModalVisible}
              onClick={() =>
                setIsAnimationModalVisible(!isAnimationModalVisible)
              }
              onChange={setPlay}
            />
          </li>
        </menu>
      </div>
    </div>
  );
}

export default App;
