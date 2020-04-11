import React, { useState } from 'react';
import { tsPropertySignature } from '@babel/types';

let menuList = [];
let index = 0;

export function AddAnimationTab(props){

    const menuItem = <button
                        className="label"
                        value = {index}
                        onClick = {e => console.log(e.target.value)}
                    >menu{index}</button>

    menuList = menuList.concat(menuItem)
    index = index+1;
    
    return (
        <div>
            <ul className>
                {menuList}
            </ul>
        </div>
    )
}