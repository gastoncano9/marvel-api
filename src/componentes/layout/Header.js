import Nav from './Nav';
import '../../estilos/layout/Header.css';

const Header = () =>
{
    return(
        <header id = "cabecera">
            <div className = "logo">
                <img src = 'imagenes/deadpoolpng.png' alt = "Logo"/>
            </div>
            <div className='titulo-principal'>
                <h1>MARVEL COMICS</h1>
            </div>
            <Nav/>
        </header>
    );
}

export default Header;