import React from "react";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxTextColor(props) {
  const textColor =
    useSelector(state => state.boxState.state.textColor) || "#000000";
  return (
    <FlexBox>
      <InputColor
        value={textColor}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputText value={textColor} />
    </FlexBox>
  );
}
