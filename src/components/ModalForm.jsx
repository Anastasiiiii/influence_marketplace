import React, { useState } from "react";
import "../styles/ModalForm.css";

const ModalForm = ({ brandName, brandImage, onClose }) => {
    const [bloggerName, setBloggerName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newMessage = {
            brand: brandName,
            blogger: bloggerName,
            text: message,
            time: new Date().toLocaleString(),
        };

        const storedMessages = JSON.parse(localStorage.getItem("brandMessages")) || [];
        storedMessages.push(newMessage);
        localStorage.setItem("brandMessages", JSON.stringify(storedMessages));

        onClose();
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Send Message to {brandName}</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={bloggerName}
                        onChange={(e) => setBloggerName(e.target.value)}
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

export default ModalForm;
