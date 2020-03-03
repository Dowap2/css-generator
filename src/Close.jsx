import React from "react";
import "./App.css"

export function Close(props){
    return <div>
        <button
            value={"none"}
            onClick={e=> props.onChange(String(e.target.value))}
        >
            닫기
        </button>
    </div>
}