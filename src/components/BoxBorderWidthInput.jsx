import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputRange, InputNumber } from "ui/Input";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxBorderWidthInput(props) {
  const borderWidth = useSelector(state => state.boxState.state.borderWidth);
  const min = 0;
  const max = 100;
  const defaultValue = 50;
  return (
    <FlexBox>
      <InputRange
        max={max}
        value={borderWidth || defaultValue}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        max={max}
        value={borderWidth || defaultValue}
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
