import React from "react";
import styled from "styled-components";

const Color = styled.input`
  -webkit-appearance: none;
  border: none;
  width: 32px;
  height: 32px;
`;

export const InputColor = props => {
  return <Color type="color" value={props.value} onChange={props.onChange} />;
};
