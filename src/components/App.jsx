import React, { useState, useEffect } from "react";
import "../App.css";
import { BoxWidthContainer } from "containers/BoxWidthContainer";
import { BoxHeightContainer } from "containers/BoxHeightContainer";
import { BoxBorderWidthContainer } from "containers/BoxBorderWidthContainer";
import { BoxBorderStyleContainer } from "containers/BoxBorderStyleContainer";
import { ColorInput } from "containers/ColorInput";
import { BoxGradientColor1Input } from "containers/BoxGradientColor1Input";
import { BoxGradientColor2Input } from "containers/BoxGradientColor2Input";
import { GradientStyleInput } from "containers/GradientStyleInput";
import { PreviewBox } from "containers/PreviewBox";
import { BoxTransformX } from "containers/BoxTransformX";
import { BoxTransformY } from "containers/BoxTransformY";
import { BoxRotateX } from "containers/BoxRotateX";
import { BoxRotateY } from "containers/BoxRotateY.jsx";
import { BoxRotateZ } from "containers/BoxRotateZ";
import { TextButton } from "TextButton";
import { BorderColor } from "containers/BorderColor";
import { BoxTextStyle } from "containers/BoxTextStyle";
import { BoxTextColor } from "containers/BoxTextColor";
import { BoxFontSize } from "containers/BoxFontSize";
import { Modal } from "Modal";
import { Close } from "containers/Close";
import { TabColor } from "TabColor";
import { AnimationClose } from "containers/AnimationClose";
import { AnimationOpen } from "containers/AnimationOpen";
import { AnimationPreview } from "containers/AnimationPreview";
import { AddAnimationContainer } from "containers/addAnimationContainer";
import { useSelector } from "react-redux";

let state = {};

function App() {
  let [borderColor, setBorderColor] = useState("#0000000");
  let [boxColor, setBoxColor] = useState("#ffffff");
  let [boxGradient1, setBoxGradient1] = useState("#fff");
  let [boxGradient2, setBoxGradient2] = useState("#fff");
  let [gradientStyle, setGradientStyle] = useState("to top");
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

  useEffect(() => {
    if (state[createIndex] === undefined) {
      state[createIndex] = {
        boxWidth: 500,
        boxHeight: 500,
        borderWidth: 50,
        borderStyle: "solid",
        borderColor: "#000000",
        boxColor: "#ffffff",
        boxGradient1: "#ffffff",
        boxGradient2: "#ffffff",
        gradientStyle: "to top",
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
      setBorderColor((borderColor = state[createIndex].borderColor));
      setBoxColor((boxColor = state[createIndex].boxColor));
      setBoxGradient1((boxGradient1 = state[createIndex].boxGradient1));
      setBoxGradient2((boxGradient2 = state[createIndex].boxGradient2));
      setGradientStyle((gradientStyle = state[createIndex].gradientStyle));
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
    setBorderColor((borderColor = state[frameIndex].borderColor));
    setBoxColor((boxColor = state[frameIndex].boxColor));
    setBoxGradient1((boxGradient1 = state[frameIndex].boxGradient1));
    setBoxGradient2((boxGradient2 = state[frameIndex].boxGradient2));
    setGradientStyle((gradientStyle = state[frameIndex].gradientStyle));
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
      borderColor: borderColor,
      boxColor: boxColor,
      boxGradient1: boxGradient1,
      boxGradient2: boxGradient2,
      gradientStyle: gradientStyle,
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
              <li>border-color</li>
              <li>
                <BorderColor value={borderColor} onChange={setBorderColor} />
              </li>
            </ul>
          </li>
          <li className="menu-left-third">
            color
            <ul className="menu-left-third-submenu">
              <li>
                <TabColor value={backgroundType} onChange={setBackgroundType} />
              </li>
              {backgroundType === "color" && (
                <ul>
                  <li>color</li>
                  <li>
                    <ColorInput value={boxColor} onChange={setBoxColor} />
                  </li>
                </ul>
              )}
              {backgroundType === "gradient" && (
                <ul>
                  <li>gradient-color</li>
                  <li>
                    <BoxGradientColor1Input
                      value={boxGradient1}
                      onChange={setBoxGradient1}
                    />
                    <BoxGradientColor2Input
                      value={boxGradient2}
                      onChange={setBoxGradient2}
                    />
                    <GradientStyleInput
                      value={gradientStyle}
                      onChange={setGradientStyle}
                    />
                  </li>
                </ul>
              )}
            </ul>
          </li>
        </menu>
      </div>

      <div className="Drawing-paper">
        <AddAnimationContainer />
        <PreviewBox
          backgroundType={backgroundType}
          borderColor={borderColor}
          backgroundColor={boxColor}
          backgroundImage={
            "linear-gradient(" +
            gradientStyle +
            "," +
            boxGradient1 +
            "," +
            boxGradient2 +
            ")"
          }
          transform={
            "scaleX(" +
            boxTransformX +
            ")" +
            "scaleY(" +
            boxTransformY +
            ")" +
            "rotateX(" +
            boxRotateX +
            "deg)" +
            "rotateY(" +
            boxRotateY +
            "deg)" +
            "rotateZ(" +
            boxRotateZ +
            "deg)"
          }
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
              <li>X</li>
              <li>
                <BoxTransformX
                  value={boxTransformX}
                  onChange={setBoxTransformX}
                />
              </li>
              <li>Y</li>
              <li>
                <BoxTransformY
                  value={boxTransformY}
                  onChange={setBoxTransformY}
                />
              </li>
            </ul>
          </li>
          <li className="menu-right-second">
            rotate
            <ul className="menu-right-second-submenu">
              <li>X</li>
              <li>
                <BoxRotateX value={boxRotateX} onChange={setBoxRotateX} />
              </li>
              <li>Y</li>
              <li>
                <BoxRotateY value={boxRotateY} onChange={setBoxRotateY} />
              </li>
              <li>Z</li>
              <li>
                <BoxRotateZ value={boxRotateZ} onChange={setBoxRotateZ} />
              </li>
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
