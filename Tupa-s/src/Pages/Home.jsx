import Header from "../Componentes/Header/Header";
import CardsSlider from "../Componentes/CardsSlider/CardsSlider";
import { FaAppleWhole } from "react-icons/fa6";
import { GiBrain } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { FaKeyboard } from "react-icons/fa";

function Home() {
    return (
        <>
            <div className="bg-white">

                <Header />

                <div className=" rounded-lg flex flex-row my-16 mx-16 justify-between ">
                    <div className="flex flex-col ">
                        <h2 className="text-color_vinho font-bold text-lg py-6">Olá Fulano,</h2>
                        <h1 className="text-color_vinho font-bold text-4xl text-wrap max-w-sm ">Bem - Vindo!</h1>
                        <p className="flex flex-wrap w-80 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo odio, ipsum repellat voluptatum est repudiandae eligendi. Nihil maxime delectus molestiae cumque, quasi itaque, earum necessitatibus animi atque laudantium unde.</p>


                    </div>
                    <CardsSlider />
                </div>



                <div className="rounded-lg flex flex-col my-16 mx-8 md:mx-16">
                <div className="flex justify-between items-center">
                        <h1 className="text-black font-bold text-2xl">Nossos Serviços</h1>
                        <a href="#" className="text-green-600 text-sm font-medium">Ver todos</a>
                    </div>

                    <div className="flex flex-row gap-8 justify-center mt-10">
                        <div className="border-2 border-gray-200 w-32 h-32 rounded-lg flex flex-col items-center justify-center shadow-sm">
                            <FaAppleWhole className="text-green-600 text-4xl" />
                            <p className="mt-2 text-sm font-medium">Nutrição</p>
                        </div>

                        <div className="border-2 border-gray-200 w-32 h-32 rounded-lg flex flex-col items-center justify-center shadow-sm">
                            <GiBrain className="text-green-600 text-4xl" />
                            <p className="mt-2 text-sm font-medium">Terapia</p>
                        </div>

                        <div className="border-2 border-gray-200 w-32 h-32 rounded-lg flex flex-col items-center justify-center shadow-sm">
                            <FaUserDoctor className="text-green-600 text-4xl" />
                            <p className="mt-2 text-sm font-medium">Consultas online</p>
                        </div>
                    </div>
                </div>




                <div className=" flex flex-col my-16 mx-16 justify-center ">

                    <div className="flex justify-between items-center">
                        <h1 className="text-black font-bold text-2xl">Nossos Profissionais</h1>
                        <a href="#" className="text-green-600 text-sm font-medium">Ver todos</a>
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

                <div className=" flex flex-col my-16 mx-16 justify-center ">
                    <div className="flex justify-between items-center">
                        <h1 className="text-black font-bold text-2xl">Marketing Place</h1>
                        <a href="#" className="text-green-600 text-sm font-medium">Ver todos</a>
                    </div>
                    <div className=" flex flex-row justify-center">
                        <div className="border-2 border-grey-700 mt-5 mb-10 flex flex-row rounded-3xl ">
                            <div className="border-2 border-grey-600 w-36 mr-10 rounded-2xl m-10 ">
                                <img src="https://www.gsuplementos.com.br/upload/produto/imagem/top-whey-protein-concentrado-1kg-growth-supplements-19.webp" alt="" />
                            </div>

                            <div className="flex flex-col justify-center mr-10">
                                <h3>Whey</h3>
                                <p>R$190</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>

                    <div className=" flex flex-row justify-center">
                        <div className="border-2 border-grey-700 mt-5 mb-10 flex flex-row rounded-3xl ">
                            <div className="border-2 border-grey-600 w-36 mr-10 rounded-2xl m-10 ">
                                <img src="https://www.gsuplementos.com.br/upload/produto/imagem/top-whey-protein-concentrado-1kg-growth-supplements-19.webp" alt="" />
                            </div>

                            <div className="flex flex-col justify-center mr-10">
                                <h3>Whey</h3>
                                <p>R$190</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="px-4 md:px-10 h-full w-full p-10    ">
                <div className="flex justify-between items-center">
                        <h1 className="text-black font-bold text-2xl">Chat Box</h1>
                        <a href="#" className="text-green-600 text-sm font-medium">Ver todos</a>
                    </div>
                    <div className=" bg-opacity-75 p-8 rounded-xl shadow-md w-auto flex flex-col justify-start">
                        <img className="w-20" src="/Logo.png" alt="" />
                        <div className="ml-10  p-8 rounded-lg shadow-md h-16 w-96 flex items-center mt-5 mb-4">
                            <h1>Olá</h1>
                        </div>
                        <div className="ml-10  p-8 rounded-lg shadow-md h-16 w-96 flex items-center  mb-4">
                            <h1>Me diga seu Nome / Sua Idade / Seu Peso</h1>
                        </div>

                        <div className="flex justify-end ">
                            <div className="mr-10  p-8 rounded-lg shadow-md h-16 w-96 flex items-center">
                                <h1>lorem...</h1>
                            </div>
                            <img className="w-18 h-15 " src="/Pessoa.png" alt="" />
                        </div>

                        <img className="w-20" src="/Logo.png" alt="" />
                        <div className="ml-10  p-8 rounded-lg shadow-md h-16 w-96 flex items-center mt-4">
                            <h1>Lorem ...</h1>
                        </div>

                        <div className="flex justify-end ">
                            <div className="mr-10  p-8 rounded-lg shadow-md h-16 w-96 flex items-center">
                                <h1>lorem...</h1>
                            </div>
                            <img className="w-18 h-15 " src="/Pessoa.png" alt="" />
                        </div>

                        <div className=" p-8 rounded-lg shadow-md w-full flex justify-center items-center mt-8">
                            <FaKeyboard className="text-3xl mr-3 text-color_vinho" />
                            <h1 className="text-color_vinho font-bold">Digite aqui sua resposta</h1>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Home
