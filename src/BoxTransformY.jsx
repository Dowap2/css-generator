import React from "react";

export function BoxTransformY(props){
    return <div>
        <input 
            type="range"
            min="0"
            max="2"
            step="0.01"
            value={props.value}
            onChange={e=> props.onChange(Number(e.target.value))}
        />
        <input
            type="number"
            min="0"
            max="100"
            value={props.value}
            onChange={e => {
                const value = Number(e.target.value);
                if (value > 2) props.onChange(2);
                else if (value < 0) props.onChange(0);
                else props.onChange(value);
            }}
        />
    </div>
}