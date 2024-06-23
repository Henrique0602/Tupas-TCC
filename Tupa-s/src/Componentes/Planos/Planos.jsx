import React from 'react';
import CardPlano from '../CardPlano/CardPlano';

const Planos = () => {
  const beneficiosBasico = ["Benefício 1", "Benefício 2", "Benefício 3"];
  const beneficiosPremium = ["Benefício 1", "Benefício 2", "Benefício 3", "Benefício 4", "Benefício 5"];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-6xl p-8 rounded-lg shadow-md">
        <h1 className="text-2xl text-vinho font-bold text-center mb-12 text-color_vinho">
          Planos Exclusivos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardPlano
            title="Gratuito - Homem das Cavernas"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus fuga magnam ipsum quae saepe."
            price="00,00R$"
            benefits={["Benefício 1", "Benefício 2", "Benefício 3", "Benefício 4"]}
          />
          <CardPlano
            title="Básico - Homem Moderno"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus fuga magnam ipsum quae saepe."
            price="99,99R$"
            benefits={beneficiosBasico}
          />
          <CardPlano
            title="Premium - Homem a Frente do seu Tempo"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis minus fuga magnam ipsum quae saepe."
            price="199,99R$"
            benefits={beneficiosPremium}
          />
          <CardPlano
          title="Penis Enorme"
          description="Teu pai leva penis"
          price="00,00R$"
          benefits={beneficiosPremium}
          />
        </div>
      </div>
    </div>
  );
};

export default Planos;