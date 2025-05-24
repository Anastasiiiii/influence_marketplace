import React, { useState } from "react";
import "../styles/FilterModal.css";

const FilterModal = ({ onClose, onSubmit }) => {
    const [selectedPlatforms, setSelectedPlatforms] = useState([]);
    const [minSubscribers, setMinSubscribers] = useState("");
    const [minRating, setMinRating] = useState("");

    const platforms = ["YouTube", "Instagram", "TikTok"];

    const togglePlatform = (platform) => {
        setSelectedPlatforms(prev =>
            prev.includes(platform)
                ? prev.filter(p => p !== platform)
                : [...prev, platform]
        );
    };

    const handleSubmit = () => {
        onSubmit({ selectedPlatforms, minSubscribers, minRating });
        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="filter-modal">
                <h2>Filter Bloggers</h2>

                <div className="filter-group">
                    <h4>Platforms</h4>
                    {platforms.map(platform => (
                        <button
                            key={platform}
                            className={selectedPlatforms.includes(platform) ? "selected" : ""}
                            onClick={() => togglePlatform(platform)}
                        >
                            {platform}
                        </button>
                    ))}
                </div>

                <div className="filter-group">
                    <label>Subscribers from (e.g. 1000000):</label>
                    <input
                        type="number"
                        value={minSubscribers}
                        onChange={(e) => setMinSubscribers(e.target.value)}
                    />
                </div>

                <div className="filter-group">
                    <label>Rating from:</label>
                    <input
                        type="number"
                        step="0.1"
                        value={minRating}
                        onChange={(e) => setMinRating(e.target.value)}
                    />
                </div>

                <div className="modal-buttons">
                    <button onClick={handleSubmit}>Submit</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default FilterModal;
