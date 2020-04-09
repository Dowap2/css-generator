import React, { useState } from 'react';
import { tsPropertySignature } from '@babel/types';

export function AddAnimationTab(props){

    let menuList = [];

    const menuItem = <button
                        className="label"
                        value = {props.value}
                        onClick = {e => console.log(e.target.value)}
                    >{props.value}</button>

    menuList = menuList.concat(menuItem)
    
    return (
        <div>
            <ul className>
                {menuList}
            </ul>
        </div>
    )
}