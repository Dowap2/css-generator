import React from "react";

export function BoxWidthInput(props) {
  return (
    <div className="input_box">
      <input
        type="range"
        min="0"
        max="1000"
        value={props.value}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <input
        type="number"
        min="0"
        max="1000"
        value={props.value}
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
