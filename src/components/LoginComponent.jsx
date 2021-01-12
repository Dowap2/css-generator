import React from "react";
import { useState } from "react";
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
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const signUpFunc = () => {
    if (
      ID !== "" &&
      PW !== "" &&
      ID.indexOf(" ") === -1 &&
      PW.indexOf(" ") === -1
    ) {
      setID("");
      setPW("");
      props.signIn(true);
    } else {
      setID("");
      setPW("");
      alert("error 아이디와 비밀번호를 제대로 입력해주세요");
    }
  };
  return (
    <div>
      <label>{sigiInState === true ? "signIn" : "signUp"}</label>
      {sigiInState === true ? (
        <form action="http://localhost:8000/user/signin" method="post">
          <InputID
            name="id"
            value={ID}
            type="text"
            placeholder="ID"
            onChange={e => setID(e.target.value)}
          />
          <InputPW
            name="pw"
            value={PW}
            type="password"
            placeholder="PW"
            onChange={e => setPW(e.target.value)}
          />
          <button>로그인</button>
          <button onClick={e => props.signUp(true)}>회원가입</button>
        </form>
      ) : (
        <form action="http://localhost:8000/user/signup" method="post">
          <InputID
            name="id"
            value={ID}
            type="text"
            placeholder="ID"
            onChange={e => setID(e.target.value)}
          />
          <InputPW
            name="pw"
            value={PW}
            type="password"
            placeholder="PW"
            onChange={e => setPW(e.target.value)}
          />
          <button onClick={e => signUpFunc()}>회원가입</button>
          <button onClick={e => props.signIn(true)}>로그인</button>
        </form>
      )}
    </div>
  );
}
