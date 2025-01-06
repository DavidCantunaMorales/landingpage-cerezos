import { useState } from 'react';

const ServiciosCard = ({
  imageSrc,
  altText,
  title,
  description,
  details,
  categoria,
  horarios,
  autor,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative border rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Contenedor de imagen */}
      <div className="bg-gray-100 h-60 sm:h-72 md:h-80 flex items-center justify-center overflow-hidden">
        <img className="w-full h-full object-cover" src={imageSrc} alt={altText} />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <button
          className="text-blue-600 hover:text-blue-800 transition-colors"
          onClick={() => setShowDetails(true)}
        >
          Ver más →
        </button>
      </div>

      {/* Modal de detalles */}
      {showDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>

            {/* Información adicional */}
            <div className="text-sm text-gray-600 mb-4">
              <p><strong>Categoría:</strong> {categoria}</p>
              <p><strong>Horarios:</strong> {horarios}</p>
              <p><strong>Autor:</strong> {autor}</p>
            </div>

            {/* Lista de detalles */}
            {Array.isArray(details) ? (
              <ul className="text-gray-700 text-justify list-disc pl-5 space-y-2 mb-4">
                {details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-justify mb-4">{details}</p>
            )}

            {/* Botón para cerrar */}
            <button
              className="text-blue-600 hover:text-blue-800 transition-colors"
              onClick={() => setShowDetails(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiciosCard;
