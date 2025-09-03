import React from 'react'

const CustomTooltip = ({active, payload, label}) => {
    if (active && payload && payload.length) {
        const dataPoint = payload[0].payload;
        const categoryName = dataPoint.category || dataPoint.source || dataPoint.name || dataPoint.type || 'Category';
        
        return (
            <div className="bg-white/20 backdrop-blur-xl rounded-xl p-3 border border-white/40 shadow-[0_8px_24px_rgba(31,38,135,0.15)] transform transition-all duration-200 ease-out">
                <p className="text-xs font-semibold text-black mb-1">
                    {categoryName}
                </p>
                <p className="text-sm text-black/80">
                    Amount: {" "}
                    <span className="text-sm font-medium text-black">
                        ${payload[0].value?.toLocaleString()}
                    </span>
                </p>
                {label && (
                    <p className="text-xs text-black/60 mt-1">
                        {label}
                    </p>
                )}
            </div>
        );
    }
    return null;
}

export default CustomTooltip