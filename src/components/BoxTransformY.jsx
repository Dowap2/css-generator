import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputRange, InputNumber } from "ui/Input";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxTransformY(props) {
  const min = 0;
  const max = 2;
  const step = 0.01;
  const transformY = useSelector(state => state.boxState.state.transformY) || 1;
  return (
    <FlexBox>
      <InputRange
        max={max}
        step={step}
        value={transformY}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        max={max}
        value={transformY}
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
