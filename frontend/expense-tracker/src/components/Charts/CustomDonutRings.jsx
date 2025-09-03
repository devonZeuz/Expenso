import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

// Renders multiple concentric donut rings with rounded ends
// props: rings: [{ name, value, color }], centerLabel, centerSub
const CustomDonutRings = ({ rings = [], centerLabel = '', centerSub = '' }) => {
  const max = Math.max(1, ...rings.map(r => r.value || 0))

  // Build data as single slice + remainder for each ring to mimic progress with rounded caps
  const buildRingData = (value) => {
    const percent = Math.min(100, Math.round((value / max) * 100))
    return [
      { name: 'value', value: percent },
      { name: 'rest', value: 100 - percent }
    ]
  }

  const baseInner = 60
  const ringThickness = 12
  const gap = 5

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={320}>
        <PieChart>
          {rings.map((ring, idx) => {
            const inner = baseInner + idx * (ringThickness + gap)
            const outer = inner + ringThickness
            const data = buildRingData(ring.value)
            return (
              <Pie
                key={ring.name}
                data={data}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
                innerRadius={inner}
                outerRadius={outer}
                paddingAngle={2}
                cornerRadius={outer}
                stroke="none"
                isAnimationActive={false}
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={i === 0 ? ring.color : 'rgba(0,0,0,0.08)'} />
                ))}
              </Pie>
            )
          })}
        </PieChart>
      </ResponsiveContainer>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="flex flex-col items-center justify-center w-36 h-36 rounded-full bg-white/70 backdrop-blur-xl border border-white/60">
          <span className="text-xl font-semibold text-black">{centerLabel}</span>
          {!!centerSub && <span className="text-sm text-black/70">{centerSub}</span>}
        </div>
      </div>
    </div>
  )
}

export default CustomDonutRings


