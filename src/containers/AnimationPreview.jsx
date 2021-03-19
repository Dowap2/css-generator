import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

export function AnimationPreview(props) {
  const frame = useSelector(state => state.frameState.state);
  const FlexBox = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 1500px;
    width: 1500px;
    background: #ffffff;
  `;
  const boxFade = keyframes`
    25% {
        width: ${frame.frame2.boxWidth + "px" || 500 + "px"};
        height: ${frame.frame2.boxHeight + "px" || 500 + "px"};
        border-width: ${frame.frame2.borderWidth + "px" || 5 + "px"};
        border-style: ${frame.frame2.borderStyle || "solid"};
        border-color: ${frame.frame2.borderColor || "#000000"};
    }
    50% {
        width: ${frame.frame3.boxWidth + "px" || 500 + "px"};
        height: ${frame.frame3.boxHeight + "px" || 500 + "px"};
        border-width: ${frame.frame3.borderWidth + "px" || 5 + "px"};
        border-style: ${frame.frame3.borderStyle || "solid"};
        border-color: ${frame.frame3.borderColor || "#000000"};
    }
    75% {
        width: ${frame.frame4.boxWidth + "px" || 500 + "px"};
        height: ${frame.frame4.boxHeight + "px" || 500 + "px"};
        border-width: ${frame.frame4.borderWidth + "px" || 5 + "px"};
        border-style: ${frame.frame4.borderStyle || "solid"};
        border-color: ${frame.frame4.borderColor || "#000000"};
    }
    100% {
        width: ${frame.frame5.boxWidth + "px" || 500 + "px"};
        height: ${frame.frame5.boxHeight + "px" || 500 + "px"};
        border-width: ${frame.frame5.borderWidth + "px" || 5 + "px"};
        border-style: ${frame.frame5.borderStyle || "solid"};
        border-color: ${frame.frame5.borderColor || "#000000"};
    }
  `;
  const AnimationPaper = styled.div`
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: ${props => props.width};
    height: ${props => props.height};
    border-width: ${props => props.borderWidth};
    border-color: ${props => props.borderColor};
    border-style: ${props => props.borderStyle};
    border-radius: ${props => props.borderRadius};
    transform: ${props => props.transform};
    text-align: ${props => props.textAlign};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    background: ${props => props.background};
    box-shadow: ${props => props.shadow};
    animation: ${boxFade} 2s 1s infinite;
    animation-play-state: running;
  `;
  return (
    <FlexBox>
      <AnimationPaper
        width={`${frame.frame1.boxWidth || 500}px`}
        height={`${frame.frame1.boxHeight || 500}px`}
        borderWidth={`${frame.frame1.borderWidth || 5}px`}
        // borderRadius={`${radius || "0%"}`}
        borderStyle={frame.frame1.borderStyle || "solid"}
        borderColor={frame.frame1.borderColor || "#000000"}
        // transform={transform}
        textAlign={frame.frame1.textStyle || "left"}
        color={frame.frame1.textColor || "#000000"}
        fontSize={`${frame.frame1.fontSize || 12}px`}
        // background={background || "#ffffff"}
        shadow={`${frame.frame1.shadowX}px ${frame.frame1.shadowY}px ${frame.frame1.shadowColor}`}
      ></AnimationPaper>
      <button>play</button>
    </FlexBox>
  );
}
