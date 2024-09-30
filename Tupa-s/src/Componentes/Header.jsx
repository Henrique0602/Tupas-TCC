import { FaRegUserCircle } from "react-icons/fa";
import NavBar from "./Navbar";
import { CiSearch } from "react-icons/ci";
 
function Header() {
  return (
 
 
 
    <div className="flex flex-row items-center bg-color-white text-color_vinho p-8 shadow-lg justify-around">
      <div className="">
        <FaRegUserCircle className="text-3xl mr-3"/>
      </div>
 
      <div className="">
        <NavBar />
      </div>
    </div>
  );
}
export default Header