import React from "react";

export function BoxTextStyle(props){
    return <div>
        <label>left</label>
        <input 
            type="radio" 
            name="align" 
            value="left"
            onChange={e=> props.onChange(e.target.value)}
        />
        <label>center</label>
        <input 
            type="radio" 
            name="align" 
            value="center" 
            onChange={e=> props.onChange(e.target.value)}
        />
        <label>right</label>
        <input 
            type="radio" 
            name="align"
            value="right"
            onChange={e=> props.onChange(e.target.value)}
        />
    </div>
}