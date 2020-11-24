import React from "react";
import { useSelector } from "react-redux";

export function BoxRotateZ(props) {
  const rotateZ = useSelector(state => state.boxState.rotateZ) || 0;
  return (
    <div className="input_box">
      <input
        type="range"
        min="0"
        max="360"
        value={rotateZ}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <input
        type="number"
        min="0"
        max="360"
        value={rotateZ}
        onChange={e => {
          const value = Number(e.target.value);
          if (value > 360) props.onChange(360);
          else if (value < 0) props.onChange(0);
          else props.onChange(value);
        }}
      />
    </div>
  );
}
