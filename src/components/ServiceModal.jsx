import React from "react";
import "../styles/ServiceModal.css";
import closeIcon from "../images/close.png";

const ServiceModal = ({ isOpen, onClose, title, services }) => {
    if (!isOpen) return null;

    return (
        <div className="service-container" onClick={onClose}>
            <div className="service-content">
                <img src={closeIcon} className="close-icon" alt="close" onClick={onClose} />
                <h1>{title}</h1>
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>{service}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ServiceModal;