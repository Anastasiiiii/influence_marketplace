import React, { useState } from "react";
import "../styles/PriceModal.css";
import PriceTag from "./PriceTag";
import closeIcon from "../images/close.png";

const PriceModal = ({ isOpen, onClose }) => {
    const [isYearly, setIsYearly] = useState(true); // toggle

    if (!isOpen) return null;

    const pricePlans = [
        {
            type: "Free",
            yearlyPrice: "$0",
            monthlyPrice: "$0",
            services: ["Showcase viewing", "5 requests/month", "No filters"]
        },
        {
            type: "Starter",
            yearlyPrice: "$29/month",
            monthlyPrice: "$39/month",
            services: ["Filter by Gender & Age", "Filter by Location", "Filter by Follower Count"]
        },
        {
            type: "Basic",
            yearlyPrice: "$79/month",
            monthlyPrice: "$99/month",
            services: ["All filters", "Full Analytics", "Unlimited Requests"]
        },
        {
            type: "Premium",
            yearlyPrice: "$199/month",
            monthlyPrice: "$239/month",
            services: ["Includes all Basic features", "Campaign Management tool", "Compare Hired Influencers' Performance"]
        },
        {
            type: "Enterprise",
            yearlyPrice: "Custom",
            monthlyPrice: "Custom",
            services: ["Unlimited requests", "API access", "Priority support", "Advanced analytics"]
        }
    ];

    const displayedPlans = pricePlans.map(plan => ({
        ...plan,
        price: isYearly ? plan.yearlyPrice : plan.monthlyPrice
    }));

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="price-modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={closeIcon} className="close-icon" alt="close" onClick={onClose} />
                <h1>Choose your plan</h1>
                <p>
                    Prices per month ({isYearly ? "billed yearly" : "billed monthly"})
                </p>

                {/* Toggle */}
                <div className="toggle-container">
                    <span className={!isYearly ? "active" : ""}>Monthly</span>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={isYearly}
                            onChange={() => setIsYearly(!isYearly)}
                        />
                        <span className="slider round"></span>
                    </label>
                    <span className={isYearly ? "active" : ""}>Yearly</span>
                </div>

                <div className="price-plans">
                    {displayedPlans.map((plan, index) => (
                        <PriceTag
                            key={index}
                            type={plan.type}
                            price={plan.price}
                            services={plan.services}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PriceModal;
