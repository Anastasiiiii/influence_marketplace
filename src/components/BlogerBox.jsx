import React from "react";
import Bloger from "./Bloger";
import "../styles/BlogerBox.css";
import bloger1 from "../images/blogers/bloger1.jpg";
import bloger2 from "../images/blogers/bloger2.jpg";
import bloger3 from "../images/blogers/bloger3.jpg";
import bloger4 from "../images/blogers/bloger4.jpg";
import bloger5 from "../images/blogers/bloger5.jpg";
import bloger6 from "../images/blogers/bloger6.jpg";
import bloger7 from "../images/blogers/bloger7.jpg";
import bloger8 from "../images/blogers/bloger8.jpg";
import bloger9 from "../images/blogers/bloger9.jpg";
import bloger10 from "../images/blogers/bloger10.jpg";
import bloger11 from "../images/blogers/bloger11.jpg";
import bloger12 from "../images/blogers/bloger12.jpg";


const BlogerBox = () => {

    const blogers = [
        bloger1, bloger2, bloger3, bloger4,
        bloger5, bloger6, bloger7, bloger8,
        bloger9, bloger10, bloger11, bloger12
    ];

    return (
        <div className="general-bloger-search-container">
            <div className="introduction-block">
                <div>
                    <h1>Top Performers</h1>
                    <p>Check Out Who's Live from the Top Performers</p>
                </div>
                <div className="search" >
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                    <button id="filter">Filter</button>
                </div>
            </div>
            <div className="bloger-box-container">
                {blogers.map((bloger, index) => (
                    <Bloger key={index} bloger={bloger} />
                ))}
            </div>
        </div>
    )
}

export default BlogerBox;