import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 500px;
  height: 400px;
  position: absolute;
  z-index: 1000;
`;

export function BoxTextArea(props) {
  const modalText = useSelector(state => state.boxState.text);
  return (
    <TextArea
      cols="30"
      rows="10"
      placeholder="텍스트를 입력해주세요"
      value={modalText}
      onChange={e => props.onChange(e.target.value)}
    />
  );
}
