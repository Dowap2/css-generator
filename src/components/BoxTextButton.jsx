import React from "react";

export function BoxTextButton(props) {
  return (
    <div>
      <button className="open_btn" onClick={e => props.onChange("flex")}>
        open
      </button>
    </div>
  );
}
