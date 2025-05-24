import React from "react";
import "../styles/Header.css";

const Header = ({ title, description, amount, role, img }) => {
    return (
        <div className="header-container">
            <div className="text-content-container">
                <h1>{title}</h1>
                <p>{description}</p>
                <button>Get Started</button>
                <div className="pointers-box">
                    <div className="pointer">
                        <h3>240k+</h3>
                        <p>Total Sales</p>
                    </div>
                    <div className="pointer">
                        <h3>100k+</h3>
                        <p>Total Compaings</p>
                    </div>
                    <div className="pointer">
                        <h3>{amount}</h3>
                        <p>{role}</p>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <img src={img} className="img-header" alt="img" />
            </div>
        </div>
    )
}

export default Header;