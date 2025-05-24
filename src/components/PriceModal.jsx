import React from "react";
import "../styles/PriceModal.css";
import PriceTag from "./PriceTag";
import closeIcon from "../images/close.png";

const PriceModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const pricePlans = [
        {
            type: "Free",
            price: "$0",
            services: ["Showcase viewing", "5 requests/month", "No filters"]
        },
        {
            type: "Basic",
            price: "$199/month",
            services: ["All filters", "50 requests/month", "Basic analytics", "Email support"]
        },
        {
            type: "Premium",
            price: "$599/month",
            services: ["Unlimited requests", "API access", "Priority support", "Advanced analytics"]
        }
    ]

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="price-modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={closeIcon} className="close-icon" alt="close" onClick={onClose} />
                <h1>Choose your plan</h1>
                <p>Unlock endless possibilities</p>
                <div className="price-plans">
                    {pricePlans.map((plan, index) => {
                        return (<PriceTag
                            type={plan.type}
                            price={plan.price}
                            services={plan.services}
                            key={index}
                        />)
                    })}
                </div>
            </div>
        </div>
    );
};

export default PriceModal;
