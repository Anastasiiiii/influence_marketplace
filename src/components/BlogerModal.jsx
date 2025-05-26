import React, { useState } from "react";
import "../styles/BlogerModal.css";
import "../styles/Formulas.css";
import Countries from "./analytics/Countries";
import Followers from "./analytics/Followers";
import GeneralData from "./analytics/GeneralData";
import Growth from "./analytics/Growth";
import Languages from "./analytics/Languages";
import Packages from "./analytics/Packages";
import Portfolio from "./analytics/Portfolio";
import Reviews from "./analytics/Reviews";
import BlogerMessageModal from "./BlogerMessageModal";
import closeIcon from "../images/close.png";

const BloggerModal = ({ blogger, onClose }) => {
    const [selectedSection, setSelectedSection] = useState("general");
    const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);


    if (!blogger) return null;


    const handleChange = (e) => {
        setSelectedSection(e.target.value);
    };

    const handleOpenMessageModal = () => {
        setIsMessageModalOpen(true);
    };

    const handleCloseMessageModal = () => {
        setIsMessageModalOpen(false);
    };


    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img src={closeIcon} className="close-icon" alt="close" onClick={onClose} />
                <div className="blogger-modal-header">
                    <img src={blogger.avatar} alt="bloggerImg" />
                    <h2>{blogger.name}</h2>
                    <p>{blogger.handle}</p>
                </div>
                <div className="blogger-buttons-containers">
                    <select value={selectedSection} onChange={handleChange} className="dropdown">
                        <option value="general">General Data</option>
                        <option value="portfolio">Portfolio</option>
                        <option value="packages">Packages</option>
                        <option value="reviews">Reviews</option>
                        <option value="followers">Followers</option>
                        <option value="countries">Countries</option>
                        <option value="languages">Languages</option>
                        <option value="growth">Growth</option>
                    </select>
                    <button className="blogger-message-button" onClick={handleOpenMessageModal}>Message</button>
                </div>

                <div className="section-content">
                    {selectedSection === "general" && <GeneralData blogger={blogger} />}
                    {selectedSection === "portfolio" && <Portfolio blogger={blogger} />}
                    {selectedSection === "packages" && <Packages />}
                    {selectedSection === "reviews" && <Reviews />}
                    {selectedSection === "followers" && <Followers blogger={blogger} />}
                    {selectedSection === "countries" && <Countries blogger={blogger} />}
                    {selectedSection === "languages" && <Languages blogger={blogger} />}
                    {selectedSection === "growth" && <Growth blogger={blogger} />}
                </div>

                {isMessageModalOpen && (
                    <BlogerMessageModal blogger={blogger} onClose={handleCloseMessageModal} />
                )}

            </div>
        </div>
    );

};

export default BloggerModal;
