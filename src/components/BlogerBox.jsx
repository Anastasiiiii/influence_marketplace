import React, { useState } from "react";
import Bloger from "./Bloger";
import BloggerModal from "./BlogerModal";
import FilterModal from "./FilterModal";
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
    const [selectedBlogger, setSelectedBlogger] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filters, setFilters] = useState(null);

    const bloggers = [
        { name: "Anna Smith", image: bloger1, platforms: ["YouTube", "Instagram"], subscribers: "1.2M", rating: 4.8 },
        { name: "John Doe", image: bloger2, platforms: ["TikTok"], subscribers: "850K", rating: 4.5 },
        { name: "Emily Johnson", image: bloger3, platforms: ["Instagram", "YouTube"], subscribers: "2.3M", rating: 4.9 },
        { name: "Michael Brown", image: bloger4, platforms: ["YouTube"], subscribers: "1.1M", rating: 4.7 },
        { name: "Sophia Davis", image: bloger5, platforms: ["TikTok", "Instagram"], subscribers: "900K", rating: 4.6 },
        { name: "James Wilson", image: bloger6, platforms: ["YouTube", "TikTok"], subscribers: "1.5M", rating: 4.8 },
        { name: "Olivia Martinez", image: bloger7, platforms: ["Instagram"], subscribers: "1.8M", rating: 4.9 },
        { name: "Liam Anderson", image: bloger8, platforms: ["YouTube", "Instagram"], subscribers: "2.0M", rating: 4.7 },
        { name: "Emma Thomas", image: bloger9, platforms: ["TikTok"], subscribers: "750K", rating: 4.5 },
        { name: "Noah Taylor", image: bloger10, platforms: ["YouTube"], subscribers: "1.3M", rating: 4.6 },
        { name: "Ava Moore", image: bloger11, platforms: ["Instagram", "TikTok"], subscribers: "1.9M", rating: 4.8 },
        { name: "William Jackson", image: bloger12, platforms: ["YouTube", "Instagram"], subscribers: "2.5M", rating: 4.9 },
    ];

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const convertSubscribersToNumber = (subStr) => {
        if (subStr.includes("M")) {
            return parseFloat(subStr.replace("M", "")) * 1_000_000;
        } else if (subStr.includes("K")) {
            return parseFloat(subStr.replace("K", "")) * 1_000;
        } else {
            return parseInt(subStr); // якщо просто число
        }
    };


    const filteredBloggers = bloggers.filter((blogger) => {
        const matchesName = blogger.name.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesFilters = !filters || (
            (!filters.selectedPlatforms.length || filters.selectedPlatforms.some(p => blogger.platforms.includes(p))) &&
            (!filters.minSubscribers || convertSubscribersToNumber(blogger.subscribers) >= parseInt(filters.minSubscribers)) &&
            (!filters.minRating || blogger.rating >= parseFloat(filters.minRating))
        );

        return matchesName && matchesFilters;
    });


    return (
        <div className="general-bloger-search-container">
            <div className="introduction-block">
                <div>
                    <h1>Top Performers</h1>
                    <p>Check Out Who's Live from the Top Performers</p>
                </div>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                    <button>Search</button>
                    <button id="filter" onClick={() => setIsFilterModalOpen(true)}>Filter</button>
                </div>
            </div>

            <div className="bloger-box-container">
                {filteredBloggers.length > 0 ? (
                    filteredBloggers.map((blogger, index) => (
                        <div key={index} onClick={() => setSelectedBlogger(blogger)}>
                            <Bloger bloger={blogger.image} />
                        </div>
                    ))
                ) : (
                    <p>No such bloggers...</p>
                )}
            </div>

            {selectedBlogger && (
                <BloggerModal
                    blogger={selectedBlogger}
                    onClose={() => setSelectedBlogger(null)}
                />
            )}

            {isFilterModalOpen && (
                <FilterModal
                    onClose={() => setIsFilterModalOpen(false)}
                    onSubmit={(newFilters) =>
                        setFilters({
                            selectedPlatforms: newFilters.selectedPlatforms || [],
                            minSubscribers: newFilters.minSubscribers || "",
                            minRating: newFilters.minRating || ""
                        })
                    }
                />
            )}
        </div>
    );
};

export default BlogerBox;
