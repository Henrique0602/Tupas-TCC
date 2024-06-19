import { Link } from "react-router-dom";


function NavBar() {
    return ( 
        
    <nav>
        <ul className='flex gap-4 ml-3 text-colorTxt'>
            <li><Link to ="Home">Home</Link></li>
            <li><Link to = "">Serviços</Link></li>
            <li><Link to = "">Sobre</Link></li>
            <li><Link to = "">Contato</Link></li>
        </ul>
    </nav>
        
     );
}

export default NavBar;