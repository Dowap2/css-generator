import React from "react";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxColorInput(props) {
  const boxColor =
    useSelector(state => state.boxState.state.boxColor) || "#ffffff";
  return (
    <FlexBox>
      <InputColor
        value={boxColor}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputText value={boxColor} />
    </FlexBox>
  );
}
