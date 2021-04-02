import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
`;
const Range = styled.input`
  -webkit-appearance: none;
  margin-top: 5px;
  width: 80%;
  cursor: pointer;
  background: ${props => (props.mode === "light" ? "#594f3c" : "#ffffff")};
  border: 0;
  border-radius: 20px;
  outline: none;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: ${props => (props.mode === "light" ? "#ffffff" : "#58a6ff")};
    cursor: pointer;
    border: ${props =>
      props.mode === "light" ? "0.5px solid #bbbbbb" : "#0.5px solid #58a6ff"};
    height: 15px;
    width: 15px;
    border-radius: 100%;
  }
`;
const Number = styled.input`
  margin: auto;
  -webkit-appearance: none;
  width: 20px;
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

const LabelComponent = styled.label`
  font-size: 16px;
  color: #595959;
  float: left;
  text-align: center;
`;

export const InputRange = props => {
  const mode = useSelector(state => state.modeState.viewMode);
  return (
    <Range
      mode={mode}
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
  const mode = useSelector(state => state.modeState.viewMode);
  return (
    <FlexBox>
      <Number
        mode={mode}
        type="number"
        min={props.min || 0}
        max={props.max}
        value={props.value}
        onChange={props.onChange}
      />
      {props.label}
    </FlexBox>
  );
};

export const InputColor = props => {
  const mode = useSelector(state => state.modeState.viewMode);
  return (
    <Color
      mode={mode}
      type="color"
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export const InputText = props => {
  const mode = useSelector(state => state.modeState.viewMode);
  return <Text mode={mode} type="text" value={props.value} readOnly />;
};

export const InputRadio = props => {
  const mode = useSelector(state => state.modeState.viewMode);
  return (
    <Radio
      mode={mode}
      type="radio"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export const Label = props => {
  return <LabelComponent>{props.value}</LabelComponent>;
};
