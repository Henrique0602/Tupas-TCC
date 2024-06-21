import { Link } from "react-router-dom"

import Header from "../Componentes/Header/Header";

function Home() {
    return (
        <div className="min-h-screen bg-Fundo bg-cover">
            <Header />
            <div className="p-20 w-full h-full flex flex-row bg-color_bg bg-opacity-75 ">
                <div className="flex-col text-color_vinho ml-12 mt-6 mb-10">

                    <h2 className=" font-bold text-2xl mb-10">Home</h2>
                    <div className="flex-col ">
                        <h1 className="text-2xl font-semibold text-wrap w-80 mb-2">Seu guia para o sucesso físico e mental.</h1>
                        <p className="text-wrap w-80 text-sm">Lorem ipsum dolor sit amet consectetur. Id luctus a a sed lectus aenean aenean tortor. Ultrices felis sed donec est urna aliquet.</p>
                    </div>

                </div>
            </div>

            <h1 className="text-2xl text-color text-color_bg font-bold px-20 mt-24 ml-10 mb-32 ">Serviços</h1>
            <div className="flex flex-row px-8 justify-around mb-6">

                <div className="flex flex-col items-center">
                    <h1 className="text-colortxt_white font-semibold mb-2">Estética Física</h1>
                    <img className="w-56" src="/Public/faustoteste.png" />
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-colortxt_white font-semibold mb-2">Saúde Corporal</h1>
                    <img className="w-56" src="/Public/faustoteste.png" />
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-colortxt_white font-semibold mb-2">Saúde Mental</h1>
                    <img className="w-56" src="/Public/faustoteste.png" />
                </div>

            </div>

            <div className="w-full flex flex-row justify-center mt-28 mb-24">
                <button type="submit" className="bg-color_bg text-color text-color_vinho py-2 rounded-xl w-60 mb-2 text-center font-semibold">Saber Mais</button>
            </div>

            <div className="card-container bg-color_bg bg-opacity-75 rounded-lg shadow-md">
                <h1 className="text-2xl text-color text-color_vinho font-bold p-20 mt-24 ml-10 mb-28 ">
                    Planos Exclusivos
                </h1>
                <div className="flex flex-row justify-center items-center px-4 mb-8 gap-8">

                    <div className="card w-52 h-80 bg-color_vinho rounded-lg shadow-sm flex flex-col justify-center items-center mb-4">
                        <h2 className="text-xl text-white font-bold mb-2">Gratuito</h2>
                        <button className="text-lg font-semibold bg-color_bg text-black  px-4 py-2 rounded-md ">Saiba Mais</button>
                    </div>

                    <div className="card w-72 h-96 bg-color_verde rounded-lg shadow-sm flex flex-col justify-center items-center mb-4">
                        <h2 className="text-xl text-white font-bold mb-2">Ametista</h2>
                        <button className="text-lg font-semibold bg-color_bg text-black px-4 py-2 rounded-md">Saiba Mais</button>
                    </div>

                    <div className="card w-52 h-80 bg-color_vinho rounded-lg shadow-sm flex flex-col justify-center items-center mb-4">
                        <h2 className="text-xl text-white font-bold mb-2">Platina</h2>
                        <button className="text-lg font-semibold bg-color_bg text-black px-4 py-2 rounded-md">Saiba Mais</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Home