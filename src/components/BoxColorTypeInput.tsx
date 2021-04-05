import React from "react";
import { useSelector } from "react-redux";

interface BoxColorTypeInputProps {
  onChange: (value: String) => void;
}

export function BoxColorTypeInput(props: BoxColorTypeInputProps) {
  const colorType: string = useSelector(
    (state: any) => state.boxState.state.colorType
  );
  return (
    <div className="input_box">
      <select value={colorType} onChange={e => props.onChange(e.target.value)}>
        <option value="color">color</option>
        <option value="gradient">gradient</option>
      </select>
    </div>
  );
}
