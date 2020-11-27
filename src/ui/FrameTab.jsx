import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 40px;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #594f3c;
`;

export const FrameTab = props => {
  return <Button onClick={props.onClick}>{props.value}</Button>;
};
