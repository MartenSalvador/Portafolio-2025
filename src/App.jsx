import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './componentes/Home';
import Sobremi from './componentes/Sobremi'
import Experiencia from './componentes/Experiencia';
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer';
import './App.css'
import Estudios from './componentes/Estudios';


function App() {
  
  return (
    <Router >
     
      <div className="layout">
        
        <main className="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/proyectos' element={<Experiencia />} />
            <Route path='/sobremi' element={<Sobremi />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/estudios' element={<Estudios />} />
          </Routes>
        </main>
      <Footer />
      </div>
      
      
    </Router>
  );
}

export default App
