import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputRange } from "ui/InputRange";
import { InputNumber } from "ui/InputNumber";

const FlexBox = styled.div`
  display: flex;
`;

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
