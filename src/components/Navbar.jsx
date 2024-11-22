import { useState, useEffect } from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from './footer';

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
      <header className='flex justify-between items-center w-full p-4 h-[10vh] bg-[#ac2454] xl:justify-center fixed top-0 z-50'>
        <div className='text-center xl:w-1/6 z-20'>
          <h1 className='text-3xl font-bold p-1 text-white'>Los Cerezos</h1>
        </div>
        <nav
          className={`fixed bg-cerezo w-[80%] h-full font-bold ${
            showMenu ? 'left-0 bg-[#ac2454]' : '-left-full'
          } top-0 flex-1 flex flex-col items-center justify-center z-10 gap-10 transition-all duration-500 ease-in-out text-white
            xl:static xl:flex-row xl:w-full`}
        >
          <Link
            to='/'
            className={`nav-link ${
              isActive('/') ? 'text-[#ac2454] bg-white px-4 py-2 rounded' : ''
            } hover:text-[#ac2454] hover:bg-white px-4 py-2 rounded transition-all duration-300`}
          >
            Inicio
          </Link>
          <Link
            to='/sobre-nosotros'
            className={`nav-link ${
              isActive('/sobre-nosotros')
                ? 'text-[#ac2454] bg-white px-4 py-2 rounded'
                : ''
            } hover:text-[#ac2454] hover:bg-white px-4 py-2 rounded transition-all duration-300`}
          >
            Sobre Nosotros
          </Link>
          <Link
            to='/servicios'
            className={`nav-link ${
              isActive('/servicios')
                ? 'text-[#ac2454] bg-white px-4 py-2 rounded'
                : ''
            } hover:text-[#ac2454] hover:bg-white px-4 py-2 rounded transition-all duration-300`}
          >
            Servicios
          </Link>
          <Link
            to='/terapias'
            className={`nav-link ${
              isActive('/terapias')
                ? 'text-[#ac2454] bg-white px-4 py-2 rounded'
                : ''
            } hover:text-[#ac2454] hover:bg-white px-4 py-2 rounded transition-all duration-300`}
          >
            Terapias
          </Link>
          <Link
            to='/galeria'
            className={`nav-link ${
              isActive('/galeria')
                ? 'text-[#ac2454] bg-white px-4 py-2 rounded'
                : ''
            } hover:text-[#ac2454] hover:bg-white px-4 py-2 rounded transition-all duration-300`}
          >
            Galeria
          </Link>
          <Link
            to='/salidas'
            className={`nav-link ${
              isActive('/salidas')
                ? 'text-[#ac2454] bg-white px-4 py-2 rounded'
                : ''
            } hover:text-[#ac2454] hover:bg-white px-4 py-2 rounded transition-all duration-300`}
          >
            Salidas
          </Link>
          <Link
            to='/contactos'
            className={`nav-link ${
              isActive('/contactos')
                ? 'text-[#ac2454] bg-white px-4 py-2 rounded'
                : ''
            } hover:text-[#ac2454] hover:bg-white px-4 py-2 rounded transition-all duration-300`}
          >
            Contactos
          </Link>
        </nav>
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
      <div className='pt-[10vh]'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
