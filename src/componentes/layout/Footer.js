import '../../estilos/layout/Footer.css';

const Footer = () =>
{
    return(
        <footer>
           <div className="autor">
                <p>Realizado por Gastón Cano&copy;</p>
                <div className='img-autor'>
                    <img src = "imagenes/logo.png" alt = "imagen marvel"/>
                </div>
           </div>
           <div className="contactar">
                <i className="fas fa-envelope">
                    <p>EMAIL</p>
                </i>
                <i className="fab fa-whatsapp">
                    <p>WHATSAPP</p>
                </i>
                <i className="fab fa-twitter">
                    <p>TWITTER</p>
                </i>
                <i className="fab fa-facebook">
                    <p>FACEBOOK</p>
                </i>
           </div>
           <div className="info">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry
                    .Lorem Ipsum has been the industry's standard dummy text ever since the 
                    1500s, when an unknown printer took a galley of type and scrambled it to
                    make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining essentially unchanged.
                    
                </p>
           </div>
        </footer>
    );
}

export default Footer;