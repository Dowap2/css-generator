import React from "react";
import { useSelector } from "react-redux";

export function BoxGradientColor2Input(props) {
  const gradientColor = useSelector(state => state.boxState.color2);
  return (
    <div className="input_box">
      <input
        type="color"
        value={gradientColor || "#ffffff"}
        onChange={e => props.onChange(e.target.value)}
      />
      <input type="text" value={gradientColor || "#ffffff"} readOnly />
    </div>
  );
}
