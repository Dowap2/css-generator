import React from "react";
import { useSelector } from "react-redux";

import { InputRange, InputNumber } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

interface BoxFontSizeProps {
  onChange: (value: number) => void;
}

export function BoxFontSize(props: BoxFontSizeProps) {
  const min: number = 6;
  const max: number = 128;
  const defaultValue: number = 12;
  const fontSize: number =
    useSelector((state: any) => state.boxState.state.fontSize) || defaultValue;
  return (
    <FlexBox>
      <InputRange
        min={min}
        max={max}
        value={fontSize}
        onChange={(e: { target: { value: number } }) =>
          props.onChange(Number(e.target.value))
        }
      />
      <InputNumber
        min={min}
        max={max}
        value={fontSize}
        onChange={(e: { target: { value: number } }) => {
          const value = Number(e.target.value);
          if (value > max) props.onChange(max);
          else if (value < min) props.onChange(min);
          else props.onChange(value);
        }}
      />
      <label>px</label>
    </FlexBox>
  );
}
