import { Link } from "react-router-dom";


function NavBar() {
    return ( 
        
    <nav>
        <ul className='flex gap-4 ml-3 text-colorTxt font-bold'>
            <li><Link to ="Home">Home</Link></li>
            <li><Link to = "servicos">Serviços</Link></li>
            <li><Link to = "sobre">Sobre</Link></li>
            <li><Link to = "nutrimusc">N & M</Link></li>
            <li><Link to = "marketplace">MarketPlace</Link></li>
            <li><Link to = "terapia">Terapia</Link></li>
        </ul>
    </nav>
        
     );
}

export default NavBar;