import React from "react";
import { useSelector } from "react-redux";

import { InputRange, InputNumber } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxTransformX(props) {
  const min = 0;
  const max = 2;
  const step = 0.01;
  const transformX = useSelector(state => state.boxState.state.transformX) || 1;
  return (
    <FlexBox>
      <InputRange
        max={max}
        step={step}
        value={transformX}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        max={max}
        value={transformX}
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
