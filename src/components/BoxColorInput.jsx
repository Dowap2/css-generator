import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { InputColor } from "ui/InputColor";
import { InputText } from "ui/InputText";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxColorInput(props) {
  const boxColor = useSelector(state => state.boxState.boxColor) || "#ffffff";
  return (
    <FlexBox>
      <InputColor
        value={boxColor}
        onChange={e => props.onChange(e.target.value)}
      />
      <InputText value={boxColor} />
    </FlexBox>
  );
}
