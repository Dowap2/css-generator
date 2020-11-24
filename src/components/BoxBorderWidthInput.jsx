import React from "react";
import { useSelector } from "react-redux";
import "../App.css";

export function BoxBorderWidthInput(props) {
  const borderWidth = useSelector(state => state.boxState.borderWidth);
  return (
    <div className="input_box">
      <input
        type="range"
        min="0"
        max="100"
        value={borderWidth || 5}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <input
        type="number"
        min="0"
        max="100"
        value={borderWidth || 5}
        onChange={e => {
          const value = Number(e.target.value);
          if (value > 100) props.onChange(100);
          else if (value < 0) props.onChange(0);
          else props.onChange(value);
        }}
      />
    </div>
  );
}
