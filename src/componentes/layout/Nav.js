import { NavLink } from "react-router-dom";
import '../../estilos/layout/Nav.css';

const Nav = () =>
{
    return(
        <nav id = "navegacion">
            <ul>
                <li><NavLink activeClassName = "active" exact = "true" to = "/inicio">Inicio</NavLink></li>
                <li><NavLink activeClassName = "active" exact = "true" to = "/personajes">Personajes</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;