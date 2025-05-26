import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../../styles/Growth.css"; 

const Growth = ({ blogger }) => {
    const generateMonthlyFollowers = (start, end) => {
        const allMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const currentMonthIndex = new Date().getMonth();
        const months = [
            ...allMonths.slice(currentMonthIndex - 11 < 0 ? 12 + (currentMonthIndex - 11) : currentMonthIndex - 11),
            ...allMonths.slice(0, currentMonthIndex + 1)
        ].slice(-12);

        const totalDiff = end - start;
        const avgMonthlyChange = totalDiff / 11;
        let data = [];
        let current = start;

        for (let i = 0; i < 12; i++) {
            if (i === 11) {
                current = end;
            } else {
                const noise = Math.random() * 1000 - 500;
                current += avgMonthlyChange + noise;
            }

            data.push({
                month: months[i],
                followers: Math.round(current)
            });
        }

        return data;
    };

    const data = generateMonthlyFollowers(blogger.startFollowers, blogger.followers);

    return (
        <div className="growth-section">
            <div className="growth-title">Monthly Follower Growth</div>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="followers" stroke="#a259ff" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Growth;
