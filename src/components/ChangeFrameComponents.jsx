import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Tab = styled.button`
  width: 100px;
  height: 30px;
`;

export function ChangeFrameComponent(props) {
  const frame = useSelector(state => state.frameState.frame);
  return (
    <div>
      <Tab onClick={e => props.onChange(1)}>1</Tab>
      <Tab onClick={e => props.onChange(2)}>2</Tab>
      <Tab onClick={e => props.onChange(3)}>3</Tab>
      <Tab onClick={e => props.onChange(4)}>4</Tab>
      <Tab onClick={e => props.onChange(5)}>5</Tab>
    </div>
  );
}
