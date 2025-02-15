import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { RiCellphoneFill } from "react-icons/ri";

export const Contactos = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
         Contactos
        </h1>
        <p className="text-gray-600">Póngase en contacto con nosotros a través de cualquiera de los siguientes medios.</p>
      </div>

      {/* Contenedor principal para contactos y mapa */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna izquierda: Contactos */}
        <div className="flex flex-col gap-4 lg:col-span-1">
          {/* Sección de Teléfono */}
          <div className="border rounded-lg p-6 shadow-md bg-white flex flex-col items-center text-center">
            <FaPhone className="text-4xl text-red-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Teléfono</h2>
            <p className="text-gray-700 mb-1">+593 98 034 6861</p>
            <p className="text-gray-700">Disponible de 9 AM a 6 PM</p>
          </div>

          {/* Sección de Correo Electrónico */}
          <div className="border rounded-lg p-6 shadow-md bg-white flex flex-col items-center text-center">
            <FaEnvelope className="text-4xl text-red-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Correo Electrónico</h2>
            <p className="text-gray-700 mb-1">residencialoscerezos2024@gmail.com</p>
            <p className="text-gray-700">Respondiendo dentro de 24 horas</p>
          </div>

          {/* Sección de Celular */}
          <div className="border rounded-lg p-6 shadow-md bg-white flex flex-col items-center text-center">
            <RiCellphoneFill className="text-4xl text-red-600 mb-4" />
            <h2 className="text-xl font-bold mb-2">Celular</h2>
            <p className="text-gray-700 mb-1">0986081475</p>
            <p className="text-gray-700">Respondiendo dentro de 24 horas</p>
          </div>
        </div>

        {/* Columna derecha: Mapa */}
        <div className="border rounded-lg overflow-hidden shadow-md bg-white lg:col-span-2">
          <h2 className="text-xl font-bold p-4 text-center">Ubicación</h2>
          <div className="flex justify-center items-center p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.796058350005!2d-78.41351172503542!3d-0.19140059980671273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMTEnMjkuMCJTIDc4wrAyNCczOS40Ilc!5e0!3m2!1ses!2sec!4v1736204589559!5m2!1ses!2sec"
              width="100%"
              height="400"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              className="border-0 w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
