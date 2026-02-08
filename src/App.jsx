import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componentes/Home';
import Sobremi from './componentes/Sobremi'
import Experiencia from './componentes/Experiencia';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import './App.css'
import Estudios from './componentes/Estudios';
import TarjetaExperiencia from './componentes/TarjetaProyecto';
//proyectos
import HotelAdmin from './componentes/HotelAdmin';
import Troqueles from './componentes/Troqueles';
import Glosario from './componentes/Glosario';
import Numerosecreto from './componentes/Numerosecreto';
import Encriptador from './componentes/Encriptador';
import Aluraflix from './componentes/Aluraflix';
import Ppt from './componentes/Ppt';
import Org from './componentes/Org';
import Fiambreria from './componentes/Fiambreria'
import Header from './componentes/Header';

function App() {

  return (
    <Router >
      <Header />

      <div className="layout">

        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/proyectos' element={<Experiencia />} />
            <Route path='/sobremi' element={<Sobremi />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/estudios' element={<Estudios />} />
            <Route path='/tarjetaproyecto' element={<TarjetaExperiencia />} />
            <Route path='/administrador' element={<HotelAdmin />} />
            <Route path='/troqueles' element={<Troqueles />} />
            <Route path='/glosario' element={<Glosario />} />
            <Route path='/numerosecreto' element={<Numerosecreto />} />
            <Route path='/encriptador' element={<Encriptador />} />
            <Route path='/aluraflix' element={<Aluraflix />} />
            <Route path='/ppt' element={<Ppt />} />
            <Route path='/org' element={<Org />} />
            <Route path='/fiambreria' element={<Fiambreria />} />



          </Routes>
        </main>
        <Footer />
      </div>


    </Router>
  );
}

export default App
