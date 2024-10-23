import Header from '../Componentes/Header';
import CardsSlider from '../Componentes/CardsSlider';
import { FaAppleWhole, FaUserDoctor } from 'react-icons/fa6';
import { GiBrain } from 'react-icons/gi';
import Section from '../Componentes/Section';
import ServiceCard from '../Componentes/ServiceCard';


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


      <Section title="Nossos Serviços" >
        <ServiceCard icon={FaAppleWhole} title="Nutrição" />
        <ServiceCard icon={GiBrain} title="Terapia" />
        <a href="Consultas"><ServiceCard icon={FaUserDoctor} title="Consultas online" /></a>
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


      <div className='relative'>
        <a href="ChatBox">
          <img
            className="w-24 fixed bottom-0 right-8 bg-green-600 rounded-full"
            src="/public/Logo.png"
            alt="ChatBox"
          />
        </a>

        <div className="fixed bottom-16 right-2 text-white bg-green-800 rounded-lg px-4 py-2 text-xs">
          <span className="block"> ChatBot!</span>
          <div className="absolute bottom-[-5px] right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-green-800"></div>
        </div>
      </div>


    </div>
  );
}

export default Home;
