import React from "react";

export function TextButtonClose(props) {
  return (
    <div>
      <button onChange={e => props.onChange(e.target.value)}>text-input</button>
    </div>
  );
}
