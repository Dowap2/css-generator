import React from "react";
import { useSelector } from "react-redux";

export function BoxHeightInput(props) {
  const height = useSelector(state => state.boxValue.boxHeight);
  return (
    <div className="input_box">
      <input
        type="range"
        min="0"
        max="1000"
        value={height}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <input
        type="number"
        min="0"
        max="1000"
        value={height}
        onChange={e => {
          const value = Number(e.target.value);
          if (value > 1000) props.onChange(1000);
          else if (value < 0) props.onChange(0);
          else props.onChange(value);
        }}
      />
    </div>
  );
}
