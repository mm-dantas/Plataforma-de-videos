import "./Header.css"
import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
            </nav>
        </header>
    )
    
}

export default Header