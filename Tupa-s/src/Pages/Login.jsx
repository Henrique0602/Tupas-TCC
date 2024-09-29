import React from 'react';
import { FaRegEnvelope, FaNeuter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import InputField from '../Componentes/Input';
import Checkbox from '../Componentes/CheckBox';
import Button from '../Componentes/Button';

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-color_bg bg-opacity-75 p-8 rounded-lg shadow-md w-auto flex flex-row justify-start">

        <div className="flex-col">
          
          <img className="w-28 mb-4 mt-9 ml-6" src="./Logo.png" alt="Logo" />
          <div className="mb-8 ml-4">
            <h2 className="text-xl">Bem-vindo ao</h2>
            <h1 className="text-black font-bold text-4xl">Tupã's</h1>
          </div>

          
          <form className="mb-2">
            <InputField 
              type="email" 
              placeholder="Digite seu e-mail" 
              icon={FaRegEnvelope} 
            />
            <InputField 
              type="password" 
              placeholder="Digite sua senha" 
              icon={FaNeuter} 
            />
          </form>

          
          <div className="flex items-center justify-between mb-8 mr-2 ml-2">
            <Checkbox label="Lembrar Senha" />
            <Link to="RecuperarSenha" className="text-sm text-black hover:underline">
              Esqueceu a senha?
            </Link>
          </div>

          
          <div className="flex flex-col items-center">
            <Link to="Home">
              <Button text="Entrar" />
            </Link>
            <div className="flex flex-row">
              <span className="text-black mr-2 text-sm">Sem Conta?</span>
              <Link to="Cadastrar" className="font-semibold text-color_verde hover:underline text-sm">
                Cadastrar-se
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;