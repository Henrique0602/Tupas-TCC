import Header from "../Componentes/Header";
import { BsCapsule } from "react-icons/bs";
import { FaAppleWhole } from "react-icons/fa6";
import { AiFillMedicineBox } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { LuFootprints } from "react-icons/lu";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

function Consultas() {
    return (
        <>
            <div>
                <Header />
                <h1 className="text-xl md:text-2xl font-bold text-center mt-5 mb-10 text-gray-800 hover:text-green-600 transition-colors">
                    Consultas Online
                </h1>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="mb-10"
            >
                <SwiperSlide><img src="/consultas-online2-scaled.jpg" alt="Consulta Online" /></SwiperSlide>
                <SwiperSlide><img src="/nutricionista-online-consulta-celular.jpg" alt="Nutrição Online" /></SwiperSlide>
                <SwiperSlide><img src="/1-1-1-1024x683.png" alt="Consulta" /></SwiperSlide>
                <SwiperSlide><img src="/Alimentação.jpg" alt="Alimentação" /></SwiperSlide>
                <SwiperSlide><img src="/1-1-1-1024x683.png" alt="Consulta" /></SwiperSlide>
                <SwiperSlide><img src="/nutricionista-online-consulta-celular.jpg" alt="Nutrição Online" /></SwiperSlide>

            </Swiper>

            <div className="flex flex-wrap justify-center gap-5 p-5">
                <div className="flex flex-row border p-3 gap-3 border-gray-500 w-64 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <BsCapsule className="text-2xl" />
                    <p>Consultas Terapêuticas</p>
                </div>
                <div className="flex flex-row border p-3 gap-3 border-gray-500 w-64 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <FaAppleWhole className="text-2xl" />
                    <p>Consultas Nutrição</p>
                </div>
                <div className="flex flex-row border p-3 gap-3 border-gray-500 w-64 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <AiFillMedicineBox className="text-2xl" />
                    <p>Consultas Clínico Geral</p>
                </div>
                <div className="flex flex-row border p-3 gap-3 border-gray-500 w-64 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <LuFootprints className="text-2xl" />
                    <p>Consultas Ortopedistas</p>
                </div>
                <div className="flex flex-row border p-3 gap-3 border-gray-500 w-64 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <CgGym className="text-2xl" />
                    <p>Consultas Personal Trainer</p>
                </div>
                <div className="flex flex-row border p-3 gap-3 border-gray-500 w-64 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <AiFillMedicineBox className="text-2xl" />
                    <p>Consultas Dermatologista</p>
                </div>
                <div className="flex flex-row border p-3 gap-3 border-gray-500 w-64 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <AiFillMedicineBox className="text-2xl" />
                    <p>Consultas Urologista</p>
                </div>
            </div>
        </>
    );
}

export default Consultas;
