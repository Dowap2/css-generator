import React from "react";
import { useSelector } from "react-redux";

import { InputRange, InputNumber } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxShadowY(props) {
  const min = -50;
  const max = 50;
  const shadowY = useSelector(state => state.boxState.state.shadowY) || 0;
  return (
    <FlexBox>
      <InputRange
        min={min}
        max={max}
        value={shadowY}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        min={min}
        max={max}
        value={shadowY}
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
