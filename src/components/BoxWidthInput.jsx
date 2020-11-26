import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { InputRange } from "ui/InputRange";
import { InputNumber } from "ui/InputNumber";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxWidthInput(props) {
  const width = useSelector(state => state.boxState.boxWidth);
  return (
    <FlexBox>
      <InputRange
        max={"1000"}
        value={width || 500}
        onChange={e => props.onChange(Number(e.target.value))}
      />
      <InputNumber
        max={"1000"}
        value={width || 500}
        onChange={e => {
          const value = Number(e.target.value);
          if (value > 1000) props.onChange(1000);
          else if (value < 0) props.onChange(0);
          else props.onChange(value);
        }}
      />
    </FlexBox>
  );
}
