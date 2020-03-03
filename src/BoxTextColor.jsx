import React from "react";

export function BoxTextColor(props){
    return <div>
        <input 
            type="color"
            value={props.value}
            onChange={e=> props.onChange(e.target.value)}
        />
    </div>
}