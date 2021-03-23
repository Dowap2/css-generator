import React from "react";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxGradientColor1Input(props) {
  const gradientColor =
    useSelector(state => state.boxState.state.color1) || "#000000";
  return (
    <FlexBox>
      <InputColor
        value={gradientColor}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputText value={gradientColor} />
    </FlexBox>
  );
}
