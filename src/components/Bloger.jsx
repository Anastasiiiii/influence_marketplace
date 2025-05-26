import React from "react";
import "../styles/Bloger.css";

const Bloger = ({ influencer, onCardClick, onMessageClick }) => {
    return (
        <div className="bloger-card" onClick={onCardClick}>
            <div className="bloger-image-section">
                <img src={influencer.avatar} alt={influencer.name} className="bloger-avatar" />
            </div>
            <div className="bloger-info">
                <div className="bloger-name-row">
                    <div className="bloger-name">{influencer.name}</div>
                    <div className={`bloger-growth ${parseFloat(influencer.growth) > 0 ? "positive" : "negative"}`}>
                        {parseFloat(influencer.growth) > 0 ? "↑" : "↓"} {Math.abs(influencer.growth)}%
                    </div>
                </div>

                <div className="bloger-meta">
                    <span>{influencer.handle}</span> · <span>{influencer.country}</span> · <span>{influencer.category}</span>
                </div>

                <div className="stats-row">
                    <div>
                        <p className="stat-value">{influencer.followers.toLocaleString()}K</p>
                        <p className="stat-label">Followers</p>
                    </div>
                    <div>
                        <p className="stat-value">{influencer.engagement}%</p>
                        <p className="stat-label">Engagement</p>
                    </div>
                </div>

                {/* 👇 Цей клік не повинен запускати onCardClick */}
                <button
                    className="message-btn"
                    onClick={(e) => {
                        e.stopPropagation();
                        onMessageClick();
                    }}
                >
                    Message
                </button>
            </div>
        </div>
    );
};

export default Bloger;
