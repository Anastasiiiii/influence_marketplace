import React, { useState, useMemo } from "react";
import Compaign from "./Compaign";
import ModalWrapper from "./ModalWrapper";
import { generateBrandCampaigns } from "../functions/compaigns";
import CompaignDetails from "./CompaignDetails";

const BrandBox = () => {
    const [selectedBrand, setSelectedBrand] = useState(null);
    const [searchBrand, setSearchBrand] = useState("");


    const brands = useMemo(() => generateBrandCampaigns(), []);

    const handleSearchBrandChange = (e) => {
        setSearchBrand(e.target.value);
    };

    const filteredBrands = brands.filter((brand) =>
        brand.brandName.toLowerCase().includes(searchBrand.toLowerCase())
    );

    return (
        <div className="general-bloger-search-container">

            <div className="bloger-box-container">
                {filteredBrands.length > 0 ? (
                    filteredBrands.map((brand) => (
                        <Compaign
                            key={brand.id}
                            img={brand.brandLogo}
                            brandName={brand.brandName}
                            period={brand.postedDate}
                            title={brand.campaignTitle}
                            description={brand.description}
                            platform={brand.platform}
                            budget={brand.budget}
                            time={brand.duration}
                            applicants={brand.applicants}
                            posts={brand.posts}
                            onViewDetails={() => setSelectedBrand(brand)}
                        />
                    ))
                ) : (
                    <p>No brands with this name were found.</p>
                )}
            </div>

            {selectedBrand && (
                    <CompaignDetails
                        onClose={() => setSelectedBrand(null)}
                        brandLogo={selectedBrand.brandLogo}
                        brandName={selectedBrand.brandName}
                        campaignTitle={selectedBrand.campaignTitle}
                        platform={selectedBrand.platform}
                        budget={selectedBrand.budget}
                        duration={selectedBrand.duration}
                        deliverables={selectedBrand.deliverables}
                        fullDescription={selectedBrand.fullDescription}
                        requirements={selectedBrand.requirements}
                        deliverablesList={selectedBrand.deliverablesList}
                        postedDate={selectedBrand.postedDate}
                        applicants={selectedBrand.applicants}
                        status={selectedBrand.status}
                    />
            )}
        </div>
    );
};

export default BrandBox;
