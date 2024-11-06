import { FaRegUserCircle } from "react-icons/fa";
import NavBar from "./Navbar";
 
function Header() {
  return (
 
 
 
    <div className="flex flex-row items-center bg-color-white text-color_vinho p-8 shadow-lg justify-between">
      <div className="">
      <a href="/Login"> <FaRegUserCircle className="text-3xl mr-3"/> </a> 
      </div>
 
      <div className="">
        <NavBar />
      </div>
    </div>
  );
}
export default Header