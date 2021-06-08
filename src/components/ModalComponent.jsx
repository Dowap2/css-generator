import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import BoxTextAreaContainer from "containers/BoxTextAreaContainer";
import LoadModalContainer from "containers/LoadModalContainer";
import { AnimationPreview } from "containers/AnimationPreview";

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
  opacity: 0.5;
  -khtml-opacity: 0.5;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
  z-index: 999;
`;

export function ModalComponent(props) {
  const modalState = useSelector(state => state.modalState.modalState);
  const modalName = useSelector(state => state.modalState.modalName);
  return (
    <Modal state={modalState}>
      <ModalCloseScreen onClick={e => props.onChange("none")} />
      {modalName === "textModal" ? (
        <BoxTextAreaContainer />
      ) : modalName === "loadModal" ? (
        <LoadModalContainer />
      ) : (
        <AnimationPreview />
      )}
    </Modal>
  );
}
