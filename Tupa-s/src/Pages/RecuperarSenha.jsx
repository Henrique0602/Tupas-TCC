import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Componentes/Input'; 
import Button from '../Componentes/Button'; 
import Form from '../Componentes/Form'; 

function RecuperarSenha() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Form>
        
        <div className="flex-col w-96 items-center">
          <img src="./esqueceuSenha.png" alt="Esqueceu a Senha" className="p-12" />
          <div className="p-4">
            <h2 className="font-bold text-xl">Esqueceu a senha?</h2>
            <span className="text-wrap">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi voluptatum culpa.
            </span>
          </div>

          
          <div className="relative mb-6">
            <Input
              type="email"
              placeholder="Digite seu email"
            />
          </div>

          
          <div className="flex flex-col items-center">
            <Link to="/">
              <Button text="Enviar" />
            </Link>
          </div>

          
          <div className="flex flex-row justify-center items-center">
            <span className="text-black mr-2 text-sm">Se lembrou?</span>
            <Link to="/" className="font-semibold text-color_verde hover:underline text-sm">
              Login
            </Link>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default RecuperarSenha;
