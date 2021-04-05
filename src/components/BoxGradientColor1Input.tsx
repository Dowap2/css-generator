import React from "react";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

interface BoxGradientColor1InputProps {
  onChange: (value: String) => void;
}

export function BoxGradientColor1Input(props: BoxGradientColor1InputProps) {
  const gradientColor: String =
    useSelector((state: any) => state.boxState.state.color1) || "#000000";
  return (
    <FlexBox>
      <InputColor
        value={gradientColor}
        onChange={(e: { target: { value: String } }) =>
          props.onChange(e.target.value)
        }
      />
      <InputText value={gradientColor} />
    </FlexBox>
  );
}
