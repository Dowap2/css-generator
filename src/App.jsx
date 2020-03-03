import React, { useState } from 'react';
import './App.css';
import { BoxWidthInput } from './BoxWidthInput';
import { BoxHeightInput } from './BoxHeightInput'
import { BorderWidthInput } from './BorderWidthInput';
import { BorderStyleInput } from './BorderStyleInput'
import { ColorInput } from './ColorInput';
import { CheckboxGradient } from './CheckboxGradient'
import { BoxGradientColor1Input } from './BoxGradientColor1Input'
import { BoxGradientColor2Input } from './BoxGradientColor2Input'
import { GradientStyleInput } from './GradientStyleInput'
import { PreviewBox } from "./PreviewBox";
import { BoxTransformX } from './BoxTransformX';
import { BoxTransformY } from './BoxTransformY';
import { BoxRotateX } from './BoxRotateX';
import { BoxRotateY } from './BoxRotateY.jsx';
import { BoxRotateZ } from './BoxRotateZ';
import { BoxText } from './BoxText';
import { TextButton } from './TextButton'
import { BorderColor } from './BorderColor'
import { BoxTextStyle } from './BoxTextStyle'
import { BoxTextColor } from './BoxTextColor'
import Modal from './Modal';
import { Close } from './Close'

// import { format } from 'url';

function App(props) {
  const [boxWidth , setBoxWidth] = useState(500);
  const [boxHeight , setBoxHeight] = useState(500);
  const [borderWidth, setBorderWidth] = useState(50);
  const [borderStyle , setBorderStyle] = useState("soild");
  const [borderColor , setBorderColor] = useState("#0000000");
  const [boxColor, setBoxColor] = useState(0);
  const [checkboxGradient , setCheckboxGradient] = useState(0);
  const [boxGradient1 , setBoxGradient1] = useState(0);
  const [boxGradient2 , setBoxGradient2] = useState(0);
  const [gradientStyle , setGradientStyle] = useState("to top");
  const [boxTransformX , setBoxTransformX] = useState(1);
  const [boxTransformY , setBoxTransformY] = useState(1);
  const [boxRotateX , setBoxRoateX] = useState(0);
  const [boxRotateY , setBoxRoateY] = useState(0);
  const [boxRotateZ , setBoxRoateZ] = useState(0);
  const [boxText , setBoxText] = useState();
  const [textStyle , setTextStyle] = useState();
  const [textModal , setTextModal] = useState();
  const [modalText , setModalText] = useState();
  const [modalClose , setModalClose] = useState();
  const [textColor , setTextColor] = useState();

  return (
    <div className="App">
      <Modal 
        value={modalText}
        onChange={setModalText}
        display={textModal}
      />
      <div className="Side-bar-left"> 
        <menu>
          <div>length</div>
          <div>
            <ul>
              <li>
                <div>width</div>
                <div>
                  <BoxWidthInput value={boxWidth} onChange={setBoxWidth}/>
                </div>
              </li>
              <li>
                <div>height</div>
                <div>
                  <BoxHeightInput value={boxHeight} onChange={setBoxHeight}/>
                </div>
              </li>
            </ul>
          </div>
        </menu>
        <menu>
          <div>border</div>
          <div>
            <ul>
              <li>
                <div>border-width</div>
                <div>
                  <BorderWidthInput value={borderWidth} onChange={setBorderWidth} />
                </div>
              </li>
              <li>
                <div>border-style</div>
                <div>
                  <BorderStyleInput value={borderStyle} onChange={setBorderStyle} />
                </div>
              </li>
              <li>
                <div>border-color</div>
                <div>
                  <BorderColor value={borderColor} onChange={setBorderColor}/>
                </div>
              </li>
            </ul>
          </div>
        </menu>
        <menu>
          <div>color</div>
          <div>
            <ul>
              <li>
                <div>Color</div>
                <div>
                  <ColorInput value={boxColor} onChange={setBoxColor} />
                </div>
              </li>
              <li>
                <div>gradientColor</div>
                <div>

                  <BoxGradientColor1Input value={boxGradient1} onChange={setBoxGradient1}/>
                  <BoxGradientColor2Input value={boxGradient2} onChange={setBoxGradient2}/>
                  <GradientStyleInput value={gradientStyle} onChange={setGradientStyle} /> 
                </div>
              </li>
            </ul>
          </div>
        </menu>
      </div>

      <div className="Drawing-paper">
        <PreviewBox 
            width={boxWidth}
            height={boxHeight}
            borderWidth={borderWidth}
            borderStyle={borderStyle}
            borderColor={borderColor}
            backgroundColor={boxColor}
            //backgroundImage={"linear-gradient("+gradientStyle+","+boxGradient1+","+boxGradient2+")"}
            transform={"scaleX("+boxTransformX+")"+"scaleY("+boxTransformY+")"+"rotateX("+boxRotateX+"deg)"+"rotateY("+boxRotateY+"deg)"+"rotateZ("+boxRotateZ+"deg)"}
            boxText={modalText}
            textAlign={textStyle}
            color={textColor}
        />
      </div>

      <div className="Side-bar-right">
        <menu>
          <div>transfrom</div>
          <div>
            <div>scale</div>
            <div>
              <ul>
                <li>
                  <div>X</div>
                  <div>
                    <BoxTransformX value={boxTransformX} onChange={setBoxTransformX} />
                  </div>
                </li>
                <li>
                  <div>Y</div>
                  <div>
                    <BoxTransformY value={boxTransformY} onChange={setBoxTransformY} />
                  </div>
                </li>
              </ul>
            </div>
            <div>rotate</div>
            <div>
              <ul>
                <li>
                  <div>X</div>
                  <div>
                    <BoxRotateX value={boxRotateX} onChange={setBoxRoateX} />
                  </div>
                </li>
                <li>
                  <div>Y</div>
                  <div>
                    <BoxRotateY value={boxRotateY} onChange={setBoxRoateY} />
                  </div>
                </li>
                <li>
                  <div>Z</div>
                  <div>
                    <BoxRotateZ value={boxRotateZ} onChange={setBoxRoateZ} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </menu>
        <menu>
          <div>text</div>
          <div>
            <ul>
              <li>
                <div>text-modal</div>
                <div>
                  <TextButton value={textModal} onChange={setTextModal} />
                  <Close value={textModal} onChange={setTextModal}/>
                </div>
              </li>
              <li>
                <div>text-align</div>
                <div>
                  <BoxTextStyle value={textStyle} onChange={setTextStyle} />
                </div>
              </li>
              <li>
                <div>text-color</div>
                <div>
                  <BoxTextColor value={textColor} onChange={setTextColor} />
                </div>
              </li>
            </ul>
          </div>
        </menu>
      </div>
    </div>
  );
}

export default App;
