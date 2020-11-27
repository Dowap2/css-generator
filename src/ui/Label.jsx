import React from "react";
import styled from "styled-components";

const LabelComponent = styled.label`
  font-size: 16px;
  color: #595959;
  float: left;
  text-align: center;
`;

export const Label = props => {
  return <LabelComponent>{props.value}</LabelComponent>;
};
