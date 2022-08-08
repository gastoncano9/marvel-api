import '../../estilos/paginas/Card.css';

const Card = ({x, pasar}) =>
{
    return(
        <div className="envoltura" onClick={() => pasar(x)}>
            <div className='contenedor-nombre'>
                <h2>{x.name}</h2>
                {x.description.length === 0 ? 
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                :
                <p>
                    {x.description}
                </p>
                }
            </div>
            <div className='contenedor-imagen'>
                <img src = {`${x.thumbnail.path}.${x.thumbnail.extension}`} alt = {x.name}/>
            </div>
        </div>
    );
}

export default Card;