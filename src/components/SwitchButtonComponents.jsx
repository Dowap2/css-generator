import React from "react";
import { useSelector } from "react-redux";
import { ChangeModalState } from "store/modules/modalState";
import styled from "styled-components";

const Tab = styled.button`
  width: 100px;
  height: 30px;
`;

export function SwitchButtonComponents(props) {
  const i = useSelector(state => state.modalState.modalName);
  const animationModalFunc = () => {
    props.onChangeAnimation("block");
    props.onChangeModalName("animationModal");
    window.setTimeout(() => {
      console.log(i);
    }, 3000);
  };
  return (
    <div>
      <Tab onClick={e => props.onChange("style")}>Style</Tab>
      <Tab onClick={e => props.onChange("CSS")}>CSS</Tab>
      <Tab onClick={e => animationModalFunc()}>Animation</Tab>
    </div>
  );
}
