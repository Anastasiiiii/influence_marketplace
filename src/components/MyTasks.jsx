import React, { useState, useEffect } from "react";
import "../styles/MyTasks.css";

const MyTasks = () => {
    const [myTasks, setMyTasks] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("myTasks")) || [];

        const valid = stored.filter(
            (t) => t && typeof t === "object" && t.text && t.brand
        );

        setMyTasks(valid);
    }, []);

    return (
        <div className="my-tasks-container">
            <h2>My Tasks</h2>
            {myTasks.length === 0 ? (
                <p className="no-tasks-message">You haven't taken any tasks yet.</p>
            ) : (
                <ul className="task-list">
                    {myTasks.map((t, i) => (
                        <li key={i} className="task-item">
                            <span className="task-date">{t.time}</span>
                            <strong>{t.brand}</strong>
                            <p>{t.text}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>

    );
}

export default MyTasks;