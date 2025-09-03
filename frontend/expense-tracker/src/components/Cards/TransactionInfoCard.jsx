import React from 'react'
import {
    LuUtensils,
    LuTrendingUp,
    LuTrendingDown,
    LuTrash2,
} from "react-icons/lu";
import { addThousandsSeparator } from '../../utils/helper';

const TransactionInfoCard = ({
    title,
    icon,
    date,
    amount,
    type,
    hideDeleteBtn,
    onDelete
}) => {

    const getAmountStyles = () => type === "income" ? "border-green-400" : "border-red-400";

  return (
    <div className="group relative flex items-center gap-4 mt-2 p-3 rounded-lg hover:bg-white/60 transition-colors">
      <div className="w-6 h-6 flex items-center justify-center text-xl text-gray-800">
        {icon ? (
          <img src={icon} alt={title} className="w-6 h-6 object-contain" />
        ) : ( 
          <LuUtensils />
        )}
      </div>
      
      <div className="flex-1 flex items-center justify-between">
        <div className="min-w-0">
            <p className="text-sm text-black font-medium truncate">{title}</p>
            <p className="text-xs text-black/60 mt-1">{date}</p>
        </div>

        <div className="flex items-center gap-2">
            {!hideDeleteBtn && (
                <button 
                    className="px-2 py-1.5 text-red-500 hover:text-white hover:bg-red-500 rounded-md transition-all duration-200 cursor-pointer border border-red-200 hover:border-red-500"
                    onClick={onDelete}
                >
                    <LuTrash2 size={16} />
                </button>
            )} 

            <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-md border ${getAmountStyles()} bg-white/50 backdrop-blur-xl`}
                >
                    <h6 className="text-xs font-medium text-black">
                        {type === "income" ? "+" : "-"} ${addThousandsSeparator(amount)}
                    </h6>
                    {type === "income" ? <LuTrendingUp size={14} className="text-green-500" /> : <LuTrendingDown size={14} className="text-red-500" />}
                </div>
        </div>
      </div>
      
    </div>
  );
};

export default TransactionInfoCard;
