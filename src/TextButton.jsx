import React from "react";
import "./App.css"

export function TextButton(props){
    return <div>
        <button
            className="open_btn"
            value={"block"}
            onClick={e=> props.onChange(String(e.target.value))}
        >
            입력하기
        </button>
    </div>
}