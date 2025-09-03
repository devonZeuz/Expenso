import React from 'react'
import {
    PieChart,
    Pie,
    Cell,
    ResponsiveContainer,
    Tooltip,
    Legend,
} from 'recharts';
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const CustomPieChart = ({
    data,
    label,
    totalAmount,
    colors,
    showTextAnchor,
}) => {
  return <ResponsiveContainer width="100%" height={350}>
    <PieChart>
        <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="45%"
            outerRadius={100}
            innerRadius={70}
            paddingAngle={4}
            cornerRadius={16}
            labelLine={false}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
            </Pie>
            <Tooltip 
                content={<CustomTooltip />}
                cursor={false}
                isAnimationActive={false}
            />
            <Legend content={CustomLegend} />

            {showTextAnchor && (
                <>
                    <text
                        x="50%"
                        y="45%"
                        dy={-15}
                        textAnchor="middle"
                        fill="#666"
                        fontSize="12px"
                    >
                        {label}
                    </text>
                    <text
                        x="50%"
                        y="45%"
                        dy={8}
                        textAnchor="middle"
                        fill="#333"
                        fontSize="18px"
                        fontWeight="semi-bold"
                        >
                            {totalAmount}
                        </text>
                </>
            )}
    </PieChart>
  </ResponsiveContainer>
}

export default CustomPieChart