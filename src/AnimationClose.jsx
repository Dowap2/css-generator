import React from "react";

export function AnimationClose(props){
    return <div className="input_box">
      <button 
        className="animation_btn"
        onClick={props.onClick}
      >닫기</button>
    </div>
}