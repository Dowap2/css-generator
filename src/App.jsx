import React, { useState } from 'react';
import './App.css';
import { BoxWidthInput } from './BoxWidthInput';
import { BoxHeightInput } from './BoxHeightInput'
import { BorderWidthInput } from './BorderWidthInput';
import { BorderStyleInput } from './BorderStyleInput'
import { ColorInput } from './ColorInput';
import { BoxGradientColor1Input } from './BoxGradientColor1Input'
import { BoxGradientColor2Input } from './BoxGradientColor2Input'
import { GradientStyleInput } from './GradientStyleInput'
import { PreviewBox } from "./PreviewBox";
import { BoxTransformX } from './BoxTransformX';
import { BoxTransformY } from './BoxTransformY';
import { BoxRotateX } from './BoxRotateX';
import { BoxRotateY } from './BoxRotateY.jsx';
import { BoxRotateZ } from './BoxRotateZ';
import { TextButton } from './TextButton'
import { BorderColor } from './BorderColor'
import { BoxTextStyle } from './BoxTextStyle'
import { BoxTextColor } from './BoxTextColor'
import Modal from './Modal';
import { Close } from './Close'
import { TabColor } from './TabColor'
import { AnimationButton } from './AnimationButton'
import { AddAnimation } from './AddAnimation'

// import { format } from 'url';
let array = [];
let num = 0;

