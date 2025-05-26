import React, { useState } from "react";
import "../styles/CompaignDetails.css";
import "../styles/Formulas.css";
import closeIcon from "../images/close.png";
import ModalForm from "./ModalForm";

const CompaignDetails = ({
    brandLogo,
    brandName,
    campaignTitle,
    platform,
    budget,
    duration,
    deliverables,
    fullDescription,
    requirements,
    deliverablesList,
    postedDate,
    applicants,
    status,
    onClose
}) => {

    const [selectedBrand, setSelectedBrand] = useState(null);

    return (
        <div className="compaign-details-container" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={closeIcon} className="close-icon" alt="close" onClick={onClose} />

                <h2 className="details-heading">Campaign Details</h2>

                <div className="brand-section">
                    <img src={brandLogo} alt={brandName} className="brand-logo" />
                    <div className="brand-meta">
                        <h3>{campaignTitle}</h3>
                        <p className="campaign-title">{brandName}</p>
                        <div className="meta-tags">
                            <span className="tag purple">{platform}</span>
                            <span className="tag green">{budget} Budget</span>
                            <span className="tag blue">{duration} Duration</span>
                            <span className="tag orange">{deliverables}</span>
                        </div>
                    </div>
                </div>

                <div className="campaign-description">
                    <h4>About This Campaign</h4>
                    <p>{fullDescription}</p>
                </div>

                <div className="details-row">
                    <div className="requirements-box">
                        <h4>Requirements</h4>
                        <div className="requirements-grid">
                            <div>
                                <p className="label">Minimum Followers</p>
                                <p className="value">{requirements.minFollowers.toLocaleString()}+</p>
                            </div>
                            <div>
                                <p className="label">Minimum Engagement</p>
                                <p className="value">{requirements.minEngagement}%+</p>
                            </div>
                            <div>
                                <p className="label">Target Countries</p>
                                <p className="value">{requirements.countries.join(", ")}</p>
                            </div>
                            <div>
                                <p className="label">Age Range</p>
                                <p className="value">{requirements.age}</p>
                            </div>
                            <div>
                                <p className="label">Category</p>
                                <p className="value">{requirements.category || "—"}</p>
                            </div>
                        </div>
                    </div>

                    <div className="what-we-need">
                        <h4>What We Need</h4>
                        <ul>
                            {deliverablesList.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="footer-stats">
                    <div>
                        <p className="label">Posted</p>
                        <p className="value">{postedDate}</p>
                    </div>
                    <div>
                        <p className="label">Applicants</p>
                        <p className="value">{applicants}</p>
                    </div>
                    <div>
                        <p className="label">Status</p>
                        <p className={`value ${status === "Active" ? "active" : "inactive"}`}>{status}</p>
                    </div>
                </div>

                <div className="action-buttons">
                    <button
                        className="apply-btn"
                        onClick={() => setSelectedBrand({ name: brandName, image: brandLogo })}
                    >
                        ✈ Apply Now
                    </button>
                </div>

                {selectedBrand && (
                    <ModalForm
                        brandName={selectedBrand.name}
                        brandImage={selectedBrand.image}
                        onClose={() => setSelectedBrand(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default CompaignDetails;
