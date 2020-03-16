import React from 'react';
import './Modal.scss';
import { CSSTransition } from "react-transition-group";

export function Modal(props) {
    return (
        <React.Fragment>
            <CSSTransition in={props.isOpened} unmountOnExit timeout={200}>
                <div className="Modal-overlay">
                    <div className="close-screen" onClick={props.onClose} />
                    <div className="Modal">
                        <div className="content">
                            {props.children}
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </React.Fragment>
    )
}
export default Modal;