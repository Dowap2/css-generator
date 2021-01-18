import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const LoginBox = styled.div`
  width: 500px;
  display: flex;
  margin: auto;
  margin-top: 200px;
`;
const InputForm = styled.form`
  display: flex;
`;
const InputID = styled.input.attrs({ type: "text" })`
  margin-top: 10px;
  width: 300px;
  height: 30px;
  display: flex;
`;
const InputPW = styled.input.attrs({ type: "password" })`
  width: 300px;
  height: 30px;
  margin-top: 10px;
  display: flex;
`;
const InputName = styled.input.attrs({ type: "text" })`
  width: 300px;
  height: 30px;
  display: flex;
`;
const Button = styled.button`
  width: 100px;
  height: 82px;
  background: #d9c8b4;
  border: 0;
  margin-left: 10px;
`;
const TextButton = styled.button`
  width: 100%;
  border: 0;
  background: none;
`;

export function LoginComponent(props) {
  const sigiInState = useSelector(state => state.userState.signInModal);
  const [ID, setID] = useState("");
  const [PW, setPW] = useState("");
  const [Name, setName] = useState("");
  const sendSignIn = () => {
    axios.post(
      "http://localhost:8000/user/signin",
      { id: ID, pw: PW }.then(function(res) {
        console.log(res);
      })
    );
  };
  const signInFunc = () => {
    console.log("signin");
    if (
      ID !== "" &&
      PW !== "" &&
      ID.indexOf(" ") === -1 &&
      PW.indexOf(" ") === -1
    ) {
      setID("");
      setPW("");
      sendSignIn();
    } else {
      setID("");
      setPW("");
      alert("error 아이디와 비밀번호를 제대로 입력해주세요");
    }
  };
  const sendSignUp = () => {
    axios
      .post("http://localhost:8000/user/signup", { name: Name, id: ID, pw: PW })
      .then(function(res) {
        props.signIn(true);
      });
  };
  const signUpFunc = () => {
    console.log("signup");
    if (
      ID !== "" &&
      PW !== "" &&
      ID.indexOf(" ") === -1 &&
      PW.indexOf(" ") === -1
    ) {
      setID("");
      setPW("");
      sendSignUp();
    } else {
      setID("");
      setPW("");
      alert("error 아이디와 비밀번호를 제대로 입력해주세요");
    }
  };
  return (
    <div>
      <label>{sigiInState === true ? "SIGN IN" : "SIGN UP"}</label>
      <LoginBox>
        {sigiInState === true ? (
          <InputForm>
            <div>
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
            </div>
            <Button onClick={e => signInFunc()}>로그인</Button>
            <TextButton onClick={e => props.signUp(true)}>
              회원가입으로
            </TextButton>
          </InputForm>
        ) : (
          <div>
            <InputForm method="post" id="signUpForm">
              <div>
                <InputName
                  name="name"
                  value={Name}
                  placeholder="Name"
                  onChange={e => setName(e.target.value)}
                />
                <InputID
                  name="id"
                  value={ID}
                  placeholder="ID"
                  onChange={e => setID(e.target.value)}
                />
                <InputPW
                  name="pw"
                  value={PW}
                  placeholder="PW"
                  onChange={e => setPW(e.target.value)}
                />
              </div>
              <Button form="signUpForm" onClick={e => signUpFunc()}>
                회원가입
              </Button>
            </InputForm>
            <TextButton onClick={e => props.signIn(true)}>
              로그인으로
            </TextButton>
          </div>
        )}
      </LoginBox>
    </div>
  );
}
