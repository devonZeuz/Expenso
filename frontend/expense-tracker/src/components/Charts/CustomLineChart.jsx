import React from 'react'
import { XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } from "recharts";
import CustomTooltip from './CustomTooltip';

const CustomLineChart = ({ data }) => {
    const maxValue = Math.max(...(data || []).map(d => d.amount || 0));
    const normalizedData = (data || []).map(d => ({
        ...d,
        amount: maxValue > 1e6 ? Math.min(d.amount, 1e6) : d.amount
    }));

    const chartData = normalizedData && normalizedData.length > 0 ? normalizedData : [{ month: '', amount: 0, category: '' }];

    return (
        <div className="w-full">
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData}>
                    <defs>
                        <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#875cf5" stopOpacity={0.4} />
                            <stop offset="95%" stopColor="#875cf5" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <CartesianGrid stroke="rgba(0,0,0,0.06)" />
                    <XAxis dataKey="category" tick={{ fontSize: 12, fill: "#222" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#222" }} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                        type="monotone"
                        dataKey="amount"
                        stroke="#875cf5"
                        fill="url(#incomeGradient)"
                        strokeWidth={3}
                        dot={{ r: 3, fill: "#ab8df8" }}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default CustomLineChart;
