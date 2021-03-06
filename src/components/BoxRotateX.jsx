import React from "react";
import { useSelector } from "react-redux";

import { InputRange, InputNumber } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxRotateX(props) {
  const min = 0;
  const max = 360;
  const defaultValue = 0;
  const rotateX =
    useSelector(state => state.boxState.state.rotateX) || defaultValue;
  return (
    <FlexBox>
      <InputRange
        max={max}
        value={rotateX}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        max={max}
        value={rotateX}
        onChange={e => {
          const value = Number(e.target.value);
          if (value > max) props.onChange(max);
          else if (value < min) props.onChange(min);
          else props.onChange(value);
        }}
      />
    </FlexBox>
  );
}
