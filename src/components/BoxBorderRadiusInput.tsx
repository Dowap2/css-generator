import React from "react";

import { InputRange, InputNumber } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

interface BoxBorderRadiusInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function BoxBorderRadiusInput(props: BoxBorderRadiusInputProps) {
  const InputValue: number = props.value || 0;
  return (
    <FlexBox>
      <InputRange
        value={InputValue}
        onChange={(e: { target: { value: number } }) =>
          props.onChange(e.target.value)
        }
      />
      <InputNumber
        value={InputValue}
        onChange={(e: { target: { value: number } }) =>
          props.onChange(e.target.value)
        }
      />
    </FlexBox>
  );
}
