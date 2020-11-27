import React from "react";
import styled from "styled-components";

const Range = styled.input`
  -webkit-appearance: none;
  margin-top: 5px;
  width: 80%;
  cursor: pointer;
  background: #594f3c;
  border: 0;
  border-radius: 20px;
`;

export const InputRange = props => {
  return (
    <Range
      type="range"
      min={props.min || 0}
      max={props.max}
      step={props.step || 1}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
