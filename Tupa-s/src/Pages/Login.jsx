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

          <form className=" mb-2 ">
            <input type="email" className="w-full px-4 py-2 border rounded-full focus:outline-none placeholder:text-colortxt_preto bg-white mb-5" placeholder="Digite seu e-mail" />
            <input type="password" className="w-full px-4 py-2 border rounded-full focus:outline-none placeholder:text-colortxt_preto bg-white" placeholder="Digite sua senha" />
          </form>

          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-colortxt_preto">Lembrar Senha</span>
            </label>
            <a href="#" className="text-sm text-blue-800 hover:underline">Esqueceu a senha?</a>
          </div>

          <div className="flex flex-col items-center">
            <button type="submit" className="bg-color_vinho text-colortxt_white py-2 rounded-3xl h-9 w-60 text-center mb-2">Entrar</button>
            <span className="text-colortxt_preto">Sem Conta? <a href="#" className="hover:underline font-semibold text-color_vinho">Cadastrar-se!</a> </span>
          </div>
        </div>

      </div>
    </div>
  );
}
export default Login