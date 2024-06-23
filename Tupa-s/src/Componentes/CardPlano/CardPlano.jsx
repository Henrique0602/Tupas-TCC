import React from 'react';

const CardPlano = ({ title, description, price, benefits }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-sm mb-4">{description}</p>
      <div className="text-3xl font-bold mb-4">{price}</div>
      <hr className="mb-4" />
      <ul className="list-disc list-inside">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardPlano;