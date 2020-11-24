import React from "react";
import { useSelector } from "react-redux";

export function BoxTransformY(props) {
  const transformY = useSelector(state => state.boxState.transformY) || 1;
  return (
    <div className="input_box">
      <input
        type="range"
        min="0"
        max="2"
        step="0.01"
        value={transformY}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <input
        type="number"
        min="0"
        max="100"
        value={transformY}
        onChange={e => {
          const value = Number(e.target.value);
          if (value > 2) props.onChange(2);
          else if (value < 0) props.onChange(0);
          else props.onChange(value);
        }}
      />
    </div>
  );
}
