import React, { useState } from "react";
import Bloger from "./Bloger";
import ModalForm from "./ModalForm";
import "../styles/BrandBox.css";
import brand1 from "../images/brands/brand1.jpg";
import brand2 from "../images/brands/brand2.jpg";
import brand3 from "../images/brands/brand3.jpg";
import brand4 from "../images/brands/brand4.jpg";
import brand5 from "../images/brands/brand5.jpg";
import brand6 from "../images/brands/brand6.jpg";
import brand7 from "../images/brands/brand7.jpg";
import brand8 from "../images/brands/brand8.jpg";
import brand9 from "../images/brands/brand9.jpg";
import brand10 from "../images/brands/brand10.jpg";
import brand11 from "../images/brands/brand11.jpg";
import brand12 from "../images/brands/brand12.jpg";

const BrandBox = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);

    const brands = [
        { name: "Brand 1", image: brand1 },
        { name: "Brand 2", image: brand2 },
        { name: "Brand 3", image: brand3 },
        { name: "Brand 4", image: brand4 },
        { name: "Brand 5", image: brand5 },
        { name: "Brand 6", image: brand6 },
        { name: "Brand 7", image: brand7 },
        { name: "Brand 8", image: brand8 },
        { name: "Brand 9", image: brand9 },
        { name: "Brand 10", image: brand10 },
        { name: "Brand 11", image: brand11 },
        { name: "Brand 12", image: brand12 },
    ];

    return (
        <div className="general-bloger-search-container">
            <div className="introduction-block">
                <div>
                    <h1>Top Brands</h1>
                    <p>Message the Brand</p>
                </div>
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                    <button id="filter">Filter</button>
                </div>
            </div>
            <div className="bloger-box-container">
                {brands.map((brand, index) => (
                    <div key={index} onClick={() => setSelectedBrand(brand.name)}>
                        <Bloger bloger={brand.image} />
                    </div>
                ))}
            </div>
            {selectedBrand && (
                <ModalForm
                    brandName={selectedBrand}
                    onClose={() => setSelectedBrand(null)}
                />
            )}
        </div>
    );
};

export default BrandBox;
