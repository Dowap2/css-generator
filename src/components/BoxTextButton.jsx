import React from "react";
import { Button } from "ui/Button";

export function BoxTextButton(props) {
  const clickFunc = () => {
    props.onChange("flex");
    props.onChangeName("textModal");
  };
  return <Button onClick={e => clickFunc()} message="open" />;
}
