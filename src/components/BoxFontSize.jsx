import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputRange } from "ui/InputRange";
import { InputNumber } from "ui/InputNumber";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxFontSize(props) {
  const min = 6;
  const max = 128;
  const defaultValue = 12;
  const fontSize =
    useSelector(state => state.boxState.fontSize) || defaultValue;
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
        onChange={e => {
          const value = Number(e.target.value);
          if (value > max) props.onChange(max);
          else if (value < min) props.onChange(min);
          else props.onChange(value);
        }}
      />
      <label>px</label>
    </FlexBox>
  );
}