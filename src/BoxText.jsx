import React from "react";
import CSS from './App.css'

export function BoxText(props){
    return <div>
        <textarea 
            name="textbox" 
            className="text_box" 
            cols="30" 
            rows="10"
            placeholder="텍스트를 입력해주세요"
            value={props.value}
            onChange={e=> props.onChange(e.target.value)}
        />
    </div>
}