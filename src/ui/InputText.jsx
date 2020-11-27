import React from "react";
import styled from "styled-components";

const Text = styled.input`
  -webkit-appearance: none;
  border: none;
  width: 100px;
  height: 32px;
`;

export const InputText = props => {
  return <Text type="text" value={props.value} readOnly />;
};
