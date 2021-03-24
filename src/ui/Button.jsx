import React, { useState } from "react";
import styled from "styled-components";

const SmallButton = styled.button`
  background: #ffffff;
  border: 1px solid #594f3c;
  color: #594f3c;
  height: 20px;
  width: 60px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const ToggleBackground = styled.div`
  margin: 10px;
  background: ${props => props.background};
  width: 70px;
  height: 30px;
  border: 1px solid #cccccc;
  border-radius: 15px;
`;
const ToggleCircle = styled.button`
  background: #ffffff;
  width: 30px;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 15px;
  position: relative;
  left: ${props => props.animation};
`;

export const Button = props => {
  return <SmallButton onClick={props.onClick}>{props.message}</SmallButton>;
};

export const ToggleButton = props => {
  const [toggleState, setToggleState] = useState("off");
  const [toggleBackground, setToggleBackground] = useState("#CCCCCC");
  const [toggleAnimation, setToggleAnimation] = useState("0px");
  const clickFunc = () => {
    if (toggleState === "off") {
      setToggleState("on");
      setToggleBackground("#53FF4C");
      setToggleAnimation("40px");
    } else {
      setToggleState("off");
      setToggleBackground("#CCCCCC");
      setToggleAnimation("0px");
    }
  };
  return (
    <ToggleBackground background={toggleBackground}>
      <ToggleCircle onClick={e => clickFunc()} animation={toggleAnimation} />
    </ToggleBackground>
  );
};
