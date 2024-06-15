function Cadastrar(){
    return(
        <div className="flex justify-center items-center min-h-screen bg-Fundo bg-cover">
            <div className="bg-color_bg opacity-75 p-8 rounded-lg shadow-md w-8/12 h-full flex flex-row justify-start ">

            <div className="flex-col">
                <img className="w-28 mb-9" src="public/Logo.png" alt="" />

                <h1 className="text-3xl text-color_vinho font-bold mb-6">Cadastre-se</h1>

            <form className="flex flex-col">
                <input type="text" className="w-full px-4 py-2 border rounded-full focus:outline-none placeholder:text-colortxt_preto bg-white mb-2" placeholder="Digite seu nome completo:" />
                <input type="email" className="w-full px-4 py-2 border rounded-full focus:outline-none placeholder:text-colortxt_preto bg-white mb-2" placeholder="Digite seu e-mail" />
                <input type="password" className="w-full px-4 py-2 border rounded-full focus:outline-none placeholder:text-colortxt_preto bg-white mb-2" placeholder="Crie uma senha:" />
                <input type="number" className="w-full px-4 py-2 border rounded-full focus:outline-none placeholder:text-colortxt_preto bg-white mb-2" placeholder="Digite seu telefone:" />
                <input type="cep" className="w-full px-4 py-2 border rounded-full focus:outline-none placeholder:text-colortxt_preto bg-white mb-2" placeholder="Digite seu CEP:" />
            </form>
            </div>

            </div>
        </div>
    )
}
export default Cadastrar