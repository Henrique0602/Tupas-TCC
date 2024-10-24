import Header from "../Componentes/Header"
import { LiaStarSolid } from "react-icons/lia";


function Terapia() {
    return (
        <>
            <Header />
            <h1 className="text-xl md:text-2xl font-bold text-center mt-5 mb-10 text-gray-800 hover:text-green-600 transition-colors">Médicos disponíveis</h1>

            <h2 className="text-xl md:text-2xl font-bold m-10 mt-5 mb-10 text-gray-800 hover:text-green-600 transition-colors">Terapeutas</h2>

            <div className="w-2/5 m-10">
                <div className="border-2 border-grey-700 mt-5 mb-10 flex flex-row rounded-3xl">
                    <div className="border-2 border-grey-600 w-32 mr-10 rounded-2xl m-10">
                        <img src="https://evorastudio.com.br/wp-content/uploads/2021/03/fotos-para-medicos-1.jpg" alt="Profissional" />
                    </div>
                    <div className="flex flex-col justify-center mr-10">
                        <h3>Dr. Fulano</h3>
                        <p>Função:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex justify-end text-green-500">
                            <a href="">Marcar Consulta</a>
                           
                        </div>
                        <div className="flex flex-row justify-end gap-2 mt-2">
                   
                        <a className = "text-yellow-400 flex " href=""><LiaStarSolid /></a>
                        <p>4.9</p>
                        </div>
                  
                        
                    </div>
                </div>

                
                <div className="border-2 border-grey-700 mt-5 mb-10 flex flex-row rounded-3xl">
                    <div className="border-2 border-grey-600 w-32 mr-10 rounded-3xl m-10">
                        <img className="rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-7vL-ugIAPxy9q5XgjsEDZgfFbjM8YMLX549UgHTj5YQ0QXz5tWfdeHx5Ng0q739Un4&usqp=CAU" alt="Profissional" />
                    </div>
                    <div className="flex flex-col justify-center mr-10">
                        <h3>Dra. Beltrana</h3>
                        <p>Função:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex justify-end text-green-500">
                            <a href="">Marcar Consulta</a>
                        </div>
                        <div className="flex flex-row justify-end gap-2 mt-2">
                   
                   <a className = "text-yellow-400 flex " href=""><LiaStarSolid /></a>
                   <p>4.8</p>
                   </div>
                    </div>
                </div>

                
                <div className="border-2 border-grey-700 mt-5 mb-10 flex flex-row rounded-3xl">
                    <div className="border-2 border-grey-600 w-32 mr-10 rounded-2xl m-10">
                        <img className="rounded-2xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbce17idxswgkpW9QpFKbFTQ81RuavmyYE1H_O6D1-4e4Kf0LGGrwqCH0UNmwOGGJA7OQ&usqp=CAU" alt="Profissional" />
                    </div>
                    <div className="flex flex-col justify-center mr-10">
                        <h3>Dra. Ciclana</h3>
                        <p>Função:</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <div className="flex justify-end text-green-500">
                            <a href="">Marcar Consulta</a>
                        </div>
                        <div className="flex flex-row justify-end gap-2 mt-2">
                   
                   <a className = "text-yellow-400 flex " href=""><LiaStarSolid /></a>
                   <p>4.7</p>
                   </div>
                   
                    </div>
                </div>
            </div>





        </>

    )
}
export default Terapia