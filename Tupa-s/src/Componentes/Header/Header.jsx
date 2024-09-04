import { FaRegUserCircle } from "react-icons/fa";
import NavBar from "../Navbar/Navbar";
import { CiSearch } from "react-icons/ci";
 
function Header() {
  return (
 
 
 
    <div className="flex flex-row items-center bg-color_bg text-color_vinho p-8 shadow-lg justify-around">
     
      <div className="">
        <FaRegUserCircle className="text-3xl mr-3"/>
      </div>
 
      <div className="">
        <NavBar />
      </div>
 
      <div className="relative">
        <input className="block w-80 h-12 rounded-xl pl-12 bg-color_vinho placeholder:text-white placeholder:text-sm text-white focus:outline-none font-medium text-sm" type="text" placeholder="Buscar"/>
        <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white" size="20px" />
      </div>
    </div>
  );
}
export default Header