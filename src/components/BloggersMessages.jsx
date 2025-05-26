import React, { useEffect, useState } from "react";
import "../styles/BloggerMessages.css";

const BloggerMessages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem("bloggerMessages")) || [];
        const sorted = [...storedMessages].sort((a, b) => new Date(b.time) - new Date(a.time));
        setMessages(sorted);
    }, []);

    const clearMessages = () => {
        localStorage.removeItem("bloggerMessages");
        setMessages([]);
    };

    return (
        <div className="blogger-messages-container">
            <h2>Messages Sent to Bloggers</h2>
            {messages.length === 0 ? (
                <p>No messages found.</p>
            ) : (
                <>
                    <button className="clear-button" onClick={clearMessages}>Clear All Messages</button>
                    <ul className="blogger-message-list">
                        {messages.map((msg, index) => (
                            <li key={index} className="blogger-message-item">
                                <p><strong>To:</strong> {msg.bloger}</p>
                                <p><strong>From:</strong> {msg.brand}</p>
                                <p><strong>Message:</strong> {msg.text}</p>
                                <p className="blogger-message-time"><strong>Time:</strong> {msg.time}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </div>

    );
};

export default BloggerMessages;
