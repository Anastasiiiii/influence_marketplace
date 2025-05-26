import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell,
} from "recharts";
import "../../styles/Languages.css";

const Languages = ({ blogger }) => {
    const data = blogger.languages;

    return (
        <div className="languages-section">
            <h3 className="languages-title">Audience Languages</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} layout="vertical" margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
                    <XAxis type="number" domain={[0, 100]} tick={{ fill: "#ccc" }} unit="%" />
                    <YAxis type="category" dataKey="language" tick={{ fill: "#ccc" }} />
                    <Tooltip contentStyle={{ background: "#1c1c2c", borderRadius: 8, border: "none" }} />
                    <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill="#a259ff" />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Languages;
