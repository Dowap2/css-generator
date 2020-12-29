import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
`;
const Button = styled.button`
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
      <Button onClick={e => clickFunc()}>{props.value}</Button>
    </FlexBox>
  );
}
