import React from 'react'
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

// Expects data: [{ name, amount }] and total string like "$1,234"
const CustomRadialBarChart = ({ data, totalLabel = 'Total', totalAmount = '$0', color = '#FF3200' }) => {
  // Map data to include fill color; normalize angles by index
  const chartData = data?.map((d, i) => ({ ...d, fill: color })) || []

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={320}>
        <RadialBarChart
          innerRadius={70}
          outerRadius={140}
          barSize={4}
          data={chartData}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, Math.max(1, ...chartData.map(d => d.amount))]} tick={false} />
          <RadialBar dataKey="amount" background={false} cornerRadius={10} />
          <Tooltip cursor={false} formatter={(value, name) => [value, name]} />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center justify-center w-36 h-36 rounded-full bg-white/70 backdrop-blur-xl border border-white/60">
          <span className="text-xs text-black/70">{totalLabel}</span>
          <span className="text-xl font-semibold text-black">{totalAmount}</span>
        </div>
      </div>
    </div>
  )
}

export default CustomRadialBarChart


