import React from 'react';
import Header from '../Componentes/Header';
import CardsSlider from '../Componentes/CardsSlider';
import { FaAppleWhole, FaUserDoctor, FaKeyboard } from 'react-icons/fa6';
import { GiBrain } from 'react-icons/gi';
import Section from '../Componentes/Section';
import ServiceCard from '../Componentes/ServiceCard';
import ChatMessage from '../Componentes/ChatMessage';

function Home() {
  return (
    <div className="bg-white">
      <Header />

    
      <div className="rounded-lg flex flex-row my-16 mx-16 justify-between">
        <div className="flex flex-col">
          <h2 className="text-color_vinho font-bold text-lg py-6">Olá Fulano,</h2>
          <h1 className="text-color_vinho font-bold text-4xl text-wrap max-w-sm">Bem - Vindo!</h1>
          <p className="flex flex-wrap w-80 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo odio, ipsum repellat voluptatum est repudiandae eligendi.
          </p>
        </div>
        <CardsSlider />
      </div>


      <Section title="Nossos Serviços" linkText="Ver todos">
        <ServiceCard icon={FaAppleWhole} title="Nutrição" />
        <ServiceCard icon={GiBrain} title="Terapia" />
        <ServiceCard icon={FaUserDoctor} title="Consultas online" />
      </Section>

      
      <Section title="Nossos Profissionais" linkText="Ver todos">
        <div className="border-2 border-grey-700 mt-5 mb-10 flex flex-row rounded-3xl">
          <div className="border-2 border-grey-600 w-36 mr-10 rounded-2xl m-10">
            <img src="https://evorastudio.com.br/wp-content/uploads/2021/03/fotos-para-medicos-1.jpg" alt="Profissional" />
          </div>
          <div className="flex flex-col justify-center mr-10">
            <h3>Dr. Fulano</h3>
            <p>Função</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </Section>

      
      <div className="px-4 md:px-10 h-full w-full p-10">
        
        <div className="flex justify-between items-center">
          <h1 className="text-black font-bold text-2xl">Chat Box</h1>
          <a href="" className="text-green-600 text-sm font-medium">Ver todos</a>
        </div>

        <div className="bg-opacity-75 p-8 rounded-xl shadow-md w-auto flex flex-col justify-start">
          <ChatMessage text="Olá" />
          <ChatMessage text="Me diga seu Nome / Sua Idade / Seu Peso" />
          <ChatMessage isUser text="lorem..." avatar="/Pessoa.png" />
          <ChatMessage text="Lorem ..." />
          <ChatMessage isUser text="lorem..." avatar="/Pessoa.png" />

          <div className="p-8 rounded-lg shadow-md w-full flex justify-center items-center mt-8">
            <FaKeyboard className="text-3xl mr-3 text-color_vinho" />
            <h1 className="text-color_vinho font-bold">Digite aqui sua resposta</h1>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
