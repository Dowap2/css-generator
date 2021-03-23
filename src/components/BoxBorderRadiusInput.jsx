import React from "react";

import { InputRange, InputNumber } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxBorderRadiusInput(props) {
  return (
    <FlexBox>
      <InputRange
        value={props.value || 0}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputNumber
        value={props.value || 0}
        onChange={e => props.onChange(e.target.value)}
      />
    </FlexBox>
  );
}
