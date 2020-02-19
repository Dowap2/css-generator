import React from "react";

export function ColorInput(props){

    return <div>
        <input 
            type="color"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
        />
        <input 
            type="text"
            value={props.value}
            readOnly
        />
    </div>
}