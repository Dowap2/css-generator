import React from "react";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxShadowColor(props) {
  const shadowColor =
    useSelector(state => state.boxState.state.shadowColor) || "#ffffff";
  return (
    <FlexBox>
      <InputColor
        value={shadowColor}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputText value={shadowColor} />
    </FlexBox>
  );
}
