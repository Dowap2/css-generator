import React from "react";
import { useSelector } from "react-redux";

export function BoxGradientStyleInput(props) {
  const gradientStyle = useSelector(
    state => state.boxState.state.gradientStyle
  );
  const deg = useSelector(state => state.boxState.state.deg);
  return (
    <div className="input_box">
      <select
        value={gradientStyle || "to top"}
        onChange={e => props.onChange(e.target.value)}
      >
        <option value="to top">to top</option>
        <option value="to bottom">to bottom</option>
        <option value="to left">to left</option>
        <option value="to right">to right</option>
        <option value="n deg">n deg</option>
      </select>
      {gradientStyle === "n deg" ? (
        <input
          type="number"
          min="0"
          max="360"
          value={deg || 0}
          onChange={e => {
            const value = Number(e.target.value);
            if (value > 360) props.onChangeDeg(360);
            else if (value < 0) props.onChangeDeg(0);
            else props.onChangeDeg(value);
          }}
        />
      ) : (
        e => props.onChangeDeg("none")
      )}
    </div>
  );
}
