import React from "react";
import { useSelector } from "react-redux";

export function BoxBorderStyleInput(props) {
  const borderStyle = useSelector(state => state.boxState.borderStyle);
  return (
    <div className="input_box">
      <select
        value={borderStyle || "soild"}
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
  );
}
