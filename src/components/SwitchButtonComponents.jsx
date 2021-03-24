import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Tab = styled.button`
  width: 100px;
  height: 30px;
  background: ${props => (props.mode === "light" ? "#f5f5f5" : "#0d1218")};
  border: ${props =>
    props.mode === "light" ? "1px solid #0d1218" : "1px solid #c9d1d9"};
  border-radius: 5px;
  color: ${props => (props.mode === "light" ? "#0d1218" : "#c9d1d9")};
`;
const TabBox = styled.div`
  display: inline-block;
`;

export function SwitchButtonComponents(props) {
  const mode = useSelector(state => state.modeState.viewMode);
  const animationModalFunc = () => {
    props.onChangeAnimation("block");
    props.onChangeModalName("animationModal");
  };
  return (
    <TabBox>
      <Tab onClick={e => props.onChange("style")} mode={mode}>
        Style
      </Tab>
      <Tab onClick={e => props.onChange("CSS")} mode={mode}>
        CSS
      </Tab>
      <Tab onClick={e => animationModalFunc()} mode={mode}>
        Animation
      </Tab>
    </TabBox>
  );
}
