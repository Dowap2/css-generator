import React from "react";

export function BorderStyleInput(props){
    return <div>
        <select
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
        >
            <option value="none">none</option>
            <option value="hidden">hidden</option>
            <option value="dotted">dotted</option>
            <option value="dashed">dashed</option>
            <option value="solid">solid</option>
            <option value="double">double</option>
        </select>

    </div>
}