import Header from '../Componentes/Header';
import CardsSlider from '../Componentes/CardsSlider';
import { FaAppleWhole, FaUserDoctor } from 'react-icons/fa6';
import { GiBrain } from 'react-icons/gi';
import Section from '../Componentes/Section';
import ServiceCard from '../Componentes/ServiceCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import { LiaStarSolid } from "react-icons/lia";


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
        <a href="Nutricao"><ServiceCard icon={FaAppleWhole} title="Nutrição" /></a>
        <a href="Terapia"> <ServiceCard icon={GiBrain} title="Terapia" /></a>
        <a href="Consultas"><ServiceCard icon={FaUserDoctor} title="Consultas online" /></a>
      </Section>


      <Section title="Nossos Profissionais">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          className="mb-10"
        >
          <SwiperSlide> <div className="border-2 border-grey-700 mt-5 mb-10 flex flex-row rounded-3xl">
            <div className="border-2 border-grey-600 w-40 mr-10 rounded-2xl m-12">
              <img className="rounded-2xl" src="assets/doutora1.jpg" alt="Profissional" />
            </div>
            <div className="flex flex-col justify-center mr-10">
              <h3>Dra. Ciclana</h3>
              <p>Função:</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex justify-end text-green-500 font-bold">
                <a href="Medico1">Marcar Consulta</a>
              </div>
              <div className="flex flex-row justify-end gap-2 mt-2">

                <a className="text-yellow-400 flex " href=""><LiaStarSolid /></a>
                <p>4.7</p>
              </div>

            </div>
          </div>
          </SwiperSlide>


          <SwiperSlide><div className="border-2 border-grey-700 mt-5 mb-10 flex flex-row rounded-3xl">
            <div className="border-2 border-grey-600 w-40 mr-10 rounded-2xl m-12">
              <img className="rounded-2xl" src="assets/doutora2.jpg" alt="Profissional" />
            </div>
            <div className="flex flex-col justify-center mr-10">
              <h3>Dra. Beltrana</h3>
              <p>Função:</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex justify-end text-green-500 font-bold">
                <a href="Medico2">Marcar Consulta</a>
              </div>
              <div className="flex flex-row justify-end gap-2 mt-2">

                <a className="text-yellow-400 flex " href=""><LiaStarSolid /></a>
                <p>4.7</p>
              </div>

            </div>
          </div></SwiperSlide>
          <SwiperSlide><div className="border-2 border-grey-700 mt-5 mb-10 flex flex-row rounded-3xl">
            <div className="border-2 border-grey-600 w-40 mr-10 rounded-2xl m-12">
              <img className="rounded-2xl" src="assets/doutor1.webp" alt="Profissional" />
            </div>
            <div className="flex flex-col justify-center mr-10">
              <h3>Dr. Fulano</h3>
              <p>Função:</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex justify-end text-green-500 font-bold">
                <a href="Medico3">Marcar Consulta</a>
              </div>
              <div className="flex flex-row justify-end gap-2 mt-2">

                <a className="text-yellow-400 flex " href=""><LiaStarSolid /></a>
                <p>4.7</p>
              </div>

            </div>
          </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border-2 border-grey-700 mt-5 mb-10 flex flex-row rounded-3xl">
            <div className="border-2 border-grey-600 w-40 mr-10 rounded-2xl m-12">
              <img className="rounded-2xl" src="assets/doutor2.webp" alt="Profissional" />
            </div>
            <div className="flex flex-col justify-center mr-10">
              <h3>Dr. X</h3>
              <p>Função:</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <div className="flex justify-end text-green-500 font-bold">
                <a href="Medico4">Marcar Consulta</a>
              </div>
              <div className="flex flex-row justify-end gap-2 mt-2">

                <a className="text-yellow-400 flex " href=""><LiaStarSolid /></a>
                <p>4.7</p>
              </div>

            </div>
          </div>
          </SwiperSlide>


        </Swiper>
      </Section>


      <div className='relative'>
        <a href="ChatBox">
          <img
            className="w-24 fixed bottom-0 right-8 bg-green-600 rounded-full"
            src="assets/Logo.png"
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
