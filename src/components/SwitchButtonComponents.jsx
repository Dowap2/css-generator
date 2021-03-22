import React from "react";
import styled from "styled-components";

const Tab = styled.button`
  width: 100px;
  height: 30px;
`;

export function SwitchButtonComponents(props) {
  const animationModalFunc = () => {
    props.onChangeAnimation("block");
    props.onChangeModalName("animationModal");
  };
  return (
    <div>
      <Tab onClick={e => props.onChange("style")}>Style</Tab>
      <Tab onClick={e => props.onChange("CSS")}>CSS</Tab>
      <Tab onClick={e => animationModalFunc()}>Animation</Tab>
    </div>
  );
}
