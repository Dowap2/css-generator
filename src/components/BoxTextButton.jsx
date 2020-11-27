import React from "react";
import { SmallButton } from "ui/SmallButton";

export function BoxTextButton(props) {
  return <SmallButton onClick={e => props.onChange("flex")} message="open" />;
}
