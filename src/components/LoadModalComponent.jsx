import React from "react";
import { useState } from "react";
import styled from "styled-components";

const TextAreaBox = styled.div`
  width: 500px;
  height: 200px;
  position: absolute;
  z-index: 1000;
`;
const TextArea = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 100%;
`;
const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 50px;
  position: relative;
`;

export function LoadModalComponent(props) {
  const [name, setName] = useState("");
  const okFunc = () => {
    props.onClose("none");
  };
  return (
    <TextAreaBox>
      <label>{name}</label>
      <TextArea
        placeholder="저장할 이름를 입력해주세요"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <Button onClick={e => okFunc()}>OK</Button>
      <Button onClick={e => props.onClose("none")}>Close</Button>
    </TextAreaBox>
  );
}
