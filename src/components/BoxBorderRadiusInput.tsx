import React from "react";

import { InputRange, InputNumber } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

interface BoxBorderRadiusInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function BoxBorderRadiusInput(props: BoxBorderRadiusInputProps) {
  return (
    <FlexBox>
      <InputRange
        value={props.value || 0}
        onChange={(e: { target: { value: number } }) =>
          props.onChange(e.target.value)
        }
      />
      <InputNumber
        value={props.value || 0}
        onChange={(e: { target: { value: number } }) =>
          props.onChange(e.target.value)
        }
      />
    </FlexBox>
  );
}
