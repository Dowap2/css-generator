import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TextAreaBox = styled.div`
  width: 500px;
  height: 400px;
  position: absolute;
  z-index: 1000;
`;
const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
`;
const Button = styled.button`
  width: 100%;
  height: 50px;
  position: relative;
`;

export function BoxTextArea(props) {
  const modalText = useSelector(state => state.boxState.text);
  return (
    <TextAreaBox>
      <TextArea
        cols="30"
        rows="10"
        placeholder="텍스트를 입력해주세요"
        value={modalText}
        onChange={e => props.onChange(e.target.value)}
      />
      <Button onClick={e => props.onClose("none")}>Close</Button>
    </TextAreaBox>
  );
}
