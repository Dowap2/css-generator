import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxGradientColor2Input(props) {
  const gradientColor =
    useSelector(state => state.boxState.state.color2) || "#ffffff";
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
