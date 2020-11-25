import React from "react";
import { useSelector } from "react-redux";

export function BoxTextColor(props) {
  const textColor = useSelector(state => state.boxState.textColor) || "#000000";
  return (
    <div className="input_box">
      <input
        type="color"
        value={textColor}
        onChange={e => props.onChange(e.target.value)}
      />
      <input type="text" value={textColor} readOnly />
    </div>
  );
}
