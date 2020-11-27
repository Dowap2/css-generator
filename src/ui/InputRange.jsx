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
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: hsl(0, 0%, 95%);
    cursor: pointer;
    border: 0.5px solid #bbbbbb;
    height: 15px;
    width: 15px;
    border-radius: 100%;
  }
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
