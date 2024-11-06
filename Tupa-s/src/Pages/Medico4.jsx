import Header from "../Componentes/Header";

function Medico4() {
    return (
        <>
            <Header />
            <div className="p-10  min-h-screen">
                <div className="mt-5 mb-5  p-6 rounded-lg ">
                    <h1 className="font-bold text-2xl mb-4">Conheça mais um pouco sobre a Dr. X:</h1>
                    <p className=" mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum libero recusandae neque, aliquam excepturi tenetur aliquid placeat sint atque dignissimos inventore itaque nesciunt sapiente fugiat praesentium consequatur hic necessitatibus temporibus.
                    </p>

                    <div className="flex justify-between mb-5">
                        <img className="rounded-3xl shadow-md w-52" src="https://evorastudio.com.br/wp-content/uploads/2021/03/fotos-para-medicos-12-scaled.jpg" alt="Dr. X" />
                        <div className="mt-10 mr-48">
                            <h2 className="font-bold text-xl mb-4">Sua Carreira:</h2>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Lorem ipsum dolor sit amet</li>
                                <li>Consectetur adipiscing elit</li>
                                <li>Sed do eiusmod tempor incididunt</li>
                                <li>Ut labore et dolore magna aliqua</li>
                                <li>Quis autem vel eum iure reprehenderit</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10">
                        <h2 className="font-bold text-xl mb-4">Sua Formação:</h2>
                        <p className="text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil odio delectus ratione molestias, maiores nisi. Reiciendis ullam nobis quam ipsa, dicta, at quaerat accusantium possimus voluptatum atque natus saepe quisquam.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col mt-10">
                    <h2 className="font-bold text-xl mb-5 p-6 ">Deixe um comentário para nosso Dr X.</h2>
                    <textarea 
                        className="border border-gray-300 rounded-lg p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200 resize-none"
                        rows="5"
                        placeholder="Escreva aqui!!!"
                    />
                    <button className="px-6 py-2 rounded-lg font-semibold text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 transition duration-300 w-5/12 mt-4 flex justify-center items-center">
                        Enviar
                    </button>
                </div>

 


            </div>
        </>
    );
}

export default Medico4;
