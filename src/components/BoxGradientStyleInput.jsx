import React from "react";
import { useSelector } from "react-redux";

export function BoxGradientStyleInput(props) {
  const gradientStlye = useSelector(state => state.boxState.gradientStlye);
  return (
    <div className="input_box">
      <select
        value={gradientStlye || "to top"}
        onChange={e => props.onChange(e.target.value)}
      >
        <option value="to top">to top</option>
        <option value="to bottom">to bottom</option>
        <option value="to left">to left</option>
        <option value="to right">to right</option>
        <option value="n deg">n deg</option>
      </select>
    </div>
  );
}
