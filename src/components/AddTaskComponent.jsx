import React, { useState } from "react";
import "../styles/AddTaskComponent.css";
import "../styles/Formulas.css";
import elImg from "../images/gold-gradient-social-media-logos.png";

const AddTaskComponent = () => {
  const [brandName, setBrandName] = useState("");
  const [taskText, setTaskText] = useState("");

  const handlePublish = () => {
    if (brandName.trim() && taskText.trim()) {
      const stored = JSON.parse(localStorage.getItem("tasks")) || [];
      const newTask = {
        brand: brandName,
        text: taskText,
        time: new Date().toLocaleString()
      };
      const updated = [...stored, newTask];
      localStorage.setItem("tasks", JSON.stringify(updated));
      setBrandName("");
      setTaskText("");
    }
  };

  return (
    <div className="add-task-wrapper">
      <div className="add-component-container">
        <img src={elImg} alt="icons" className="el-img" />
        <div className="task-form">
          <h2>Add your task</h2>
          <input
            type="text"
            placeholder="Your brand name..."
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
          <textarea
            placeholder="Describe your task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button onClick={handlePublish}>Publish</button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskComponent;
