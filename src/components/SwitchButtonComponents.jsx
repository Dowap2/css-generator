import React from "react";
import styled from "styled-components";

const Tab = styled.button`
  width: 100px;
  height: 30px;
`;
const TabBox = styled.div`
  display: inline-block;
`;

export function SwitchButtonComponents(props) {
  const animationModalFunc = () => {
    props.onChangeAnimation("block");
    props.onChangeModalName("animationModal");
  };
  return (
    <TabBox>
      <Tab onClick={e => props.onChange("style")}>Style</Tab>
      <Tab onClick={e => props.onChange("CSS")}>CSS</Tab>
      <Tab onClick={e => animationModalFunc()}>Animation</Tab>
    </TabBox>
  );
}
