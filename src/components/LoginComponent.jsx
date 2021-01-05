import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Modal = styled.div`
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: ${props => props.state || "flex"};
`;
const ModalCloseScreen = styled.div`
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 20%;
  z-index: 999;
`;

export function LoginComponent(props) {
  const sigiInState = useSelector(state => state.userState.signInModal);
  return (
    <div>
      <label>{sigiInState === true ? "signIn" : "signUp"}</label>
      <input type="text" />
      <input type="password" />
      <button onClick={e => props.signIn(true)}>로그인</button>
      <button onClick={e => props.signUp(true)}>회원가입</button>
    </div>
  );
}
