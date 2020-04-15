import React, { useState, useEffect } from 'react';

let menuList = [];
let index = 1;

export function AddAnimation(props){

    const [frameIndex , setFrameIndex] = useState(1);
    const menuItem = <button
                        className="label"
                        value = {index}
                        onClick = {e => props.onChange(e.target.value)}
                    >menu{index}</button>
                    
    function addFrame(){
        menuList = menuList.concat(menuItem)
        index = index+1;
    }

    return (
        <div>
            <button
                className="add_animation"
                onClick={e => props.onClick(props.value+1 , setFrameIndex(frameIndex + 1) , addFrame())}
                >Menu{frameIndex}추가
            </button>
            <ul className>
                {menuList}
            </ul>
        </div>
    )
}