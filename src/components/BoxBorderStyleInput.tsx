import React from "react";
import { useSelector } from "react-redux";

interface BoxBorderStyleInputProps {
  onChange: (value: String) => void;
}

export function BoxBorderStyleInput(props: BoxBorderStyleInputProps) {
  const borderStyle: string =
    useSelector((state: any) => state.boxState.state.borderStyle) || "solid";
  return (
    <div className="input_box">
      <select
        value={borderStyle}
        onChange={e => props.onChange(e.target.value)}
      >
        <option value="solid">solid</option>
        <option value="none">none</option>
        <option value="hidden">hidden</option>
        <option value="dotted">dotted</option>
        <option value="dashed">dashed</option>
        <option value="double">double</option>
      </select>
    </div>
  );
}
