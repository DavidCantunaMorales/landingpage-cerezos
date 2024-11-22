import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/Navbar.jsx';
import { Home } from './pages/Home.jsx';
import { Servicios } from './pages/Servicios.jsx';
import { SobreNosotros } from './pages/SobreNosotros.jsx';
import { Terapias } from './pages/Terapias.jsx';
import { Galeria } from './pages/Galeria.jsx';
import { Salidas } from './pages/Salidas.jsx';
import { Contactos } from './pages/Contactos.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/sobre-nosotros'
          element={<SobreNosotros />}
        />
        <Route
          path='/servicios'
          element={<Servicios />}
        />
        <Route
          path='/terapias'
          element={<Terapias />}
        />
        <Route
          path='/galeria'
          element={<Galeria />}
        />
        <Route
          path='/salidas'
          element={<Salidas />}
        />
        <Route
          path='/contactos'
          element={<Contactos />}
        />
      </Routes>
    </HashRouter>
  </StrictMode>
);
