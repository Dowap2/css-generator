import React from "react";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

interface BoxBorderColorInputProps {
  onChange: any;
}

export function BoxBorderColorInput(props: BoxBorderColorInputProps) {
  const borderColor: String = useSelector(
    (state: any) => state.boxState.state.borderColor
  );
  return (
    <FlexBox>
      <InputColor
        value={borderColor || "#000000"}
        onChange={(e: { target: HTMLInputElement }) =>
          props.onChange(e.target.value)
        }
      />
      <InputText value={borderColor || "#000000"} />
    </FlexBox>
  );
}
