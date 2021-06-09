import React from "react";
import { useSelector } from "react-redux";

import { InputRange, InputNumber } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

interface BoxBorderWidthInputProps {
  onChange: (value: number) => void;
}

export function BoxBorderWidthInput(props: BoxBorderWidthInputProps) {
  const defaultValue: number = 50;
  const borderWidth: number =
    useSelector((state: any) => state.boxState.state.borderWidth) ||
    defaultValue;
  const min: number = 0;
  const max: number = 100;

  return (
    <FlexBox>
      <InputRange
        max={max}
        value={borderWidth}
        onChange={(e: { target: { value: number } }) =>
          props.onChange(Number(e.target.value))
        }
      />
      <InputNumber
        max={max}
        value={borderWidth}
        onChange={(e: { target: { value: number } }) => {
          const value = Number(e.target.value);
          if (value > max) props.onChange(max);
          else if (value < min) props.onChange(min);
          else props.onChange(value);
        }}
      />
    </FlexBox>
  );
}
