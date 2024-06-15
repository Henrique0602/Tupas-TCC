import { FaRegEnvelope } from "react-icons/fa";
import { FaNeuter } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom"

function Cadastrar() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-Fundo bg-cover">
            <div className="bg-color_bg opacity-75 p-8 rounded-lg shadow-md w-8/12 h-full flex flex-row justify-start ">

                <div className="flex-col">
                    <img className="w-28 mb-9" src="public/Logo.png" alt="" />

                    <h1 className="text-3xl text-color_vinho font-bold mb-6">Cadastre-se</h1>

                    <div className="flex flex-col items-center">

                        <form className="flex flex-col w-96 mb-6">
                            <div className="relative mb-5">
                                <span className="absolute inset-y-0 left-3 flex items-center text-color_vinho">
                                    <FaFileSignature />
                                </span>
                                <input type="nome" className="w-96 pl-10 pr-4 py-2 border rounded-full bg-white placeholder:text-color_vinho text-color_vinho focus:outline-none" placeholder="Digite seu nome completo:" />
                            </div>

                            <div className="relative mb-5">
                                <span className="absolute inset-y-0 left-3 flex items-center text-color_vinho">
                                    <FaRegEnvelope />
                                </span>
                                <input type="email" className="w-96 pl-10 pr-4 py-2 border rounded-full bg-white placeholder:text-color_vinho text-color_vinho focus:outline-none" placeholder="Digite seu e-mail:" />
                            </div>

                            <div className="relative mb-5">
                                <span className="absolute inset-y-0 left-3 flex items-center text-color_vinho">
                                    <FaNeuter />
                                </span>
                                <input type="password" className="w-96 pl-10 pr-4 py-2 border rounded-full bg-white placeholder:text-color_vinho text-color_vinho focus:outline-none" placeholder="Crie uma senha:" />
                            </div>

                            <div className="relative mb-5">
                                <span className="absolute inset-y-0 left-3 flex items-center text-color_vinho">
                                    <FaPhoneAlt />
                                </span>
                                <input type="telefone" className="w-96 pl-10 pr-4 py-2 border rounded-full bg-white placeholder:text-color_vinho text-color_vinho focus:outline-none" placeholder="Digite seu telefone:" />
                            </div>

                            <div className="relative mb-5">
                                <span className="absolute inset-y-0 left-3 flex items-center text-color_vinho">
                                    <FaHotel />
                                </span>
                                <input type="cep" className="w-96 pl-10 pr-4 py-2 border rounded-full bg-white placeholder:text-color_vinho text-color_vinho focus:outline-none" placeholder="Digite seu CEP:" />
                            </div>
                        </form>

                        <div className="flex flex-col items-center">
                           
                            <span className="text-color_vinho">
                            <Link to="/" className="font-semibold text-color_vinho ml-2">
                            <button type="submit" className="bg-color_vinho text-colortxt_white py-2 rounded-3xl h-9 w-60 text-center mb-2">Cadastrar</button>
                            </Link>
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
export default Cadastrar