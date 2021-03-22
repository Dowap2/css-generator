import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxBorderColorInput(props) {
  const borderColor = useSelector(state => state.boxState.state.borderColor);
  return (
    <FlexBox>
      <InputColor
        value={borderColor || "#000000"}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputText value={borderColor || "#000000"} />
    </FlexBox>
  );
}
