import Header from "../Componentes/Header/Header";
import CardsSlider from "../Componentes/CardsSlider/CardsSlider";
import { CiSearch } from "react-icons/ci";
import { FaAppleWhole } from "react-icons/fa6";
import { CgGym } from "react-icons/cg";
import { GiBrain } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";

function Home() {
    return (
        <>
            <div className="">

                <Header />

                <div className=" flex justify-end mr-16">

                    <div className="relative w-2/12 mt-10">
                        <input className="rounded-xl w-full h-11 pl-10 pr-4 focus:outline-none bg-transparent border-2 border-green-600" type="text" placeholder="Buscar" />
                        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-600" size="20px" />
                    </div>

                </div>


                <div className=" rounded-lg flex flex-col my-16 mx-16 justify-between ">
                    <div className="flex flex-col ">
                        <h2 className="text-color_vinho font-bold text-lg py-6">Olá Fulano,</h2>
                        <h1 className="text-color_vinho font-bold text-4xl text-wrap max-w-sm ">Bem - Vindo!</h1>
                    </div>
                    <CardsSlider />
                </div>



                <div className=" rounded-lg flex flex-col my-16 mx-16 justify-start ">
                    <div className="flex flex-row gap-12 items-center">
                        <h1 className="text-color_vinho font-bold text-lg">Nossos Serviços</h1>
                        <button className="text-color_verde">Ver todos</button>
                    </div>

                    <div className="flex flex-row gap-52 mt-10 justify-center">
                        <div>
                            <div className="border-2 border-grey-600w-22 h-16 p-5 rounded-lg flex items-center justify-center">
                                <FaAppleWhole className="text-green-600 text-5xl " />
                            </div>

                            <div className="flex justify-center">
                                <p>Nutrição</p>
                            </div>
                        </div>




                        <div>
                            <div className="border-2 border-grey-600 w-22 h-16 p-5 rounded-lg flex items-center justify-center ">
                                <CgGym className="text-green-600 text-5xl" />
                            </div>

                            <div className="flex justify-center">
                                <p>Treinos</p>
                            </div>
                        </div>


                        <div>
                            <div className="border-2 border-grey-600 w-22 h-16 p-5 rounded-lg flex items-center justify-center">
                                <GiBrain className="text-green-600 text-5xl" />
                            </div>

                            <div className="flex justify-center">
                                <p>Terapia</p>
                            </div>
                        </div>


                        <div>
                            <div className="border-2 border-grey-600 w-22 h-16 p-5 rounded-lg flex items-center justify-center">
                                <FaUserDoctor className="text-green-600 text-5xl" />
                            </div>

                            <div className="flex justify-center">
                                <p>Consultas on</p>
                            </div>
                        </div>

                    </div>


                </div>


                <div className=" flex flex-col my-16 mx-16 justify-center ">

                   
                        <div className="flex flex-row gap-12 items-center ">
                            <h1 className="text-color_vinho font-bold text-lg">Nossos Profissionais</h1>

                        </div>
                    <div className=" flex flex-row justify-center">
                        <div className="border-2 border-grey-700 mt-5 mb-10 flex flex-row rounded-3xl ">
                            <div className="border-2 border-grey-600 w-36 mr-10 rounded-2xl m-10 ">
                                <img src="https://evorastudio.com.br/wp-content/uploads/2021/03/fotos-para-medicos-1.jpg" alt="" />
                            </div>

                            <div className="flex flex-col justify-center mr-10">
                                <h3>Dr.Fulano</h3>
                                <p>Função</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>



                    <div className=" flex flex-row justify-center">
                        <div className="border-2 border-grey-900 mt-5 mb-10 flex flex-row rounded-3xl">
                            <div className="border-2 border-grey-600 w-36 mr-10 rounded-2xl m-10">
                                <img src="https://evorastudio.com.br/wp-content/uploads/2021/03/fotos-para-medicos-1.jpg" alt="" />
                            </div>

                            <div className="flex flex-col justify-center mr-10">
                                <h3>Dr.Fulano</h3>
                                <p>Função</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}
export default Home
