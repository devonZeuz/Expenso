import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
} from "recharts";
import CustomTooltip from './CustomTooltip';

const CustomBarChart = ({ data, xKey = "date" }) => {
    // Normalize data to prevent chart scaling issues with large numbers
    const maxValue = Math.max(...data.map(d => d.amount || 0));
    const normalizedData = data.map(d => ({
        ...d,
        amount: maxValue > 1e6 ? Math.min(d.amount, 1e6) : d.amount
    }));

    const palette = ["#FF3200", "#06b6d4", "#8b5cf6"]; // hero + accents
    const getBarColor = (index) => palette[index % palette.length];

    return (
        <div className="mt-6">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={normalizedData}>
                    <CartesianGrid stroke="rgba(0,0,0,0.06)" vertical={false} />
                    <XAxis dataKey={xKey} tick={{ fontSize: 12, fill: "#222" }} stroke="none" />
                    <YAxis tick={{ fontSize: 12, fill: "#222" }} stroke="none" />
                    <Tooltip content={<CustomTooltip />} />

                    <Bar dataKey="amount" radius={[8, 8, 8, 8]} barSize={70}>
                        {normalizedData.map((entry, index) => (
                            <Cell key={index} fill={getBarColor(index)} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomBarChart;
