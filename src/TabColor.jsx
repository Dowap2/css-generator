import React from "react";

export function TabColor(props) {
  return (
    <div className="input_box">
      <select
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      >
        <option value="color">color</option>
        <option value="gradient">gradient</option>
      </select>
    </div>
  );
}
