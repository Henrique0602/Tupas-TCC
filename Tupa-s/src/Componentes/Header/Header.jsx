import { FaRegUserCircle } from "react-icons/fa";
import NavBar from "../Navbar/Navbar";


function Header() {
  return (



    <div className="flex justify-between items-center bg-color_bg text-color_vinho p-8 shadow-lg">

      <div className="flex items-center">
        <FaRegUserCircle className="text-3xl mr-3" />
      </div>

      <div className="flex-1 flex justify-center">
        <NavBar />
      </div>
    </div>
  );
}
export default Header