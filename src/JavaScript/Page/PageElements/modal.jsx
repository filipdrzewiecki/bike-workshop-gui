import React from 'react';
import ReactDOM from 'react-dom';
import './modal.css';

const Modal = props => {
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="modal">
            <div onClick={(e) => e.stopPropagation()} className="modal-window">
                <div className="modal-header">{props.header}</div>
                <div className="modal-content">{props.content}</div>
                <div className="modal-actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );

}

export default Modal;