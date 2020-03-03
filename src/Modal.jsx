import React, { useState } from 'react';
import './Modal.scss';

export function Modal(props) {
    return (
        <React.Fragment>
            <div className="Modal-overlay" style={{display: props.display}}>
                <div className="Modal">
                    <div className="content">
                        <textarea 
                            name="textbox" 
                            className="text_box" 
                            cols="30" 
                            rows="10"
                            placeholder="텍스트를 입력해주세요"
                            value={props.value}
                            onChange={e=> props.onChange(e.target.value)}
                        />  
                    </div>
                </div>
            </div>      
    </React.Fragment>
  )
}
export default Modal;