import { FaRegEnvelope } from "react-icons/fa";
import { FaNeuter } from "react-icons/fa";
import {Link} from "react-router-dom"


function Login() {
  return (

    <div className="flex justify-center items-center min-h-screen bg-Fundo bg-cover">
      <div className="bg-color_bg opacity-75 p-8 rounded-lg shadow-md w-8/12 h-full flex flex-row justify-start ">

        <div className="flex-col">
          <img className="w-28 mb-9" src="public/Logo.png" alt="" />

          <div className=" mb-16">
            <h2 className="text-xl">Bem - vindo ao</h2>
            <h1 className="text-color_vinho font-bold text-4xl ">Tupã's</h1>
          </div>

          <form className="mb-2">
            <div className="relative mb-5">
              <span className="absolute inset-y-0 left-3 flex items-center text-color_vinho">
                <FaRegEnvelope />
              </span>
              <input type="email"className="w-96 pl-10 pr-4 py-2 border rounded-full bg-white placeholder:text-color_vinho text-color_vinho focus:outline-none" placeholder="Digite seu e-mail"/>
            </div>

            <div className="relative mb-5">
              <span className="absolute inset-y-0 left-3 flex items-center text-color_vinho">
              <FaNeuter />
              </span>
              <input type="password"className="w-full pl-10 pr-4 py-2 border rounded-full bg-white placeholder:text-color_vinho text-color_vinho focus:outline-none" placeholder="Digite sua Senha"/>
            </div>
          </form>

          <div className="flex items-center justify-between mb-8 mr-2 ml-2">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox mr-2"/>
              <span className=" text-color_vinho">Lembrar Senha</span>
            </label>
            <a href="#" className="text-sm text-color_vinho no-underline">Esqueceu a senha?</a>
          </div>

          <div className="flex flex-col items-center">
            <button type="submit" className="bg-color_vinho text-colortxt_white py-2 rounded-3xl h-9 w-60 text-center mb-2">Entrar</button>
            <span className="text-color_vinho">Sem Conta? 
              <Link to="Cadastrar" className="font-semibold text-color_vinho">
                Cadastrar-se!
              </Link>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Login