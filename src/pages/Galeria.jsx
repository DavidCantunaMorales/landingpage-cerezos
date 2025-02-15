import Galeria1 from '../assets/Galería/Galeria1V.jpg';
import Galeria2 from '../assets/Galería/Galeria2V.jpg';
import Galeria3 from '../assets/Galería/Galeria3V.jpg';
import Galeria4 from '../assets/Galería/Galeria4H.jpg';
import Galeria5 from '../assets/Galería/Galeria5V.jpg';
import Galeria6 from '../assets/Galería/Galeria6H.jpg';
import Galeria7 from '../assets/Galería/Galeria7H.jpg';
import Galeria8 from '../assets/Galería/Galeria8V.jpg';
import Galeria9 from '../assets/Galería/Galeria9V.jpg';
import Galeria10 from '../assets/Galería/Galeria10V.jpg';
import Galeria11 from '../assets/Galería/Galeria11V.jpg';
import Galeria12 from '../assets/Galería/Galeria12V.jpg';

export const Galeria = () => {
  // Lista de imágenes sin clasificación
  const imagenes = [
    Galeria1, Galeria2, Galeria3, Galeria4, Galeria5, 
    Galeria6, Galeria7, Galeria8, Galeria9, Galeria10, 
    Galeria11, Galeria12
  ];

  // Separar imágenes en horizontales y verticales
  const imagenesOrdenadas = imagenes.sort((a, b) => {
    const nombreA = a.split('/').pop();
    const nombreB = b.split('/').pop();
    const esHorizontalA = nombreA.includes('H') ? -1 : 1;
    const esHorizontalB = nombreB.includes('H') ? -1 : 1;
    return esHorizontalA - esHorizontalB;
  });

  return (
    <section className='h-auto py-16 bg-gray-100'>
      {/* Título de la sección */}
      <div className='text-center mb-12 px-4 sm:px-8'>
        <h2 className='text-4xl sm:text-6xl font-bold text-gray-800'>
          Nuestra <span className='text-red-600'>Galería</span>
        </h2>
        <p className='text-gray-600 text-lg sm:text-xl mt-4'>
          Descubre nuestros espacios y las actividades que realizamos para el
          bienestar de nuestros residentes.
        </p>
      </div>

      {/* Grid de la galería */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8'>
        {imagenesOrdenadas.map((imagen, index) => {
          // Verificar si el nombre del archivo contiene "V" (Vertical) o "H" (Horizontal)
          const nombreArchivo = imagen.split('/').pop();
          const esVertical = nombreArchivo.includes('V'); 
          const aspectRatio = esVertical ? 'aspect-[3/4]' : 'aspect-[4/3]';

          return (
            <div
              key={index}
              className={`overflow-hidden rounded-lg shadow-lg ${aspectRatio}`}
            >
              <img
                src={imagen}
                alt={`Galería ${index + 1}`}
                className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
