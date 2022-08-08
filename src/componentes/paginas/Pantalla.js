import '../../estilos/paginas/Pantalla.css';
import { useNavigate } from "react-router-dom";

const Pantalla = () =>
{
    const navigate = useNavigate();

    return (
        <main id = "pantalla">
            <button onClick = {() => navigate("/inicio")}>COMENZAR</button>
        </main>
    );
}

export default Pantalla;