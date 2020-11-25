import React from "react";

export function BoxTextButton(props) {
  return (
    <div>
      <button
        className="open_btn"
        value={"block"}
        onClick={e => props.onChange(e.target.value)}
      >
        open
      </button>
    </div>
  );
}
