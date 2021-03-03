import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: ${props => props.display};
`;

export const ContainerBox = props => {
  return (
    <Container display={props.display || "block"}>{props.value}</Container>
  );
};
