import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Tab = styled.button`
  width: 100px;
  height: 30px;
`;

export function SwitchButtonComponents(props) {
  const mode = useSelector(state => state.modeState.mode);
  return (
    <div>
      <Tab onClick={e => props.onChange("style")}>Style</Tab>
      <Tab onClick={e => props.onChange("CSS")}>CSS</Tab>
      <button onClick={e => console.log(mode)}></button>
    </div>
  );
}
