import React from "react";
import "../styles/PriceTag.css";

const PriceTag = ({ type, price, services }) => {
    return (
        <div className="price-tag-container">
            <h2>{type}</h2>
            <h1>{price}</h1>
            <ul>
                {services.map((service, index) => (
                    <li key={index}>{service}</li>
                ))}
            </ul>
            <button id="start-plan-btn">Get Started</button>
        </div>
    );
};

export default PriceTag;
