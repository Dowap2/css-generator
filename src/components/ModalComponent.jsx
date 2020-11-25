import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { BoxTextAreaContainer } from "containers/BoxTextAreaContainer";

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

export function ModalComponent(props) {
  const modalState = useSelector(state => state.modalState.textModalState);
  return (
    <Modal state={modalState}>
      <ModalCloseScreen onClick={e => props.onChange("none")} />
      <BoxTextAreaContainer />
    </Modal>
  );
}
