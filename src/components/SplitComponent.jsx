import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Formulas.css";
import "../styles/SplitComponent.css";
import cursorIcon from "../images/cursor.png";
import rightArrowIcon from "../images/right.png";
import leftArrowIcon from "../images/left.png";

const SplitComponent = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [leftWidth, setLeftWidth] = useState(50); 

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;

    const bounds = containerRef.current.getBoundingClientRect();
    const newLeftWidth = ((e.clientX - bounds.left) / bounds.width) * 100;

    if (newLeftWidth > 10 && newLeftWidth < 90) {
      setLeftWidth(newLeftWidth);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (leftWidth > 60) {
      navigate("/business");
    } else if (leftWidth < 40) {
      navigate("/creator");
    } else {
      setLeftWidth(50);
    }
  };

  return (
    <div
      className="split-landing"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={`side business ${!isDragging ? "suggest" : ""}`}
        style={{ width: `${leftWidth}%` }}>
        <nav className="logo">
          <h2>chillz</h2>
        </nav>
        <div className="creator-content">
          <h1 className="title">
            I'm A Business Or Brand Looking To Collaborate With Creators.
          </h1>
        </div>
        <img src={cursorIcon} className="cursor" alt="cursor" />
      </div>

      <div className="divider-handle" onMouseDown={handleMouseDown}>
        <div className="circle">
          <span className="arrow left"><img src={rightArrowIcon} alt="rightArrow" /></span>
          <span className="arrow right"><img src={leftArrowIcon} alt="leftArrow" /></span>
        </div>
      </div>

      <div c className={`side creator ${!isDragging ? "suggest" : ""}`}
        style={{ width: `${100 - leftWidth}%` }}>
        <nav className="nav-links">
          <a href="#">How it works</a>
          <a href="#">For brands</a>
          <a href="#">For creators</a>
        </nav>
        <div className="creator-content">
          <h1 className="title">
            I'm A Creator Who Wants To Work With Brands And Earn.
          </h1>
        </div>
        <img src={cursorIcon} className="cursor" alt="cursor" />
      </div>
    </div >
  );
};

export default SplitComponent;