function App() {

  let [count , setCount] = useState(1);
  let [changeAnimation] = useState(0);
  let [boxWidth, setBoxWidth] = useState(500);
  let [boxHeight, setBoxHeight] = useState(500);
  let [borderWidth, setBorderWidth] = useState(50);
  let [borderStyle, setBorderStyle] = useState("soild");
  let [borderColor, setBorderColor] = useState("#0000000");
  let [boxColor, setBoxColor] = useState("#ffffff");
  let [boxGradient1, setBoxGradient1] = useState("#fff");
  let [boxGradient2, setBoxGradient2] = useState("#fff");
  let [gradientStyle, setGradientStyle] = useState("to top");
  let [boxTransformX, setBoxTransformX] = useState(1);
  let [boxTransformY, setBoxTransformY] = useState(1);
  let [boxRotateX, setBoxRoateX] = useState(0);
  let [boxRotateY, setBoxRoateY] = useState(0);
  let [boxRotateZ, setBoxRoateZ] = useState(0);
  let [textStyle, setTextStyle] = useState("left");
  let [isTextModalVisible, setisTextModalVisible] = useState(false);
  let [modalText, setModalText] = useState("");
  let [textColor, setTextColor] = useState("#000000");
  let [backgroundType, setBackgroundType] = useState("color");
  let [isAnimationModalVisible , setIsAnimationModalVisible] = useState(false);
  let [state , setState] = useState([{
    boxWidth: 500,
    boxHeight: 500,
    borderWidth: 50,
    borderStyle: "soild",
    borderColor: "#000000",
    boxColor:"#ffffff",
    boxGradient1:"#ffffff",
    boxGradient2:"#ffffff",
    gradientStyle: "to top",
    boxTransformX: 1,
    boxTransformY: 1,
    boxRotateX: 0,
    boxRotateY: 0,
    boxRotateZ: 0,
    textStyle: "left",
    modalText: "",
    textColor: "#000000",
    backgroundType: "color"
  }])

  //console.log(num , count);
  if (num < count) {
    {array.push(
      [[num],
        [
          boxWidth, boxHeight, 
          borderWidth, borderStyle, borderColor,
          boxColor, boxGradient1, boxGradient2, gradientStyle,
          boxTransformX, boxTransformY,
          boxRotateX, boxRotateY, boxRotateZ,
          textStyle, modalText, textColor, backgroundType
        ]
      ]
    );}
    num=num+1;
  }
  console.log(array)
  return (
    <div className="App">
      <button onClick={e=> console.log(array[0][1][0])}></button>
      <button onClick={e => console.log(array)}></button>
      <Modal isOpened={isTextModalVisible} onClose={() => setisTextModalVisible(false)}>
        <textarea
          name="textbox"
          className="text_box"
          cols="30"
          rows="10"
          placeholder="텍스트를 입력해주세요"
          value={modalText}
          onChange={e => setModalText(e.target.value)}
        />
        <Close value={isTextModalVisible} onClick={() => setisTextModalVisible(false)} />
      </Modal>
      <Modal isOpened={isAnimationModalVisible} onClose={() => setIsAnimationModalVisible(false)}>
        <div className="animation-paper">
        </div>
        <AnimationButton value={isAnimationModalVisible} onClick={() => setIsAnimationModalVisible(!isAnimationModalVisible)}/>
      </Modal>
      <div className="Side-bar-left">
        <menu className="menu-left">
          <li className="menu-left-first">
            length
            <ul className="menu-left-first-submenu">
              <li>width</li>
              <li><BoxWidthInput value={boxWidth} onChange={setBoxWidth} /></li>
              <li>height</li>
              <li><BoxHeightInput value={boxHeight} onChange={setBoxHeight} /></li>
            </ul>
          </li>

          <li className="menu-left-second">
            border
            <ul className="menu-left-second-submenu">
              <li>border-width</li>
              <li><BorderWidthInput value={borderWidth} onChange={setBorderWidth} /></li>
              <li>border-style</li>
              <li><BorderStyleInput value={borderStyle} onChange={setBorderStyle} /></li>
              <li>border-color</li>
              <li><BorderColor value={borderColor} onChange={setBorderColor} /></li>
            </ul>
          </li>
          <li className="menu-left-third">
            color
            <ul className="menu-left-third-submenu">
              <li><TabColor value={backgroundType} onChange={setBackgroundType} /></li>
              {backgroundType === "color" && <ul>
                <li>color</li>
                <li><ColorInput value={boxColor} onChange={setBoxColor} /></li>
              </ul>}
              {backgroundType === "gradient" && <ul>
                <li>gradient-color</li>
                <li>
                  <BoxGradientColor1Input value={boxGradient1} onChange={setBoxGradient1} />
                  <BoxGradientColor2Input value={boxGradient2} onChange={setBoxGradient2} />
                  <GradientStyleInput value={gradientStyle} onChange={setGradientStyle} />
                </li>
              </ul>}
            </ul>
          </li>
        </menu>
      </div>

      <div className="Drawing-paper">
        <AddAnimation 
          value={count} 
          onClick={setCount}
          onChange={changeAnimation}
        />
        <PreviewBox
          backgroundType={backgroundType}
          width={boxWidth}
          height={boxHeight}
          borderWidth={borderWidth}
          borderStyle={borderStyle}
          borderColor={borderColor}
          backgroundColor={boxColor}
          backgroundImage={"linear-gradient(" + gradientStyle + "," + boxGradient1 + "," + boxGradient2 + ")"}
          transform={"scaleX(" + boxTransformX + ")" + "scaleY(" + boxTransformY + ")" + "rotateX(" + boxRotateX + "deg)" + "rotateY(" + boxRotateY + "deg)" + "rotateZ(" + boxRotateZ + "deg)"}
          boxText={modalText}
          textAlign={textStyle}
          color={textColor}
        />
      </div>

      <div className="Side-bar-right">
        <menu className="menu-right">
          <li className="menu-right-first">
            transform
            <ul className="menu-right-first-submenu">
              <li>X</li>
              <li><BoxTransformX value={boxTransformX} onChange={setBoxTransformX} /></li>
              <li>Y</li>
              <li><BoxTransformY value={boxTransformY} onChange={setBoxTransformY} /></li>
            </ul>
          </li>
          <li className="menu-right-second">
            rotate
            <ul className="menu-right-second-submenu">
              <li>X</li>
              <li><BoxRotateX value={boxRotateX} onChange={setBoxRoateX} /></li>
              <li>Y</li>
              <li><BoxRotateY value={boxRotateY} onChange={setBoxRoateY} /></li>
              <li>Z</li>
              <li><BoxRotateZ value={boxRotateZ} onChange={setBoxRoateZ} /></li>
            </ul>
          </li>
          <li className="menu-right-third">
            text
            <ul className="menu-right-third-submenu">
              <li>text-modal</li>
              <li>
                <TextButton value={isTextModalVisible} onClick={() => setisTextModalVisible(true)} />
              </li>
              <li>text-align</li>
              <li><BoxTextStyle value={textStyle} onChange={setTextStyle} /></li>
              <li>text-color</li>
              <li><BoxTextColor value={textColor} onChange={setTextColor} /></li>
            </ul>
          </li>
          <li>
            <AnimationButton value={isAnimationModalVisible} onClick={() => setIsAnimationModalVisible(!isAnimationModalVisible)}/>
          </li>
        </menu>
      </div>
    </div>
  );
}

export default App;
