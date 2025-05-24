import React, { useState, useEffect } from "react";
import "../styles/MessageToBrand.css";

const MessageToBrand = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem("brandMessages")) || [];
        setMessages(storedMessages);
    }, []);

    return (
        <div className="brand-page-container">
            <h2>Messages from Bloggers</h2>
            {messages.length === 0 ? (
                <p>No messages yet.</p>
            ) : (
                <ul className="message-list">
                    {messages.map((msg, index) => (
                        <li key={index} className="message-item">
                            <strong>Brand:</strong> {msg.brand} <br />
                            <strong>Blogger:</strong> {msg.blogger} <br />
                            <strong>Time:</strong> {msg.time} <br />
                            <strong>Message:</strong> {msg.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MessageToBrand;