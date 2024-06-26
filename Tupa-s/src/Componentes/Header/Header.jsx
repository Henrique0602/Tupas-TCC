import { FaRegUserCircle } from "react-icons/fa";


function Header(){
    return (
      
      <div className=" flex justify-between items-center bg-color_bg bg-opacity-75 text-color_vinho p-5  ">
        <img className="w-16 ml-10" src="../public/Logo.png" alt="" />
        <FaRegUserCircle className="text-3xl mr-3" />
        
        
      </div>
    );
}
export default Header