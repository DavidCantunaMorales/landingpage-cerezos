import { useState } from "react";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center w-full p-4 h-[10vh] bg-cerezo-primary xl:justify-center">
        <div className="text-center xl:w-1/6">
          <h1 className="text-2xl font-bold p-1 text-cerezo-secondary">
            Los Cerezos
          </h1>
        </div>
        <nav
          className={`fixed bg-cerezo w-[80%] h-full ${
            showMenu ? "left-0" : "-left-full"
          }  top-0 flex-1 flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out text-cerezo-secondary
            xl:static xl:flex-row xl:w-full`}
        >
          <a href="#">Inicio</a>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Servicios</a>
          <a href="#">Terapias</a>
          <a href="#">Galeria</a>
          <a href="#">Salidas</a>
          <a href="#">Contactos</a>
        </nav>
        <button
          className="text-2xl xl:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <IoIosClose /> : <IoIosMenu />}
        </button>
      </header>
      <Outlet />
    </>
  );
};
