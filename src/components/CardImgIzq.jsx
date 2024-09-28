const CardImgIzq = ({ imageSrc, altText, title, description }) => {
    return (
      <div className="flex items-center border rounded-lg overflow-hidden shadow-md p-6 bg-white">
        {/* Imagen al lado izquierdo */}
        <div className="w-1/2 flex justify-start">
          <img className="h-auto w-80 object-cover rounded-md" src={imageSrc} alt={altText} />
        </div>
        {/* Texto al lado derecho */}
        <div className="w-1/2 pl-2">
          <h3 className="text-4xl font-bold text-gray-800 mb-4">{title}</h3>
          <p className="text-gray-600 text-lg">{description}</p>
        </div>
      </div>
    );
  };
  
  export default CardImgIzq;
  