import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 100px;
  display: ${props => props.display};
`;

export const ContainerBox = props => {
  return (
    <Container
      display={props.display}
      onClick={e => console.log(props.display)}
    />
  );
};
