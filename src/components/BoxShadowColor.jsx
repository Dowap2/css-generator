import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxShadowColor(props) {
  const shadowColor =
    useSelector(state => state.boxState.state.shadowColor) || "#ffffff";
  return (
    <FlexBox>
      <InputColor
        value={shadowColor}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputText value={shadowColor} />
    </FlexBox>
  );
}
