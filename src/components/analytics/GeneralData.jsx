import React from "react";
import "../../styles/GeneralData.css"; // додаємо стиль окремо

const GeneralData = ({ blogger }) => {
    const stats = [
        { label: "Followers", value: blogger.followers.toLocaleString(), icon: "👥" },
        { label: "Engagement Rate", value: `${blogger.engagement}%`, icon: "📈" },
        { label: "Average Views", value: blogger.stats.averageViews.toLocaleString(), icon: "👁️" },
        { label: "Average Likes", value: blogger.stats.averageLikes.toLocaleString(), icon: "👍" },
        { label: "Average Comments", value: blogger.stats.averageComments.toLocaleString(), icon: "💬" },
        { label: "Average Saves", value: blogger.stats.averageSaves.toLocaleString(), icon: "⭐" },
        { label: "Average Shares", value: blogger.stats.averageShares.toLocaleString(), icon: "🔁" },
        { label: "Videos/Week", value: blogger.stats.averageVideosPerWeek, icon: "🎥" },
        { label: "Paid Engagement", value: `${blogger.stats.paidEngagement}%`, icon: "💰" },
        { label: "Paid Views", value: blogger.stats.paidViews.toLocaleString(), icon: "🧲" },
        { label: "Posts", value: blogger.stats.posts, icon: "📌" },
    ];

    return (
        <div className="general-data-panel">
            {stats.map((item, index) => (
                <div className="general-data-row" key={index}>
                    <span className="data-icon">{item.icon}</span>
                    <span className="data-label">{item.label}</span>
                    <span className="data-value">{item.value}</span>
                </div>
            ))}
        </div>
    );
};

export default GeneralData;
