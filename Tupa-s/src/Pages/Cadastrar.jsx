import React from 'react';
import { FaRegEnvelope, FaNeuter, FaFileSignature, FaHotel, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Input from '../Componentes/Input';
import Button from '../Componentes/Button';
import Form from '../Componentes/Form';

function Cadastrar() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Form>
        
        <img className="w-28 mb-9" src="./Logo.png" alt="Logo" />
        <h1 className="text-3xl text-color_verde font-bold mb-6">Cadastre-se</h1>

        
        <div className="flex flex-col items-center">
          <form className="flex flex-col w-96 mb-2">
            <Input
              type="text"
              placeholder="Digite seu nome completo"
              icon={FaFileSignature}
            />
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              icon={FaRegEnvelope}
            />
            <Input
              type="password"
              placeholder="Crie uma senha"
              icon={FaNeuter}
            />
            <Input
              type="number"
              placeholder="Digite seu telefone"
              icon={FaPhoneAlt}
            />
            <Input
              type="number"
              placeholder="Digite seu CEP"
              icon={FaHotel}
            />
          </form>

          
          <div className="flex flex-col items-center">
            <Link to="/">
              <Button text="Cadastrar" />
            </Link>
            <div className="flex flex-row">
              <span className="text-colortxt_preto mr-2 text-sm">Já possui uma conta?</span>
              <Link to="/" className="font-semibold text-color_verde hover:underline text-sm">
                Login
              </Link>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default Cadastrar;
