import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const InputID = styled.input.attrs({ type: "text" })`
  display: flex;
`;
const InputPW = styled.input.attrs({ type: "password" })`
  display: flex;
`;

export function LoginComponent(props) {
  const sigiInState = useSelector(state => state.userState.signInModal);
  return (
    <div>
      <label>{sigiInState === true ? "signIn" : "signUp"}</label>
      {sigiInState === true ? (
        <form action="http://localhost:8000/user" method="post">
          <InputID name="ID" type="text" />
          <InputPW name="PW" type="password" />
          <button onClick={e => console.log(e.target.value)}>로그인</button>
        </form>
      ) : (
        <form action="">
          <InputID type="text" />
          <InputPW type="password" />
          <button onClick={e => props.signUp(true)}>회원가입</button>
        </form>
      )}
    </div>
  );
}
