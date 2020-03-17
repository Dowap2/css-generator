import React, { useState } from 'react';

export function AddAnimation(props){

    return (
        <button
            onClick={e => props.onClick(props.value+1)}
        >Tab{props.value}추가</button>
        
    )
}