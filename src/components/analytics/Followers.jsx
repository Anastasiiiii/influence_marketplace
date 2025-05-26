import React from "react";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import "../../styles/Followers.css";

const Followers = ({ blogger }) => {
    const data = blogger.demographics;

    return (
        <div className="followers-section">
            <h3 className="followers-title">Followers by Age & Gender</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data} barGap={4}>
                    <XAxis dataKey="age" tick={{ fill: "#ccc" }} />
                    <YAxis tick={{ fill: "#ccc" }} />
                    <Tooltip contentStyle={{ background: "#1c1c2c", borderRadius: 8 }} />
                    <Legend />
                    <Bar dataKey="female" fill="#e05aad" name="Female" />
                    <Bar dataKey="male" fill="#4a9cfd" name="Male" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Followers;
