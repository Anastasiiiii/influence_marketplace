import React, { useState } from "react";

const BlogerMessageModal = ({ blogger, onClose }) => {
    const [brandName, setBrandName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMessage = {
            bloger: blogger.name,
            brand: brandName,
            text: message,
            time: new Date().toLocaleString(),
        };

        const storedMessages = JSON.parse(localStorage.getItem("bloggerMessages")) || [];
        storedMessages.push(newMessage);
        localStorage.setItem("bloggerMessages", JSON.stringify(storedMessages));

        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Send Message to {blogger.name}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Brand"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <div className="modal-buttons">
                        <button type="submit">Send</button>
                        <button type="button" onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BlogerMessageModal;
