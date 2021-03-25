import React from "react";
import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";

export function AnimationPreview(props) {
  const frame = useSelector(state => state.frameState.state);
  const frame1 = frame.frame1;
  const frame2 = frame.frame2;
  const frame3 = frame.frame3;
  const frame4 = frame.frame4;
  const frame5 = frame.frame5;

  const background =
    frame1.colorType === "gradient"
      ? `linear-gradient(${
          frame1.gradientStyle === "n deg"
            ? `${frame1.deg || 0}deg`
            : frame1.gradientStyle || "to top"
        },${frame1.color1 || "#000000"},${frame1.color2 || "#ffffff"})`
      : frame1.boxColor || "#ffffff";
  const radius = `${frame1.borderRadiusTopLeft}% ${frame1.borderRadiusTopRight}% ${frame1.borderRadiusBottomLeft}% ${frame1.borderRadiusBottomRight}%`;
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
        width: ${`${frame2.boxWidth || 500}px`};
        height: ${`${frame2.height || 500}px`};
        border-radius: ${`${frame2.borderRadiusTopLeft ||
          0}% ${frame2.borderRadiusTopRight ||
          0}% ${frame2.borderRadiusBottomLeft ||
          0}% ${frame2.borderRadiusBottomRight || 0}%}`}
        border-width: ${`${frame2.borderWidth || 5}px`};
        border-style: ${frame2.borderStyle || "solid"};
        border-color: ${frame2.borderColor || "#000000"};
        box-shadow: ${frame2.shadowX || 0}+ "px" ${frame2.shadowY ||
    0} + "px" ${frame2.shadowColor || "#ffffff"};
        text-align: ${frame2.textStyle || "left"};
        color: ${frame2.textColor || "#000000"};
        font-size: ${`${frame2.fontSize || 12}px`};
  }
        
    }
    50% {
        width: ${`${frame3.boxWidth || 500}px`};
        height: ${`${frame3.height || 500}px`};
        border-radius: ${`${frame3.borderRadiusTopLeft ||
          0}% ${frame3.borderRadiusTopRight ||
          0}% ${frame3.borderRadiusBottomLeft ||
          0}% ${frame3.borderRadiusBottomRight || 0}%}`}
        border-width: ${`${frame3.borderWidth || 5}px`};
        border-style: ${frame3.borderStyle || "solid"};
        border-color: ${frame3.borderColor || "#000000"};
        text-align: ${frame3.textStyle || "left"};
        color: ${frame3.textColor || "#000000"};
        font-size: ${`${frame3.fontSize || 12}px`};
    }
    75% {
        width: ${`${frame4.boxWidth || 500}px`};
        height: ${`${frame4.height || 500}px`};
        border-radius: ${`${frame4.borderRadiusTopLeft ||
          0}% ${frame4.borderRadiusTopRight ||
          0}% ${frame4.borderRadiusBottomLeft ||
          0}% ${frame4.borderRadiusBottomRight || 0}%}`}
        border-width: ${`${frame4.borderWidth || 5}px`};
        border-style: ${frame4.borderStyle || "solid"};
        border-color: ${frame4.borderColor || "#000000"};
        text-align: ${frame4.textStyle || "left"};
        color: ${frame4.textColor || "#000000"};
        font-size: ${`${frame4.fontSize || 12}px`};
    }
    100% {
        width: ${`${frame5.boxWidth || 500}px`};
        height: ${`${frame5.height || 500}px`};
        border-radius: ${`${frame5.borderRadiusTopLeft ||
          0}% ${frame5.borderRadiusTopRight ||
          0}% ${frame5.borderRadiusBottomLeft ||
          0}% ${frame5.borderRadiusBottomRight || 0}%}`}
        border-width: ${`${frame5.borderWidth || 5}px`};
        border-style: ${frame5.borderStyle || "solid"};
        border-color: ${frame5.borderColor || "#000000"};
        text-align: ${frame5.textStyle || "left"};
        color: ${frame5.textColor || "#000000"};
        font-size: ${`${frame5.fontSize || 12}px`};
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
        width={`${frame1.boxWidth || 500}px`}
        height={`${frame1.boxHeight || 500}px`}
        borderWidth={`${frame1.borderWidth || 5}px`}
        borderRadius={`${radius || "0%"}`}
        borderStyle={frame1.borderStyle || "solid"}
        borderColor={frame1.borderColor || "#000000"}
        // transform={transform}
        textAlign={frame1.textStyle || "left"}
        color={frame1.textColor || "#000000"}
        fontSize={`${frame1.fontSize || 12}px`}
        background={background || "#ffffff"}
        shadow={`${frame1.shadowX}px ${frame1.shadowY}px ${frame1.shadowColor}`}
      ></AnimationPaper>
      <button>play</button>
    </FlexBox>
  );
}
