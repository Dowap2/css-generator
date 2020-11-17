import React from "react";
import CSS from "./App.css";
import { func } from "prop-types";

export function TextButtonClose(props) {
  return (
    <div>
      <button onChange={e => props.onChange(e.target.value)}>text-input</button>
    </div>
  );
}
