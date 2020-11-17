import React from "react";
import "../App.css";

export function Close(props) {
  return (
    <div className="input_box">
      <button className="close_btn" value={"none"} onClick={props.onClick}>
        닫기
      </button>
    </div>
  );
}
