import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputRange, InputNumber } from "ui/Input";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxRotateY(props) {
  const min = 0;
  const max = 360;
  const defaultValue = 0;
  const rotateY =
    useSelector(state => state.boxState.state.rotateY) || defaultValue;
  return (
    <FlexBox>
      <InputRange
        max={max}
        value={rotateY}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        max={max}
        value={rotateY}
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
