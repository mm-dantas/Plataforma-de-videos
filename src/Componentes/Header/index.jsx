import "./Header.css"
import { Link, useLocation } from "react-router-dom"

function Header() {
    const location = useLocation();

    return(
        <header>
            <nav>
                <li>
                    <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Home</Link>
                </li>
                <li>
                    <Link to="/sobre" className={location.pathname === "/sobre" ? "active-link" : ""}>Sobre</Link>
                </li>
                <li>
                    <Link to="/contato" className={location.pathname === "/contato" ? "active-link" : ""}>Contato</Link>
                </li>
            </nav>
        </header>
    )
    
}

export default Header