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
import { Modal } from "Modal";
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
  let [textStyle, setTextStyle] = useState("left");
  let [modalText, setModalText] = useState("");
  let [fontSize, setFontSize] = useState(24);
  let [textColor, setTextColor] = useState("#000000");
  let [backgroundType, setBackgroundType] = useState("color");
  let [isTextModalVisible, setisTextModalVisible] = useState(false);
  let [isAnimationModalVisible, setIsAnimationModalVisible] = useState(false);
  let [play, setPlay] = useState("running");

  const frameIndex = useSelector(state => state.frameIndex.frameIndex);
  const createIndex = useSelector(state => state.createIndex.createIndex);
  const colorType = useSelector(state => state.boxState.colorType) || "color";

  useEffect(() => {
    if (state[createIndex] === undefined) {
      state[createIndex] = {
        textStyle: "left",
        modalText: "dsfd",
        textColor: "#000000",
        fontSize: 24,
        backgroundType: "color"
      };
      setTextStyle((textStyle = state[createIndex].textStyle));
      setModalText((modalText = state[createIndex].modalText));
      setTextColor((textColor = state[createIndex].textColor));
      setBackgroundType((backgroundType = state[createIndex].backgroundType));
      setFontSize((fontSize = state[createIndex].fontSize));
    }
  }, [createIndex]);

  useEffect(() => {
    setTextStyle((textStyle = state[frameIndex].textStyle));
    setModalText((modalText = state[frameIndex].modalText));
    setTextColor((textColor = state[frameIndex].textColor));
    setBackgroundType((backgroundType = state[frameIndex].backgroundType));
    setFontSize((fontSize = state[frameIndex].fontSize));
  }, [frameIndex]);

  useEffect(() => {
    state[frameIndex] = {
      textStyle: textStyle,
      modalText: modalText,
      textColor: textColor,
      backgroundType: backgroundType,
      fontSize: fontSize
    };
  });

  return (
    <div className="App">
      <Modal
        isOpened={isTextModalVisible}
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
      </Modal>
      <Modal
        isOpened={isAnimationModalVisible}
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
      </Modal>
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
        <PreviewBox
          boxText={modalText}
          textAlign={textStyle}
          color={textColor}
          fontSize={fontSize}
        />
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
