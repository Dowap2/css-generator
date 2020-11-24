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
import { TextButton } from "TextButton";
import { BoxTextStyle } from "containers/BoxTextStyle";
import { BoxTextColor } from "containers/BoxTextColor";
import { BoxFontSize } from "containers/BoxFontSize";
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
  let [boxTransformX, setBoxTransformX] = useState(1);
  let [boxTransformY, setBoxTransformY] = useState(1);
  let [boxRotateX, setBoxRotateX] = useState(0);
  let [boxRotateY, setBoxRotateY] = useState(0);
  let [boxRotateZ, setBoxRotateZ] = useState(0);
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
        boxTransformX: 1,
        boxTransformY: 1,
        boxRotateX: 0,
        boxRotateY: 0,
        boxRotateZ: 0,
        textStyle: "left",
        modalText: "",
        textColor: "#000000",
        fontSize: 24,
        backgroundType: "color"
      };
      setBoxTransformX((boxTransformX = state[createIndex].boxTransformX));
      setBoxTransformY((boxTransformY = state[createIndex].boxTransformY));
      setBoxRotateX((boxRotateX = state[createIndex].boxRotateX));
      setBoxRotateY((boxRotateY = state[createIndex].boxRotateY));
      setBoxRotateZ((boxRotateZ = state[createIndex].boxRotateZ));
      setTextStyle((textStyle = state[createIndex].textStyle));
      setModalText((modalText = state[createIndex].modalText));
      setTextColor((textColor = state[createIndex].textColor));
      setBackgroundType((backgroundType = state[createIndex].backgroundType));
      setFontSize((fontSize = state[createIndex].fontSize));
    }
  }, [createIndex]);

  useEffect(() => {
    setBoxTransformX((boxTransformX = state[frameIndex].boxTransformX));
    setBoxTransformY((boxTransformY = state[frameIndex].boxTransformY));
    setBoxRotateX((boxRotateX = state[frameIndex].boxRotateX));
    setBoxRotateY((boxRotateY = state[frameIndex].boxRotateY));
    setBoxRotateZ((boxRotateZ = state[frameIndex].boxRotateZ));
    setTextStyle((textStyle = state[frameIndex].textStyle));
    setModalText((modalText = state[frameIndex].modalText));
    setTextColor((textColor = state[frameIndex].textColor));
    setBackgroundType((backgroundType = state[frameIndex].backgroundType));
    setFontSize((fontSize = state[frameIndex].fontSize));
  }, [frameIndex]);

  useEffect(() => {
    state[frameIndex] = {
      boxTransformX: boxTransformX,
      boxTransformY: boxTransformY,
      boxRotateX: boxRotateX,
      boxRotateY: boxRotateY,
      boxRotateZ: boxRotateZ,
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
              <li>text-modal</li>
              <li>
                <TextButton
                  value={isTextModalVisible}
                  onClick={() => setisTextModalVisible(true)}
                />
              </li>
              <li>text-align</li>
              <li>
                <BoxTextStyle value={textStyle} onChange={setTextStyle} />
              </li>
              <li>text-color</li>
              <li>
                <BoxTextColor value={textColor} onChange={setTextColor} />
              </li>
              <li>font-size</li>
              <li>
                <BoxFontSize value={fontSize} onChange={setFontSize} />
              </li>
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
