import React from "react";
import { useSelector } from "react-redux";

export function BoxBorderColorInput(props) {
  const borderColor = useSelector(state => state.boxState.borderColor);
  return (
    <div className="input_box">
      <input
        type="color"
        value={borderColor || "#000000"}
        onChange={e => props.onChange(e.target.value)}
      />
      <input type="text" value={borderColor || "#000000"} />
    </div>
  );
}
