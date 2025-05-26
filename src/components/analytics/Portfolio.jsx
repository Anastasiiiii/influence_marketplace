import React from "react";
import "../../styles/Portfolio.css";

const Portfolio = ({ blogger }) => {
    if (!blogger || !blogger.portfolio) return null;

    return (
        <div className="portfolio-section">
            <h3 className="portfolio-title">Portfolio</h3>
            <div className="portfolio-grid">
                {blogger.portfolio.map((item) => (
                    <div className="portfolio-card" key={item.id}>
                        <div className="portfolio-thumbnail">
                            <img src={item.thumbnail} alt={item.title} />
                        </div>
                        <div className="portfolio-caption">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
