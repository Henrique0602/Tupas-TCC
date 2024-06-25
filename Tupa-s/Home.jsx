import { Link } from "react-router-dom"
import Header from "../Componentes/Header/Header";
import Planos from "../Componentes/Planos/Planos";


function Home() {
    return (
        <div className="min-h-screen bg-Fundo bg-cover">
            <Header />
            <div className="p-20 w-full h-full flex flex-row bg-color_bg bg-opacity-75 ">
                <div className="flex-col text-color_vinho ml-12 mt-6 mb-10">
                    <h2 className=" font-bold text-2xl mb-10">Home</h2>
                    <div className="flex-col ">
                        <h1 className="text-2xl font-semibold text-wrap w-80 mb-2">
                            Seu guia para o sucesso físico e mental.
                        </h1>
                        <p className="text-wrap w-80 text-sm">
                            Lorem ipsum dolor sit amet consectetur. Id luctus a a sed lectus
                            aenean aenean tortor. Ultrices felis sed donec est urna aliquet.
                        </p>
                    </div>
                </div>
            </div>

            <h1 className="text-4xl text-color text-color_bg font-bold px-20 mt-24 ml-10 mb-32 text-center">
                Serviços:
            </h1>
            <div className=" flex flex-col md:flex-row gap-20 p-10 justify-center items-center ">
                <div className="flex flex-col items-center">
                    <h1 className="text-colortxt_white font-semibold mb-2">
                        Estética Física
                    </h1>
                    <img className="w-56 rounded-xl mt-5 hover:scale-110 transition-transform duration-300 ease-in-out" src="/Public/Físico.jpg" />
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-colortxt_white font-semibold mb-2">
                        Saúde Corporal
                    </h1>
                    <img className="w-56 rounded-xl mt-5 hover:scale-110 transition-transform duration-300 ease-in-out" src="/Public/SaudeCorporal.jpg" />
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-colortxt_white font-semibold mb-2">
                        Saúde Mental
                    </h1>
                    <img className="w-56 rounded-xl mt-5 hover:scale-110 transition-transform duration-300 ease-in-out" src="/Public/Mente.jpg" />
                </div>
            </div>

            <div className="w-full flex flex-row justify-center mt-28 mb-24">
                <button
                    type="submit"
                    className="bg-color_bg text-color text-color_vinho py-2 rounded-xl w-60 mb-2 text-center font-semibold">
                    Saber Mais
                </button>
            </div>

            <Planos />

            <div className="px-4 md:px-10">
                <h1 className="text-4xl font-bold text-color_bg p-10 ml-4 text-center">Consultas Online:</h1>
                <div className="flex flex-col md:flex-row justify-between pl-72 pr-72">
                    <div className="flex flex-col w-full md:w-2/4">
                        <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start mb-5 " >
                            <img className="w-32 rounded-full object-cover md:ml-4 mb-4 md:mb-0" src="/Public/Ellipse 56.png" alt="" />
                            <div className="flex flex-col ml-4">
                                <h1 className="font-bold p-2 text-xl">Dr.Fulano Ciclano</h1>
                                <p className="p-2 ">XX Anos</p>
                                <p className="p-2 "> Nutricionista</p>
                            </div>

                        </div>

                        <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start mb-5 ">

                            <img className="w-32  rounded-full object-cover md:ml-4 mb-4 md:mb-0" src="/Public/Ellipse 56 (1).png" alt="" />
                            <div className="flex flex-col ml-4"> 
                                <h1 className="font-bold p-2 text-xl">Fulano Ciclano</h1>
                                <p className="p-2 ">XX Anos</p>
                                <p className="p-2 "> Personal</p>
                            </div>

                        </div>


                        <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg shadow-md flex flex-col md:flex-row items-center md:items-start mb-5 ">

                            <img className="w-32  rounded-full object-cover md:ml-4 mb-4 md:mb-0" src="/Public/Ellipse 57.png" alt="" />
                            <div className="flex flex-col ml-4">
                                <h1 className="font-bold p-2 text-xl">Dra. Fulana Ciclana</h1>
                                <p className="p-2 ">XX Anos</p>
                                <p className="p-2 "> Psicóloga</p>
                            </div>

                        </div>

                    </div>


                    <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg w-80 h-full mt-10" >
                        <p className="text-2xl font-thin">
                        Lorem ipsum dolor sit amet consectetur. In facilisi sodales tellus id quam aliquet volutpat. Felis orci mattis sit lectus feugiat. Et duis faucibus proin vitae lectus viverra gravida. Ut vel augue convallis ornare dolor suspendisse massa
                        Lorem ipsum dolor sit amet consectetur. In facilisi sodales tellus id quam aliquet volutpat. Felis orci mattis .
                        </p>
                    </div>
                </div>
            </div>
        </div>




    )
}
export default Home