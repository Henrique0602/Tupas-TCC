import { Link } from "react-router-dom"
import { FaRegUserCircle } from "react-icons/fa";
import NavBar from "../Componentes/Navbar/Navbar";

function Home() {
    return (

        <div className="min-h-screen bg-Home bg-cover">
            <div className=" flex justify-between items-center bg-color_bg text-color_vinho p-5  ">
                <div className="">
                    <img className = "w-16 ml-10" src="../Public/Logo.png" alt="" />
                </div>  
                <div className="">
                     <NavBar />
                </div>

                <div className=""> 
                     <FaRegUserCircle  className="text-3xl mr-3" />
                </div>
              
            </div>

        </div>
    )
}
export default Home