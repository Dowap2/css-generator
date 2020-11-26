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

export const InputRange = state => {
  return (
    <Range
      type="range"
      min={state.min}
      max={state.max}
      value={state.value}
      onChange={state.onChange}
    />
  );
};
