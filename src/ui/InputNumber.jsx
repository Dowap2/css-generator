import React from "react";
import styled from "styled-components";

const Number = styled.input`
  margin: auto;
  -webkit-appearance: none;
  width: 10%;
  cursor: pointer;
  background: #f2f2f2;
  border: 1px solid #594f3c;
`;

export const InputNumber = props => {
  return (
    <Number
      type="number"
      min={props.min || 0}
      max={props.max}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
