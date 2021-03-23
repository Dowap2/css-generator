import React from "react";
import { useSelector } from "react-redux";

import { InputRange, InputNumber } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxWidthInput(props) {
  const min = 0;
  const max = 1000;
  const defaultValue = 500;
  const width =
    useSelector(state => state.boxState.state.boxWidth) || defaultValue;
  return (
    <FlexBox>
      <InputRange
        max={max}
        value={width}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        max={max}
        value={width}
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
