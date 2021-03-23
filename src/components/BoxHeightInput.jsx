import React from "react";
import { useSelector } from "react-redux";

import { InputRange, InputNumber } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxHeightInput(props) {
  const min = 0;
  const max = 1000;
  const defaultValue = 500;
  const height =
    useSelector(state => state.boxState.state.boxHeight) || defaultValue;
  return (
    <FlexBox>
      <InputRange
        max={max}
        value={height}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        max={max}
        value={height}
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
