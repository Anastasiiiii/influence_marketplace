import React from "react";
import "../../styles/Packages.css";

const packages = [
    {
        id: 1,
        title: "1 Instagram Photo Feed Post",
        platform: "Instagram",
        price: 150,
        description: "I will take a picture using or wearing your products to post to my Instagram feed. It will remain there for the contracted period of time.",
        icon: "📸",
    },
    {
        id: 2,
        title: "1 TikTok Video",
        platform: "TikTok",
        price: 500,
        description: "I will make 1 creative TikTok using your products or service and expose it to my followers. I will take suggestions in terms of your vision.",
        icon: "🎬",
    },
    {
        id: 3,
        title: "2 TikTok Videos",
        platform: "TikTok",
        price: 750,
        description: "I will make 2 creative TikToks using your products or service and expose them to my audience.",
        icon: "🎥",
    },
    {
        id: 4,
        title: "1 UGC Video Ad",
        platform: "UGC",
        price: 250,
        description: "This includes one video in the length of your choice for a TikTok, Instagram Reel or Story.",
        icon: "📱",
    },
];

const Packages = () => {
    return (
        <div className="packages-container">
            <h2 className="packages-title">📦 Packages</h2>
            <div className="packages-grid">
                {packages.map((item) => (
                    <div key={item.id} className="package-card">
                        <div className="package-header">
                            <span className="package-icon">{item.icon}</span>
                            <h3 className="package-title">{item.title}</h3>
                            <span className="package-price">${item.price}</span>
                        </div>
                        <p className="package-description">{item.description}</p>
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Packages;
