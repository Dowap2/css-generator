import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxGradientColor1Input(props) {
  const gradientColor =
    useSelector(state => state.boxState.state.color1) || "#000000";
  return (
    <FlexBox>
      <InputColor
        value={gradientColor}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputText value={gradientColor} />
    </FlexBox>
  );
}
