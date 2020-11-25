import React from "react";
import "./Modal.scss";
import { CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

export function Modal(props) {
  const modalState = useSelector(state => state.modalState.modalState);
  return (
    <React.Fragment>
      <CSSTransition in={modalState} unmountOnExit timeout={200}>
        <div className="Modal-overlay">
          <div className="close-screen" onClick={props.onClose} />
          <div className="Modal">
            <div className="content">{props.children}</div>
          </div>
        </div>
      </CSSTransition>
    </React.Fragment>
  );
}
export default Modal;
