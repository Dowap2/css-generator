import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputRange } from "ui/InputRange";
import { InputNumber } from "ui/InputNumber";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxTransformX(props) {
  const min = 0;
  const max = 2;
  const step = 0.01;
  const transformX = useSelector(state => state.boxState.transformX) || 1;
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