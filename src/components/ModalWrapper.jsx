import React from "react";
import "../styles/ModalWrapper.css"; 
import closeIcon from "../images/close.png";

const ModalWrapper = ({ onClose, children }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                
                {children}
            </div>
        </div>
    );
};

export default ModalWrapper;