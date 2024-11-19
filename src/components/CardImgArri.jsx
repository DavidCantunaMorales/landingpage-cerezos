import { useState } from 'react';

const CardImgArri = ({ imageSrc, altText, title, description, details }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative border rounded-lg overflow-hidden shadow-lg bg-white">
      <div className="bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
        <img className="w-full h-full object-cover" src={imageSrc} alt={altText} />
      </div>
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
      {showDetails && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-gray-700 mb-4">{details}</p>
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

export default CardImgArri;
