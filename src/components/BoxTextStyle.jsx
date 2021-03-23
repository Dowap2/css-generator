import React from "react";

import { InputRadio } from "ui/Input";
import { Label } from "ui/Label";
import { FlexBox } from "ui/ContainerBox";

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
