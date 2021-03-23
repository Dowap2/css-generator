import React from "react";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxGradientColor2Input(props) {
  const gradientColor =
    useSelector(state => state.boxState.state.color2) || "#ffffff";
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
