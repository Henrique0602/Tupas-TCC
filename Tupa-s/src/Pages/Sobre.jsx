import Header from "../Componentes/Header"
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";

function Sobre() {
    return (
        <>
            <div>
                <Header />
                <h1 className="text-xl md:text-2xl font-bold text-center mt-5 mb-10 text-gray-800 hover:text-green-600 transition-colors">
                    Um Pouco Sobre a Tupã's
                </h1>
            </div>

            <div>
                <p className="p-10  text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eligendi omnis amet nisi veniam iusto adipisci corporis saepe officiis excepturi. Impedit, tenetur saepe voluptatibus reprehenderit culpa sint? Sint, tempora laudantium.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quam doloremque repudiandae non ut. Sequi est nam tenetur consectetur esse quaerat voluptatum repellendus veniam, fugit labore facilis aspernatur fuga id.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia modi velit tempora! Maiores, doloremque assumenda ut officia itaque suscipit, ipsa vero blanditiis accusamus architecto, cum deserunt ratione ea ex a. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repellendus harum natus cum corrupti quasi quidem aliquid asperiores vero autem possimus odio non commodi illo voluptatibus, consequatur odit vitae atque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, sapiente totam veniam mollitia expedita ea ex voluptate eaque, nemo illo, aut aliquid blanditiis ratione accusamus eveniet enim ipsum voluptates similique!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam totam adipisci sequi incidunt aut veritatis quaerat distinctio illum ad, amet tempore provident, modi quis inventore ex reprehenderit hic explicabo ipsum?
                </p>
                <div>
                    <h2 className="text-xl md:text-2xl font-bold text-center mt-5 mb-10 text-gray-800 hover:text-green-600 transition-colors">Fundadores</h2>
                    
                </div>

                <div className="flex flex-row gap-10 p-10 justify-center" >
                    <div className="">
                        <p className="flex justify-center mb-2">Raul L</p>
                        <img src="/Ellipse 2.png" alt="" />
                        <div className="flex flex-row justify-center mt-3 gap-2">
                        <FaSquareInstagram/>
                        <BsTwitterX/>
                        <FaFacebook/>
                        </div>
                      

                    </div>
                    <div >
                        <p className="flex justify-center mb-2">Vitor D</p>
                        <img src="/Ellipse 2 (1).png" alt="" />
                        <div className="flex flex-row justify-center mt-3 gap-2">
                        <FaSquareInstagram/>
                        <BsTwitterX/>
                        <FaFacebook/>
                        </div>
                      

                    </div>
                    <div >
                        <p className="flex justify-center mb-2">Mateus M</p>
                        <img className = "w-24" src="/Mídia__1_-removebg-preview.png" alt="" />
                        <div className="flex flex-row justify-center mt-3 gap-2">
                        <FaSquareInstagram/>
                        <BsTwitterX/>
                        <FaFacebook/>
                        </div>
                      

                    </div>
                    <div className="">
                        <p className="flex justify-center mb-2">Henrique B</p>
                        <img className =  "w-24 rounded-3xl" src="/Henricao.png" alt="" />
                        <div className="flex flex-row justify-center mt-1 gap-2" >
                        <FaSquareInstagram/>
                        <BsTwitterX/>
                        <FaFacebook/>
                        </div>
                      

                    </div>
                    <div >
                        <p className="flex justify-center mb-2">Chloe M</p>
                        <img src="/Ellipse 2 (4).png" alt="" />
                        <div className="flex flex-row justify-center mt-3 gap-2">
                        <FaSquareInstagram/>
                        <BsTwitterX/>
                        <FaFacebook/>
                        </div>
                      

                    </div>
                    <div >
                        <p className=" flex justify-center mb-2">Eric Y</p>
                        <img src="/Ellipse 2 (6).png" alt="" />
                        <div className="flex flex-row justify-center mt-3 gap-2">
                        <FaSquareInstagram/>
                        <BsTwitterX/>
                        <FaFacebook/>
                        </div>
                      

                    </div>
                </div>
               
                </div>


        </>

    )
}
export default Sobre