//Componentes de router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//componentes
import Footer from './componentes/layout/Footer';

//componentes de navegacion
import Pantalla from './componentes/paginas/Pantalla';
import Principal from './componentes/paginas/Principal';
import Personajes from './componentes/paginas/Personajes';


function App() {
  return (
    <div>
      <Routes>
        <Route exact path = "/" element = { <Pantalla/> }  />
        <Route exact path = "/inicio" element = { <Principal/> } />
        <Route exact path = "/personajes" element = { <Personajes/> } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
