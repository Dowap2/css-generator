import React from "react";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxBorderColorInput(props) {
  const borderColor = useSelector(state => state.boxState.state.borderColor);
  return (
    <FlexBox>
      <InputColor
        value={borderColor || "#000000"}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputText value={borderColor || "#000000"} />
    </FlexBox>
  );
}
