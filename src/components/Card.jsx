import { FaCalendarAlt, FaTag, FaForward } from 'react-icons/fa';

const Card = ({ imageSrc, altText, date, category, title, description }) => {
  return (
    <div className="flex items-center border rounded-lg overflow-hidden shadow-md p-4">
      <div className="w-1/4 bg-gray-100 p-4 flex justify-center items-center">
        <img className="h-16 w-16 object-cover" src={imageSrc} alt={altText} />
      </div>
      <div className="w-3/4 p-4">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <FaCalendarAlt className="mr-2" />
          <span>{date}</span>
          <FaTag className="ml-4 mr-2" />
          <span>{category}</span>
          <FaForward className="ml-auto" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <a href="#" className="mt-3 text-blue-500 hover:underline inline-flex items-center">
          Read more
          <FaForward className="ml-2" />
        </a>
      </div>
    </div>
  );
};

export default Card;
