import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Tab = styled.button`
  width: 100px;
  height: 30px;
`;

export function ChangeFrameComponent(props) {
  const state = useSelector(state => state.boxState.state);
  const currentIndex = useSelector(state => state.frameState.state.frame);
  const frame = useSelector(state => state.frameState.state);
  const ChangeFrame = (index, frame) => {
    props.onChangeFrame({ state, currentIndex });
    props.onChange(index);
    props.onChangeBoxState(frame);
  };
  return (
    <div>
      <Tab onClick={e => ChangeFrame(1, frame.frame1)}>1</Tab>
      <Tab onClick={e => ChangeFrame(2, frame.frame2)}>2</Tab>
      <Tab onClick={e => ChangeFrame(3, frame.frame3)}>3</Tab>
      <Tab onClick={e => ChangeFrame(4, frame.frame4)}>4</Tab>
      <Tab onClick={e => ChangeFrame(5, frame.frame5)}>5</Tab>
    </div>
  );
}
