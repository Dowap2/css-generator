import React from "react";
import { useSelector } from "react-redux";

export function BoxGradientColor1Input(props) {
  const gradientColor = useSelector(state => state.boxState.color1);
  return (
    <div className="input_box">
      <input
        type="color"
        value={gradientColor || "#000000"}
        onChange={e => props.onChange(e.target.value)}
      />
      <input type="text" value={gradientColor || "#000000"} readOnly />
    </div>
  );
}
