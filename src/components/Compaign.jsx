import React from "react";
import "../styles/Compaign.css";
import "../styles/Formulas.css"

const Compaign = ({ img, brandName, period, title, description, platform, budget, time, applicants, posts, onViewDetails }) => {
    return (
        <div className="campaign-card-container">
            <div className="campaign-card">
                <div className="card-header">
                    <img src={img} alt={brandName} className="brand-img" />
                    <div className="brand-info">
                        <strong>{brandName}</strong>
                        <span className="posted">{period}</span>
                    </div>
                </div>

                <h3 className="campaign-title">{title}</h3>
                <p className="campaign-desc">{description}</p>

                <div className="tags">
                    <span className="tag platform">{platform}</span>
                    <span className="tag budget">{budget}</span>
                    <span className="tag time">{time}</span>
                </div>

                <div className="campaign-stats">
                    <span>{applicants} applicants</span>
                    <span>{posts} posts</span>
                </div>

                <button className="details-btn" onClick={onViewDetails}>View Details</button>
            </div>
        </div>
    );
};

export default Compaign;
