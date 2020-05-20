import React, { useState, useEffect } from 'react';

export function AddAnimation(props){
    let [index , setIndex] = useState(1);
    let [menuList , setMenuList] = useState([]);
    let [frameIndex , setFrameIndex] = useState(1);

    const menuItem = <li><button
                        className="label"
                        value = {index}
                        onClick = {e => props.onChange(e.target.value)}
                    >menu{index}</button></li>
    
    if(index == 1){
        menuList.push(<li><button className="label" value = {index} onClick = {e => props.onChange(e.target.value)}>menu{index}</button></li>)
        setIndex(index += 1);
        setFrameIndex(frameIndex += 1);
    }

    return (
        <div>
            <button
                className="add_animation"
                onClick={e => props.onClick(props.value+1 , setFrameIndex(frameIndex+1) ,setMenuList(menuList = menuList.concat(menuItem), setIndex(index+1)))}
                >Menu{frameIndex}추가
            </button>
            <ul className>
                {menuList}
            </ul>
        </div>
    )
}