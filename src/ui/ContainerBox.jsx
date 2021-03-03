import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: ${props => props.display};
`;

const FlexBox = styled.div`
  display: flex;
`;

export const ContainerBox = props => {
  const [display, setDisplay] = useState("block");
  const changeDisplay = () => {
    display === "block" ? setDisplay("none") : setDisplay("block");
  };
  return (
    <FlexBox>
      <Container display={display}>{props.value}</Container>
      <button onClick={e => changeDisplay()}>dropdown</button>
    </FlexBox>
  );
};
