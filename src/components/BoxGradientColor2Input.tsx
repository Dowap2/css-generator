import React from "react";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

interface BoxGradientColor2InputProps {
  onChange: (value: String) => void;
}

export function BoxGradientColor2Input(props: BoxGradientColor2InputProps) {
  const gradientColor: String =
    useSelector((state: any) => state.boxState.state.color2) || "#ffffff";
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
