import React, { useState } from 'react';
import { FaRegEnvelope, FaNeuter, FaFileSignature, FaHotel, FaPhoneAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Componentes/Input';
import Button from '../Componentes/Button';
import Form from '../Componentes/Form';

function Cadastrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const navigate = useNavigate();

  const handleCadastro = async () => {
    if (!nome || !email || !senha || !telefone || !cep) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          nome,       
          email,      
          senha,      
          telefone,   
          cep         
        })
      });

      const result = await response.json();
      if (result.message) {
        alert(result.message);
      } else {
        alert("Cadastro realizado com sucesso!");
        navigate("/"); 
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      alert("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

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
              value={nome}
              onChange={(e) => setNome(e.target.value)} 
            />
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              icon={FaRegEnvelope}
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <Input
              type="password"
              placeholder="Crie uma senha"
              icon={FaNeuter}
              value={senha}
              onChange={(e) => setSenha(e.target.value)} 
            />
            <Input
              type="number"
              placeholder="Digite seu telefone"
              icon={FaPhoneAlt}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)} 
            />
            <Input
              type="number"
              placeholder="Digite seu CEP"
              icon={FaHotel}
              value={cep}
              onChange={(e) => setCep(e.target.value)} 
            />
          </form>

          <div className="flex flex-col items-center">
            <Button text="Cadastrar" onClick={handleCadastro} />
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
