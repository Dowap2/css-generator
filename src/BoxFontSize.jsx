import React from 'react'

export function BoxFontSize(props){
    if (props.value > 128) {
        props.onChange(128)
    }
    return(
        <div>
            <input 
                type="number" 
                value={props.value} 
                onChange={e=>props.onChange(e.target.value)}
                max="128"
                min="6"
            />
            <label> px</label>
        </div>
    )
}