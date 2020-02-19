import React, { useState } from 'react';
import './App.css';
import { ChangeValue } from './ChangeValue';
import { value } from './Value';
import { ChangeColor } from './ChangeColor';
import { ChangeGradient } from './ChangeGradient';
import { ChangeBorder} from './ChangeBorder';
import { BoxWidthInput } from './BoxWidthInput';
import { BoxHeightInput } from './BoxHeightInput'
import { BorderWidthInput } from './BorderWidthInput';
import { BorderStyleInput } from './BorderStyleInput'
import { ColorInput } from './ColorInput';
import { PreviewBox } from "./PreviewBox";
import { format } from 'url';

function App(props) {
  const [boxWidth , setBoxWidth] = useState(500);
  const [boxHeight , setBoxHeight] = useState(500);
  const [borderWidth, setBorderWidth] = useState(50);
  const [borderStyle , setBorderStyle ] = useState("soild")
  const [boxColor, setBoxColor] = useState(0);

  return (
    <div className="App">
      <div className="Side-bar-left">
        <h6>width-bar</h6>
        <BoxWidthInput value={boxWidth} onChange={setBoxWidth}/>

        <h6>height-bar</h6>
        <BoxHeightInput value={boxHeight} onChange={setBoxHeight}/>

        <h6>border-bar</h6>
        <BorderWidthInput value={borderWidth} onChange={setBorderWidth} />
        <BorderStyleInput value={borderStyle} onChange={setBorderStyle} />
        
        <h6>color-bar</h6>
        <ColorInput value={boxColor} onChange={setBoxColor} />

      </div>

      <div className="Drawing-paper">
        <PreviewBox 
            width={boxWidth}
            height={boxHeight}
            borderWidth={borderWidth}
            backgroundColor={boxColor}
            borderStyle={borderStyle}
        />
      </div>

      <div className="Side-bar-right">
        <input type="color" onChange={(result) => ChangeColor(result.target.value , 1)} value={value}/>

        <div className="gradient_box">
          <input className="color1" type="color" onChange={(result) => ChangeGradient(result.target.value , 1)} value={value}/>
          <input className="color2" type="color" onChange={(result) => ChangeGradient(result.target.value , 0)} value={value}/>
          <select name="gradient_text" className="gradient_text" onChange={(result) => ChangeGradient(result.target.value , 3)} value={value}>
            <option value="to top">to top</option>
            <option value="to bottom">to bottom</option>
            <option value="to left">to left</option>
            <option value="to right">to right</option>
            <option value="n deg">n deg</option>
          </select>
          <input type="checkbox" value="checkbox" onClick={(result) => ChangeGradient(0 , 4)} value={value}/>
        </div>
      </div>
    </div>
  );
}


export default App;
