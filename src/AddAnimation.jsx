import React, { useState, useEffect } from 'react';
import { AddAnimationTab } from './AddAnimationTab';

export function AddAnimation(props){

    const [frame , setFrame] = useState(0);
    const [frameIndex , setFrameIndex] = useState(0);

    return (
        <div>
            <button
                className="add_animation"
                onClick={e => props.onClick(props.value+1 , setFrameIndex(frameIndex + 1))}
                >Menu{frameIndex}추가
            </button>
            <AddAnimationTab value={frame} onClick={setFrame}/>
        </div>
    )
}