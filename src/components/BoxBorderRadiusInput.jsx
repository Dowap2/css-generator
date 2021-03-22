import React from "react";
import styled from "styled-components";

import { InputRange, InputNumber } from "ui/Input";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxBorderRadiusInput(props) {
  return (
    <FlexBox>
      <InputRange
        value={props.value || 0}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputNumber
        value={props.value || 0}
        onChange={e => props.onChange(e.target.value)}
      />
    </FlexBox>
  );
}
