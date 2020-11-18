import React from "react";
import { useSelector } from "react-redux";

export function BoxWidthInput(props) {
  const width = useSelector(state => state.boxValue.boxWidth);
  return (
    <div className="input_box">
      <input
        type="range"
        min="0"
        max="1000"
        value={width}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <input
        type="number"
        min="0"
        max="1000"
        value={width}
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
