import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputNumber } from "ui/InputNumber";
import { InputRange } from "ui/InputRange";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxBorderRadiusInput(props) {
  const borderRadius = useSelector(state => state.boxState.state.borderRadius);
  return (
    <FlexBox>
      <InputRange
        value={borderRadius || 0}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputNumber
        value={borderRadius || 0}
        onChange={e => props.onChange(e.target.value)}
      />
    </FlexBox>
  );
}
