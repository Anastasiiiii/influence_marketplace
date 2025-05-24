import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <h3>Chillz</h3>
                <p>Connecting brands and creators worldwide.</p>
            </div>
            <div className="footer-links">
                <a href="#">Marketplace</a>
                <a href="#">For Brands</a>
                <a href="#">For Influencers</a>
                <a href="#">Contact</a>
            </div>
            <div className="footer-right">
                <p>&copy; {new Date().getFullYear()} Chillz. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
