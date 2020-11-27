import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputColor } from "ui/InputColor";
import { InputText } from "ui/InputText";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxTextColor(props) {
  const textColor = useSelector(state => state.boxState.textColor) || "#000000";
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
