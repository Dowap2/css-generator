import React from "react";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

interface BoxBorderColorInputProps {
  onChange: (value: String) => void;
}

export function BoxBorderColorInput(props: BoxBorderColorInputProps) {
  const borderColor: string =
    useSelector((state: any) => state.boxState.state.borderColor) || "#000000";
  return (
    <FlexBox>
      <InputColor
        value={borderColor}
        onChange={(e: { target: { value: String } }) =>
          props.onChange(e.target.value)
        }
      />
      <InputText value={borderColor} />
    </FlexBox>
  );
}
