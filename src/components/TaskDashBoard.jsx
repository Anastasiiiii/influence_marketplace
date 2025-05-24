import React, { useEffect, useState } from "react";
import "../styles/TaskDashboard.css";

const TaskDashBoard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const updateTasks = () => {
            const stored = JSON.parse(localStorage.getItem("tasks")) || [];

            const validTasks = stored.filter(
                (t) => t && typeof t === "object" && t.brand && t.text
            );

            setTasks(validTasks);
        };

        updateTasks();
        window.addEventListener("storage", updateTasks);
        return () => window.removeEventListener("storage", updateTasks);
    }, []);

    const handleTakeTask = (index) => {
        const currentTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const myTasks = JSON.parse(localStorage.getItem("myTasks")) || [];

        const takenTask = currentTasks[index];

        const updatedMyTasks = [...myTasks, takenTask];
        localStorage.setItem("myTasks", JSON.stringify(updatedMyTasks));

        const updatedTasks = currentTasks.filter((_, i) => i !== index);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        setTasks(updatedTasks);
    };


    return (
        <div className="task-dashboard">
            <h2>Tasks for Influencers</h2>

            {tasks.length === 0 ? (
                <p>No tasks yet.</p>
            ) : (
                <ul>
                    {tasks.map((t, i) => (
                        <li key={i} className="task-item">
                            <div className="task-info">
                                <strong>{t.brand}</strong> <br />
                                <em>{t.time}</em> <br />
                                {t.text}
                            </div>
                            <button onClick={() => handleTakeTask(i)}>Take it</button>
                        </li>

                    ))}
                </ul>
            )}
        </div>
    );
};

export default TaskDashBoard;
