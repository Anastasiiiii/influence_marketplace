import React from "react";
import "../styles/BlogerModal.css";

const BloggerModal = ({ blogger, onClose }) => {
    if (!blogger) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={blogger.image} alt={blogger.name} className="modal-image" />
                <h2>{blogger.name}</h2>
                <p><strong>Platforms:</strong> {blogger.platforms.join(", ")}</p>
                <p><strong>Subscribers:</strong> {blogger.subscribers}</p>
                <p><strong>Rating:</strong> {blogger.rating}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default BloggerModal;
