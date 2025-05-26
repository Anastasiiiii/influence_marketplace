import React, { useState, useMemo } from "react";
import Bloger from "./Bloger";
import BloggerModal from "./BlogerModal";
import FilterModal from "./FilterModal";
import "../styles/BlogerBox.css";
import { generateMockInfluencers } from "../functions/blogers";

const BlogerBox = () => {
    const [selectedBlogger, setSelectedBlogger] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [filters, setFilters] = useState(null);

    const bloggers = useMemo(() => generateMockInfluencers(), []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const convertSubscribersToNumber = (subStr) => {
        if (subStr.includes("M")) {
            return parseFloat(subStr.replace("M", "")) * 1_000_000;
        } else if (subStr.includes("K")) {
            return parseFloat(subStr.replace("K", "")) * 1_000;
        } else {
            return parseInt(subStr);
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
                        <Bloger
                            key={index}
                            influencer={blogger}
                            onCardClick={() => setSelectedBlogger(blogger)}
                            onMessageClick={() => setSelectedBlogger(blogger)}
                        />
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
