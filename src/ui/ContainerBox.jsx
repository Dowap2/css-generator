import React from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: ${props => props.display};
`;
const Box = styled.div`
  padding: 20px;
`;
const DropdownButton = styled.button`
  margin-top: 10px;
  width: 100%;
`;

export const ContainerBox = props => {
  const [display, setDisplay] = useState("none");
  const changeDisplay = () => {
    display === "block" ? setDisplay("none") : setDisplay("block");
  };
  return (
    <Box>
      <Container display={display}>{props.value}</Container>
      <DropdownButton onClick={e => changeDisplay()}>dropdown</DropdownButton>
    </Box>
  );
};
