import React from "react";
import { useSelector } from "react-redux";

import { InputRange, InputNumber } from "ui/Input";
import { FlexBox } from "ui/ContainerBox";

export function BoxFontSize(props) {
  const min = 6;
  const max = 128;
  const defaultValue = 12;
  const fontSize =
    useSelector(state => state.boxState.state.fontSize) || defaultValue;
  return (
    <FlexBox>
      <InputRange
        min={min}
        max={max}
        value={fontSize}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        min={min}
        max={max}
        value={fontSize}
        label={"px"}
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
