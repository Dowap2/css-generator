import React from "react";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

interface BoxColorInputProps {
  onChange: (value: String) => void;
}

export function BoxColorInput(props: BoxColorInputProps) {
  const boxColor: String =
    useSelector((state: any) => state.boxState.state.boxColor) || "#ffffff";
  return (
    <FlexBox>
      <InputColor
        value={boxColor}
        onChange={(e: { target: { value: string } }) =>
          props.onChange(e.target.value)
        }
      />
      <InputText value={boxColor} />
    </FlexBox>
  );
}
