import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
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
  color: ${props => (props.mode === "light" ? "#8a939e" : "#0d1218")};
  background: ${props => (props.mode === "light" ? "#ffffff" : "#c9d1d9")};
  border: 0;
  border-radius: 10px;
  outline: none;
`;
export const FlexBox = styled.div`
  display: flex;
`;

export const ContainerBox = props => {
  const [display, setDisplay] = useState("none");
  const mode = useSelector(state => state.modeState.viewMode);
  const changeDisplay = () => {
    display === "block" ? setDisplay("none") : setDisplay("block");
  };
  return (
    <Box>
      <Container display={display}>{props.value}</Container>
      <DropdownButton mode={mode} onClick={e => changeDisplay()}>
        Dropdown
      </DropdownButton>
    </Box>
  );
};
