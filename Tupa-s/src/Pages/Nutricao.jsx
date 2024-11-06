import Header from "../Componentes/Header"


function Nutricao() {
    return (
        <>

            <div>
                <Header />
                <h1 className="text-xl md:text-2xl font-bold text-center mt-5 mb-10 text-gray-800 hover:text-green-600 transition-colors">
                    Nutrição
                </h1>

                <p className="text-xl md:text-xl font text-left ml-10 mt-5 mb-10 text-gray-800 hover:text-green-600 transition-colors">Aqui você encontra o cardápio, que o seu nutricionista montou pensando em você</p>
            </div>


                <div className="space-y-4 ml-10 ittext-center">
                    <div className="bg-green-400 rounded-2xl w-3/6 p-6 shadow-lg">
                        <h2 className="text-white text-2xl font-bold mb-4">Seu Cardápio para o Café da Manhã</h2>
                        <ul className="space-y-2">
                            <li className="text-white text-lg">Pão Integral</li>
                            <li className="text-white text-lg">Suco de Laranja</li>
                            <li className="text-white text-lg">Café Preto</li>
                            <li className="text-white text-lg">Frutas</li>
                        </ul>
                    </div>


                    <div className="bg-green-400 rounded-2xl w-3/6 p-6 shadow-lg">
                        <h2 className="text-white text-2xl font-bold mb-4">Seu Cardápio para o Lanche da manha</h2>
                        <ul className="space-y-2">
                            <li className="text-white text-lg">Frutas</li>
                            <li className="text-white text-lg">Barra de proteina</li>
                        </ul>
                    </div>


                    <div className="bg-green-400 rounded-2xl w-3/6 p-6 shadow-lg">
                        <h2 className="text-white text-2xl font-bold mb-4">Seu Cardápio para o Almoço</h2>
                        <ul className="space-y-2">
                            <li className="text-white text-lg">Arroz com Feijão</li>
                            <li className="text-white text-lg">Frango Grelhado</li>
                            <li className="text-white text-lg">Salada de Alface e Tomate</li>
                            <li className="text-white text-lg">Suco Natural de Abacaxi</li>
                        </ul>
                    </div>

                    <div className="bg-green-400 rounded-2xl w-3/6 p-6 shadow-lg">
                        <h2 className="text-white text-2xl font-bold mb-4">Seu Cardápio para o Cafe da tarde</h2>
                        <ul className="space-y-2">
                            <li className="text-white text-lg">Frutas</li>
                            <li className="text-white text-lg">Pão Integral</li>
                            <li className="text-white text-lg">Barra de proteina</li>
                        </ul>
                    </div>

                    <div className="bg-green-400 rounded-2xl w-3/6 p-6 shadow-lg">
                        <h2 className="text-white text-2xl font-bold mb-4">Seu Cardápio para a Janta</h2>
                        <ul className="space-y-2">
                            <li className="text-white text-lg">Sopa de Abóbora</li>
                            <li className="text-white text-lg">Peixe Assado com Legumes</li>
                            <li className="text-white text-lg">Salada de Rúcula com Tomate-Cereja</li>
                        </ul>
                    </div>

                    <div className="bg-green-400 rounded-2xl w-3/6 p-6 shadow-lg">
                        <h2 className="text-white text-2xl font-bold mb-4">Seu Cardápio para a Ceia</h2>
                        <ul className="space-y-2">
                            <li className="text-white text-lg">Iogurte Natural com Mel</li>
                            <li className="text-white text-lg">Frutas Frescas (Maçã e Pera)</li>
                            <li className="text-white text-lg">Torrada Integral com Queijo Branco</li>
                            <li className="text-white text-lg">Chá de Erva-Doce</li>
                        </ul>
                    </div>

                </div>
    


        </>
    )
}
export default Nutricao