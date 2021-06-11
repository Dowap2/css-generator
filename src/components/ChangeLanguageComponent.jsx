import React from "react";

export function ChangeLanguageComponent(props) {
  return (
    <select name="lan" id="lan" onChange={e => props.onChange(e.target.value)}>
      <option value="ko">Korean</option>
      <option value="en">English</option>
    </select>
  );
}