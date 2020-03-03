import React from "react";

export function BoxGradientColor1Input(props){
    
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