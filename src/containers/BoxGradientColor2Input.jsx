import React from "react";

export function BoxGradientColor2Input(props) {
  return (
    <div className="input_box">
      <input
        type="color"
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
      <input type="text" value={props.value} readOnly />
    </div>
  );
}
