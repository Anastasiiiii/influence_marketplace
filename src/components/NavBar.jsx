import React from "react";

const NavBar = () => {
    return (
        <div className="nav-container">
            <h2 className="logo"><a href="/">Chillz</a></h2>
            <nav className="nav-links">
                <a href="#">How it works</a>
                <a href="#">For brands</a>
                <a href="#">For creators</a>
            </nav>
        </div>
    )
}

export default NavBar;