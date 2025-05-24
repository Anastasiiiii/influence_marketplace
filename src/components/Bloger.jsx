import React from "react";
import "../styles/Bloger.css";

const Bloger = ({ bloger }) => {
    return (
        <div className="bloger-container">
            <img src={bloger} className="bloger-img" alr="bloger" />
        </div>
    )
}

export default Bloger;