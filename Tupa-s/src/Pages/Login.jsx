function Login() {
  return (

    <div className="flex justify-center items-center min-h-screen bg-FundoLogin bg-cover">
      <div className="bg-Fundo opacity-75 p-8 rounded-lg shadow-md w-8/12 h-full flex justify-start">

        <div className="">
          <img className="w-28 mb-10" src="public/Logo.png" alt="" />
       
        <div className="text-center mb-6">
         <h2 className="text-xl">Bem - vindo ao</h2>
         <h1 className="text-Vinho font-bold text-4xl ">Tupã's</h1>
         </div>
        </div>

        <form className="">
          <div className="mb-4">
            <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 mb-5" placeholder="Digite seu e-mail"/>
            <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2" placeholder="Digite sua senha"></input>
          </div>

          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-700">Lembrar Senha</span>
            </label>
            <a href="#" className="text-sm text-purple-600 hover:underline">Esqueceu a senha?</a>
          </div>
          <button
            type="submit"
            className="w-full bg-Vinho text-white py-2 rounded-md">Entrar</button>
      </div>
    </div>
  );
}
export default Login