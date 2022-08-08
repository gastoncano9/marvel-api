import '../../estilos/paginas/Principal.css';
import Header from '../layout/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Principal = () => {

    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const numeroAelatorio = Math.round(Math.random()*10);


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

    return (
        <div>
            <Header/>
            <main id="principal">
                <section className="container-section">
                    <article className='historia' >
                        <div className='titulo-historia'>
                            <h2>MARVEL&copy;</h2>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book. It has survived not
                            only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.
                        </p>
                    </article>
                    <aside id="barra">
                        <h2>FLASHBACK</h2>
                        {
                            cargando?<p>CARGANDO...</p>
                            :
                            <div className='container-personaje'>
                                <div className='nombre-personaje'>
                                {
                                    personajes.length!==0?
                                    <h3>{personajes[numeroAelatorio].name}</h3>
                                    :
                                    null
                                }
                                </div>
                                <div className='img-personaje'>
                                    {
                                        personajes.length!==0 ?
                                        <img src =  {`${personajes[numeroAelatorio].thumbnail.path}.${personajes[numeroAelatorio].thumbnail.extension}`}  alt = "personaje"/>
                                        :
                                        null
                                    }
                                    
                                </div>

                                <div className='historia-personaje'>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type
                                        and scrambled it to make a type specimen book
                                    </p>
                                </div>
                            </div>
                        }
                       
                    </aside>
                </section>
            </main>
        </div>
    );
}

export default Principal;