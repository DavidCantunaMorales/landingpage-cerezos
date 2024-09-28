const CardImgDer = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="flex items-center border rounded-lg overflow-hidden shadow-md p-8 bg-white">
      {/* Texto al lado izquierdo */}
      <div className="w-1/2 pr-2">
        <h3 className="text-4xl font-bold text-gray-800 mb-4">{title}</h3>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
      {/* Imagen al lado derecho */}
      <div className="w-1/2 flex justify-end">
        <img className="h-auto w-80 object-cover rounded-md" src={imageSrc} alt={altText} />
      </div>
    </div>
  );
};

export default CardImgDer;
