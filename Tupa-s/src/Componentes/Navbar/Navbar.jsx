import { Link } from "react-router-dom";


function NavBar() {
    return ( 
        
    <nav>
        <ul className='flex gap-12 ml-3 text-colorTxt font-bold'>
            <li><Link to ="/home">Home</Link></li>
            <li><Link to = "/Home/Servicos">Serviços</Link></li>
            <li><Link to = "/Home/Sobre">Sobre</Link></li>
            <li><Link to = "/Home/MarketPlace">Loja</Link></li>
            <li><Link to = "/Home/Terapia">Terapia</Link></li>
        </ul>
    </nav>
        
     );
}

export default NavBar;