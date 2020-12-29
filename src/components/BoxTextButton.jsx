import React from "react";
import { SmallButton } from "ui/SmallButton";

export function BoxTextButton(props) {
  const clickFunc = () => {
    props.onChange("flex");
    props.onChangeName("textModal");
  };
  return <SmallButton onClick={e => clickFunc()} message="open" />;
}
