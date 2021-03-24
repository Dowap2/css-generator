import React from "react";
import styled from "styled-components";
import { Button } from "ui/Button";

const FlexBox = styled.div`
  display: flex;
`;

export function LoadButton(props) {
  const clickFunc = () => {
    props.onChange("flex");
    props.onChangeName("loadModal");
    props.onChangeType(props.value);
  };
  return (
    <FlexBox>
      <Button onClick={e => clickFunc()} message={props.value}></Button>
    </FlexBox>
  );
}
