import { FaRegUserCircle } from "react-icons/fa";
import NavBar from "../Navbar/Navbar";


function Header(){
    return (
      
      <div className=" flex justify-between items-center bg-color_bg  text-color_vinho p-5 shadow-lg">
        <img className="w-16 ml-10" src="/Logo.png" alt="" />
        <NavBar/>
        
        <FaRegUserCircle className="text-3xl mr-3" />
        
      </div>
    );
}
export default Header