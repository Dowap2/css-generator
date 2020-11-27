import React from "react";
import styled from "styled-components";

import { InputRadio } from "ui/InputRadio";
import { Label } from "ui/Label";

const FlexBox = styled.div`
  display: flex;
`;

export function BoxTextStyle(props) {
  return (
    <FlexBox>
      <Label value={"left"} />
      <InputRadio
        name="align"
        value="left"
        onChange={e => props.onChange(e.target.value)}
      />
      <Label value={"center"} />
      <InputRadio
        name="align"
        value="center"
        onChange={e => props.onChange(e.target.value)}
      />
      <Label value={"right"} />
      <InputRadio
        name="align"
        value="right"
        onChange={e => props.onChange(e.target.value)}
      />
    </FlexBox>
  );
}
