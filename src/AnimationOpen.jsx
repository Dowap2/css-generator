import React from "react";

export function AnimationOpen(props){
    return <div className="input_box">
      <button 
        className="animation_btn"
        onClick={props.onClick}
      >애니메이션 미리보기</button>
    </div>
}