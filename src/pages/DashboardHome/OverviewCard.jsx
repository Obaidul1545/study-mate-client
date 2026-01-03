import React from 'react';

const OverviewCard = ({ title, value, icon, color }) => {
  return (
    <div>
      <div className="bg-white rounded-xl p-6 shadow flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center text-white"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <div>
          <p className="text-gray-500">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
