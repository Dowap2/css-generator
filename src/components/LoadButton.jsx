import React from "react";
import styled from "styled-components";
import { SmallButton } from "ui/SmallButton";

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
      <SmallButton
        onClick={e => clickFunc()}
        message={props.value}
      ></SmallButton>
    </FlexBox>
  );
}
