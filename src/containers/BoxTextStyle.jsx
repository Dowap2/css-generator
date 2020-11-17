import React from "react";

export function BoxTextStyle(props) {
  return (
    <div className="input_box">
      <label>left</label>
      <input
        type="radio"
        name="align"
        value="left"
        className="radio"
        onChange={e => props.onChange(e.target.value)}
      />
      <label>center</label>
      <input
        type="radio"
        name="align"
        value="center"
        className="radio"
        onChange={e => props.onChange(e.target.value)}
      />
      <label>right</label>
      <input
        type="radio"
        name="align"
        value="right"
        className="radio"
        onChange={e => props.onChange(e.target.value)}
      />
    </div>
  );
}
