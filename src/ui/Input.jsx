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
const Number = styled.input`
  margin: auto;
  -webkit-appearance: none;
  width: 10%;
  cursor: pointer;
  background: #f2f2f2;
  border: 1px solid #594f3c;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;
const Color = styled.input`
  -webkit-appearance: none;
  border: none;
  width: 32px;
  height: 32px;
`;
const Text = styled.input`
  -webkit-appearance: none;
  border: none;
  width: 100px;
  height: 32px;
`;
const Radio = styled.input`
  color: #594f3c;
  background: #ffffff;
  width: 12px;
  height: 12px;
  border-radius: 100%;
  border: 1px solid #594f3c;
  margin-left: 5px;
  margin-right: 10px;
  &:checked {
    appearance: none;
    background: #594f3c;
    border: 2px solid #ffffff;
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

export const InputColor = props => {
  return <Color type="color" value={props.value} onChange={props.onChange} />;
};

export const InputText = props => {
  return <Text type="text" value={props.value} readOnly />;
};

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
