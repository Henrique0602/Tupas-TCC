import { Link } from "react-router-dom"

function RecuperarSenha(){
    return(
        <div className="flex justify-center items-center min-h-screen">
            <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg shadow-md w-auto h-full flex flex-row ">

                <div className="flex-col w-96 items-center">
                    <img src="./esqueceuSenha.png" alt="" className="p-12"/>

                    <div className="p-4">
                        <h2 className=" font-bold text-xl">Esqueceu a senha?</h2>
                        <span className="text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi voluptatum culpa.</span>
                    </div>
                    
                    <div className="relative mb-6">
                        <input type="email" className="w-96 pl-10 pr-4 py-2  border rounded-full bg-white placeholder:text-colortxt_preto text-colortxt_preto focus:outline-none drop-shadow-md" placeholder="Digite seu email"/>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <Link to="/">
                        <button type="submit" className="bg-color_verde text-colortxt_white py-2 rounded-3xl w-60 mb-2 text-center font-semibold">Enviar</button>
                        </Link>
                    </div>

                    <div className="flex flex-row justify-center items-center">
                        <span className=" text-black mr-2 text-sm">Se lembrou?</span>
                        <Link to="/" className="font-semibold  text-color_verde hover:underline text-sm">Login</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default RecuperarSenha