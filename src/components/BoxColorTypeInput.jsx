import React from "react";
import { useSelector } from "react-redux";

export function BoxColorTypeInput(props) {
  const colorType = useSelector(state => state.boxState.state.colorType);
  return (
    <div className="input_box">
      <select value={colorType} onChange={e => props.onChange(e.target.value)}>
        <option value="color">color</option>
        <option value="gradient">gradient</option>
      </select>
    </div>
  );
}
