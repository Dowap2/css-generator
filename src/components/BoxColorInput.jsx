import React from "react";
import { useSelector } from "react-redux";

export function BoxColorInput(props) {
  const boxColor = useSelector(state => state.boxState.boxColor);
  return (
    <div className="input_box">
      <input
        type="color"
        value={boxColor || "#ffffff"}
        onChange={e => props.onChange(e.target.value)}
      />
      <input type="text" value={boxColor || "#ffffff"} readOnly />
    </div>
  );
}
