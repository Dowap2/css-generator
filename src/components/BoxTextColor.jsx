import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputColor, InputText } from "ui/Input";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxTextColor(props) {
  const textColor =
    useSelector(state => state.boxState.state.textColor) || "#000000";
  return (
    <FlexBox>
      <InputColor
        value={textColor}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputText value={textColor} />
    </FlexBox>
  );
}
