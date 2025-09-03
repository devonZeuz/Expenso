import React from 'react';

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex gap-4 items-center bg-white/35 backdrop-blur-xl p-6 rounded-2xl shadow-[0_8px_24px_rgba(31,38,135,0.12)] border border-white/40">
      <div className="text-[26px] text-black">
        {icon}
      </div>
      <div>
        <h6 className="text-sm text-black/70 mb-1">{label}</h6>
        <span className="text-[22px]">${value}</span>
      </div>
    </div>
  );
};

export default InfoCard;
