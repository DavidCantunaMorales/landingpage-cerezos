import { useState } from 'react';

const CardImgCom = ({ imageSrc, altText, description }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative border rounded-lg overflow-hidden shadow-md bg-white">
      <div className="p-4">
        <div className="bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
          <img
            className="w-full h-full object-cover cursor-pointer"
            src={imageSrc}
            alt={altText}
            onClick={() => setShowModal(true)}
          />
        </div>
        <div className="p-4">
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative p-4">
            <img
              className="w-full h-auto max-w-3xl"  
              src={imageSrc}
              alt={altText}
              style={{ aspectRatio: '4 / 3' }} 
            />
            <button
              className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardImgCom;
