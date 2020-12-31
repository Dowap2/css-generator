import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #ffffff;
  border: 1px solid #594f3c;
  color: #594f3c;
  height: 20px;
  width: 120px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 150px;
`;

export const SmallLongButton = props => {
  return <Button onClick={props.onClick}>{props.message}</Button>;
};
