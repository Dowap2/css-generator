import React, { useState } from 'react';
import './App.css';
import { ChangeValue } from './ChangeValue';
import { value } from './Value';
import { ChangeColor } from './ChangeColor';
import { ChangeGradient } from './ChangeGradient';
import { ChangeBorder} from './ChangeBorder';
import { BorderWidthInput } from './BorderWidthInput';
import { ColorInput } from './ColorInput';
import { PreviewBox } from "./PreviewBox";

function App(props) {
  const [borderWidth, setBorderWidth] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#000000");

  return (
    <div className="App">
      <div className="Side-bar-left">
        <h6>width-bar</h6>
        <input type="range" min="0" max="1000" className="width-bar" onChange={ (result) => ChangeValue(result.target.value , 1)} value={value}/>
        <input type="number" min="0" max="1000"className="width-text" onChange={ (result) => ChangeValue(result.target.value , 1)} value={value}/>

        <h6>height-bar</h6>
        <input type="range" min="0" max="1000" className="height_bar" onChange={ (result) => ChangeValue(result.target.value , 2)} value={value}/>
        <input type="number" min="0" max="1000" onChange={ (result) => ChangeValue(result.target.value , 2)} value={value}/>

        <h6>border-bar</h6>
        <BorderWidthInput value={borderWidth} onChange={setBorderWidth} />
        
        <h6>color-bar</h6>
        <ColorInput value={backgroundColor} onChange={setBackgroundColor} />

        <select name="border_text" className="border_text" onChange={(result) => ChangeBorder(result.target.value)} value={value}>
          <option value="none">none</option>
          <option value="hidden">hidden</option>
          <option value="dotted">dotted</option>
          <option value="dashed">dashed</option>
          <option value="solid">solid</option>
          <option value="double">double</option>
        </select>
      </div>

      <div className="Drawing-paper">
        <PreviewBox borderWidth={borderWidth} />
        <PreviewBox backgroundColor={backgroundColor} />
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
