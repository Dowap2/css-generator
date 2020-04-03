import React, { useState } from 'react';
const menus = [];

function addTab(props){
    menus.push("Menu"+props);
}
export function AddAnimation(props){
    const menuList = menus.map((menu) => (
    <label 
        className="label"
    >{menu}</label>
    ));

    return (
        <div>
            <button
                className="add_animation"
                onClick={e => props.onClick(props.value+1 , addTab(props.value))}
            >Menu{props.value}추가</button>
            <ul className>
                {menuList}
            </ul>
        </div>
    )
}