import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputRange } from "ui/InputRange";
import { InputNumber } from "ui/InputNumber";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxRotateX(props) {
  const min = 0;
  const max = 360;
  const defaultValue = 0;
  const rotateX = useSelector(state => state.boxState.rotateX) || defaultValue;
  return (
    <FlexBox>
      <InputRange
        max={max}
        value={rotateX}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        max={max}
        value={rotateX}
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
