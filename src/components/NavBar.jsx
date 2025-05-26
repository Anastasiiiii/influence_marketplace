import React, { use, useState } from "react";
import { useLocation } from "react-router-dom";
import PriceModal from "./PriceModal";
import ServiceModal from "./ServiceModal";

const NavBar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);
    const [isInfluencerModalOpen, setIsInfluencerModalOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    let myPagePath = "/";
    if (currentPath.startsWith("/business")) {
        myPagePath = "/brandPage";
    } else if (currentPath.startsWith("/creator")) {
        myPagePath = "/personalPage";
    }

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    const toggleBusinessService = () => {
        setIsBusinessModalOpen(!isBusinessModalOpen);
    }

    const toogleInfluencerService = () => {
        setIsInfluencerModalOpen(!isInfluencerModalOpen);
    }

    const serviceModalContent = [
        {
            title: "For Influencers",
            services: ["Search and apply for campaigns", "Create a verified portfolio", "Send direct proposals to brands", "Detailed channel analytics", "Multiple payment methods", "Deal protection and guarantees", "Portfolio of successful cases"]
        },
        {
            title: "For Brands",
            services: ["Showcase with advanced filters", "Mass proposal distribution", "Ready-to-use communication templates", "Automated briefs", "Quartile ROI analytics", "Influencer list management", "API integration"]
        }
    ]

    return (
        <div className="nav-container">
            <h2 className="logo"><a href="/">Findluence</a></h2>
            <nav className="nav-links">
                <a href={myPagePath}>My Page</a>
                <a href="#" onClick={toggleModal}>Price</a>
                <a href="#" onClick={toggleBusinessService}>For brands</a>
                <a href="#" onClick={toogleInfluencerService}>For influencers</a>
            </nav>

            {isModalOpen && (
                <PriceModal isOpen={isModalOpen} onClose={toggleModal} />
            )}

            {isBusinessModalOpen && (
                <ServiceModal isOpen={isBusinessModalOpen} onClose={toggleBusinessService} title={serviceModalContent[1].title} services={serviceModalContent[1].services} />
            )}

            {isInfluencerModalOpen && (
                <ServiceModal isOpen={isInfluencerModalOpen} onClose={toogleInfluencerService} title={serviceModalContent[0].title} services={serviceModalContent[0].services} />
            )}
        </div>
    );
};

export default NavBar;
