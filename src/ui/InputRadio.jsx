import React from "react";
import styled from "styled-components";

const Radio = styled.input`
  color: #594f3c;
  background: #ffffff;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: 1px solid #594f3c;
  margin-left: 5px;
  margin-right: 10px;
`;

export const InputRadio = props => {
  return (
    <Radio
      type="radio"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
