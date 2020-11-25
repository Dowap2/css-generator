import React from "react";
import { useSelector } from "react-redux";

export function BoxFontSize(props) {
  const fontSize = useSelector(state => state.boxState.fontSize) || 12;
  if (fontSize > 128) {
    props.onChange(128);
  }
  return (
    <div>
      <input
        type="number"
        value={fontSize}
        onChange={e => props.onChange(e.target.value)}
        max="128"
        min="6"
      />
      <label>px</label>
    </div>
  );
}
