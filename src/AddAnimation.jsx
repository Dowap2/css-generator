import React, { useState } from 'react';

export function AddAnimation(props){
    let [index , setIndex] = useState(0);
    let [menuList , setMenuList] = useState([]);
    let [frameIndex , setFrameIndex] = useState(0);

    const menuItem = <li><button
                        className="label"
                        value = {index}
                        onClick = {e => props.onChange(e.target.value)}
                    >menu{index}</button></li>
    
    if(index === 0){
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