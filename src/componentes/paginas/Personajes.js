import '../../estilos/paginas/Personajes.css';
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import Card  from './Card';
import Header from'../layout/Header';

const Personajes = () =>
{
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const ima = useRef();
    const contenedor = useRef();
    const parrafo = useRef();
    const titulo = useRef();

    useEffect(()=>
    {
        const cargarPersonajes = async () =>
        {
            const respuesta = await axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=49af079729854577d66ce252aa894f23&hash=56d8dfc93b5ae93565193d6dfe6537f3');
            setCargando(false);
            setPersonajes(respuesta.data.data.results);
        }

        cargarPersonajes();
    },[]);

    const cambiarSrc = (x) =>
    {
        contenedor.current.style = "display:flex;";
        ima.current.src = `${x.thumbnail.path}.${x.thumbnail.extension}`
        x.description.length === 0 ? 
        (parrafo.current.innerHTML = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")
        :(parrafo.current.innerHTML = x.description)
        titulo.current.innerHTML = x.name;
    }

    const salir = () =>
    {
        contenedor.current.style = "display:none;";
    }

    return(
        <div>
            <Header/>
            <main id = "personajes">
                {cargando ? <h2>Cargando...</h2>:
                <div className='contenedor-cards'>
                    {personajes.map( x=> <Card key = {x.id} pasar = { cambiarSrc } x = {x}/>)}
                </div>
                }
            </main>
            <div className = 'contenedor-principal' ref = {contenedor}>
                <div className = 'contenedor-imagen-activa'>
                    <h2 ref = {titulo}>.</h2>
                    <img ref = {ima} src = "imagenes/840_560.jpeg" alt = {ima.current}/>
                    <p ref = {parrafo}>.</p>
                    <button onClick = {salir}>X</button>
                </div>
            </div>
        </div>
        
    );
}

export default Personajes;