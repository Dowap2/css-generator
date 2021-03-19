// import React, { useState } from "react";
// import styled, { keyframes } from "styled-components";

// let index = [];
// let obj = {};

// export function AnimationPreview(props) {
//   const transform =
//     "scaleX(" +
//     props.value[0].boxTransformX +
//     ")" +
//     "scaleY(" +
//     props.value[0].boxTransformY +
//     ")" +
//     "rotateX(" +
//     props.value[0].boxRotateX +
//     "deg)" +
//     "rotateY(" +
//     props.value[0].boxRotateY +
//     "deg)" +
//     "rotateZ(" +
//     props.value[0].boxRotateZ +
//     "deg)";
//   const gradient =
//     "linear-gradient(" +
//     props.value[0].gradientStyle +
//     "," +
//     props.value[0].boxGradient1 +
//     "," +
//     props.value[0].boxGradient2 +
//     ")";
//   const background =
//     props.value[0].backgroundType === "color"
//       ? props.value[0].boxColor
//       : gradient;
//   const [text, setText] = useState("pause");
//   const len = Object.keys(props.value).length - 1;
//   for (let i = 0; i < 10; i++) {
//     obj[i] = (100 / len) * i;

//     if (props.value[i] === undefined) {
//       index[i] = 0;
//     } else {
//       index[i] = i;
//     }
//   }

//   const boxFade = keyframes`
//         0% {}
//         ${obj[1]}% {
//             width: ${props.value[index[1]].boxWidth + "px"};
//             height: ${props.value[index[1]].boxHeight + "px"};
//             border-width: ${props.value[index[1]].borderWidth + "px"};
//             border-style: ${props.value[index[1]].borderStyle};
//             border-color: ${props.value[index[1]].borderColor};
//             background: ${props.value[index[1]].boxColor};
//             color: ${props.value[index[1]].textColor};
//             font-size: ${props.value[index[1]].fontSize};
//             text-align: ${props.value[index[1]].textStyle};
//             transform: ${transform};
//         }
//         ${obj[2]}%{
//             width: ${props.value[index[2]].boxWidth + "px"};
//             height: ${props.value[index[2]].boxHeight + "px"};
//             border-width: ${props.value[index[2]].borderWidth + "px"};
//             border-style: ${props.value[index[2]].borderStyle};
//             border-color: ${props.value[index[2]].borderColor};
//             background: ${props.value[index[2]].boxColor};
//             color: ${props.value[index[2]].textColor};
//             font-size: ${props.value[index[2]].fontSize};
//             text-align: ${props.value[index[2]].textStyle};
//             transform: ${transform};
//         ${obj[3]}%{
//             width: ${props.value[index[3]].boxWidth + "px"};
//             height: ${props.value[index[3]].boxHeight + "px"};
//             border-width: ${props.value[index[3]].borderWidth + "px"};
//             border-style: ${props.value[index[3]].borderStyle};
//             border-color: ${props.value[index[3]].borderColor};
//             background: ${props.value[index[3]].boxColor};
//             color: ${props.value[index[3]].textColor};
//             font-size: ${props.value[index[3]].fontSize};
//             text-align: ${props.value[index[3]].textStyle};
//             transform: ${transform};
//         }`;
//   const AnimationPaper = styled.div`
//             margin: auto;
//             margin-top: 40px;
//             width: ${props => props.width || "300px"};
//             height: ${props => props.heigth || "300px"};
//             border-width: ${props => props.borderWidth || "30px"};
//             border-style: ${props => props.borderStyle || "solid"};
//             border-color: ${props => props.borderColor || "red"};
//             background: ${props => props.color || "#f5f5dc"};
//             color: ${props => props.textColor || "#000000"};
//             font-size: ${props => props.fontSize};
//             text-align: ${props => props.textStyle};
//             transform: ${props => props.transform};
//             animation: ${boxFade} 2.5s infinite linear;
//             animation-play-state: ${props => props.play || "running"};
//         }`;
//   function clickEvent(value) {
//     if (value === "running") {
//       props.onChange("paused");
//       setText("play");
//     } else {
//       props.onChange("running");
//       setText("pause");
//     }
//   }
//   return (
//     <div>
//       <AnimationPaper
//         width={props.value[0].boxWidth + "px"}
//         heigth={props.value[0].boxHeight + "px"}
//         borderWidth={props.value[0].borderWidth + "px"}
//         borderStyle={props.value[0].borderStyle}
//         borderColor={props.value[0].borderColor}
//         textColor={props.value[0].textColor}
//         textStyle={props.value[0].textStyle}
//         fontSize={props.value[0].fontSize + "px"}
//         transform={transform}
//         play={props.play}
//         color={background}
//       >
//         {props.value[0].modalText}
//       </AnimationPaper>
//       <button
//         value={props.play}
//         onClick={e => clickEvent(e.target.value)}
//         className="animation_btn"
//       >
//         {text}
//       </button>
//     </div>
//   );
// }
