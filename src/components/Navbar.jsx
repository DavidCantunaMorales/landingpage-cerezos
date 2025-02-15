import { useState, useEffect } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Logo from '../assets/IconCerezos.png'; // Asegúrate de que el logo esté en la carpeta correcta

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation(); // Hook para obtener la ubicación actual

  // Cerrar el menú cuando la ubicación cambie y desplazar la página al inicio
  useEffect(() => {
    setShowMenu(false); // Cerrar el menú
    window.scrollTo(0, 0); // Desplazar la página al inicio
  }, [location]);

  // Función para determinar si la ruta está activa
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className='flex justify-between items-center w-full p-4 h-[10vh] bg-[#ac2454] fixed top-0 z-50 xl:px-12'>
        {/* Logo e Identidad */}
        <div className='flex items-center gap-3 flex-shrink-0'>
          <img
            src={Logo}
            alt='Logo Los Cerezos'
            className='h-10 w-auto sm:h-12' // Ajuste de tamaño para diferentes pantallas
          />
          <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white whitespace-nowrap'>
            Los Cerezos
          </h1>
        </div>

        {/* Menú de Navegación */}
        <nav
          className={`fixed bg-cerezo w-[80%] h-full font-bold ${
            showMenu ? 'left-0 bg-[#ac2454]' : '-left-full'
          } top-0 flex flex-col items-center justify-center z-10 gap-8 transition-all duration-500 ease-in-out text-white
            xl:static xl:flex-row xl:w-auto xl:gap-6`}
        >
          {[
            { to: '/', text: 'Inicio' },
            { to: '/sobre-nosotros', text: 'Sobre Nosotros' },
            { to: '/servicios', text: 'Servicios' },
            { to: '/terapias', text: 'Terapias' },
            { to: '/instalaciones', text: 'Instalaciones' },
            { to: '/galeria', text: 'Galería' },
            { to: '/contactos', text: 'Contactos' }
          ].map(({ to, text }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link px-4 py-2 rounded transition-all duration-300 ${
                isActive(to) ? 'text-[#ac2454] bg-white' : 'hover:text-[#ac2454] hover:bg-white'
              }`}
            >
              {text}
            </Link>
          ))}
        </nav>

        {/* Botón del menú para pantallas pequeñas */}
        <button
          className='text-2xl xl:hidden'
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? (
            <IoIosClose className='text-white' />
          ) : (
            <IoIosMenu className='text-white' />
          )}
        </button>
      </header>

      {/* Espaciado para evitar que el contenido quede oculto por la navbar fija */}
      <div className='pt-[10vh]'>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};
