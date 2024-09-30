import React from 'react';

function ServiceCard({ icon: Icon, title }) {
  return (
    <div className="border-2 border-gray-200 w-32 h-32 rounded-lg flex flex-col items-center justify-center shadow-sm">
      <Icon className="text-green-600 text-4xl" />
      <p className="mt-2 text-sm font-medium">{title}</p>
    </div>
  );
}

export default ServiceCard;