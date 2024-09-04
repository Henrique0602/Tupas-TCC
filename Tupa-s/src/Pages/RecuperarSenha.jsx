import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom"

function RecuperarSenha(){
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg shadow-md w-auto h-full flex flex-row justify-start ">

                <div className="flex-col w-96">
                    <img className="w-28 mb-9" src="public/Logo.png" alt="" />
                    <h1 className="text-color_vinho font-bold text-4xl mb-6">Recupere sua senha</h1>

                    <div className="relative mb-2">
                        <span className="absolute inset-y-0 left-3 flex items-center text-color_vinho z-10"><FaPhoneAlt /></span>
                        <input type="telefone" className="w-96 pl-10 pr-4 py-2 border rounded-full bg-white placeholder:text-color_vinho text-color_vinho focus:outline-none drop-shadow-md" placeholder="Digite seu telefone:" />
                    </div>
                    <h3 className="ml-6 text-sm text-wrap w-80 mb-10">Uma mensagem será enviada via SMS para a recuperação de senha.</h3>
                    <div className="flex flex-col items-center">
                        <Link to="/">
                        <button type="submit" className="bg-color_vinho text-colortxt_white py-2 rounded-3xl w-60 mb-2 text-center hover:bg-color_bege hover:text-color_vinho font-semibold">Enviar</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default RecuperarSenha