/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaRegEnvelope, FaNeuter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import InputField from '../Componentes/Input';
import Checkbox from '../Componentes/CheckBox';
import Button from '../Componentes/Button';

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("http://localhost:8000/api/usuarios/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        senha
      })
    });

    const result = await response.json();
    if (result.message === "Login bem-sucedido.") {
      alert("Login bem-sucedido");
      navigate("/home"); // Redirecionar para a página Home
    } else {
      alert(result.message);
    }
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              type="password"
              placeholder="Digite sua senha"
              icon={FaNeuter}
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </form>

          <div className="flex items-center justify-between mb-8 mr-2 ml-2">
            <Checkbox label="Lembrar Senha" />
            <Link to="RecuperarSenha" className="text-sm text-black hover:underline">
              Esqueceu a senha?
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Button text="Entrar" onClick={handleLogin} />
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
