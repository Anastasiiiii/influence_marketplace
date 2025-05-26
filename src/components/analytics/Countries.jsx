import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";
import "../../styles/Countries.css";

const Countries = ({ blogger }) => {
    const data = blogger.countryDistribution;

    return (
        <div className="countries-section">
            <h3 className="countries-title">Top Countries</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
                    <XAxis type="number" tick={{ fill: "#ccc" }} unit="%" domain={[0, 100]} />
                    <YAxis dataKey="country" type="category" tick={{ fill: "#ccc" }} />
                    <Tooltip contentStyle={{ background: "#1c1c2c", borderRadius: 8 }} />
                    <Bar dataKey="value" fill="#a259ff" radius={[0, 6, 6, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Countries;
