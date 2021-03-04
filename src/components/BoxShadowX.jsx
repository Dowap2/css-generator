import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputRange } from "ui/InputRange";
import { InputNumber } from "ui/InputNumber";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxShadowX(props) {
  const min = -50;
  const max = 50;
  const shadowX = useSelector(state => state.boxState.state.shadowX) || 0;
  return (
    <FlexBox>
      <InputRange
        min={min}
        max={max}
        value={shadowX}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        min={min}
        max={max}
        value={shadowX}
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
