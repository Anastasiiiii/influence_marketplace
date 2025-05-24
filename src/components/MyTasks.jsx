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
                <p>You haven't taken any tasks yet.</p>
            ) : (
                <ul>
                    {myTasks.map((t, i) => (
                        <li key={i} className="my-task-item">
                            <strong>{t.brand}</strong> <br />
                            <em>{t.time}</em> <br />
                            {t.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MyTasks;