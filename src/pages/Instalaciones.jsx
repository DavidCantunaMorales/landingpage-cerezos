import CardImgCom from '../components/CardImgCom.jsx';
import InstImage1 from '../assets/instalacion1.jpg';
import InstImage2 from '../assets/instalacion2.jpg';
import InstImage3 from '../assets/instalacion3.jpg';
import InstImage4 from '../assets/instalacion4.jpg';
import InstImage5 from '../assets/instalacion5.jpg';
import InstImage6 from '../assets/instalacion6.jpg';
import InstImage7 from '../assets/instalacion7.jpg';
import InstImage8 from '../assets/instalacion8.jpg';

const instalaciones = [
  {
    imageSrc: InstImage1,
    altText: 'Instalación 1',
    description: 'Habitaciones confortables y bien equipadas para cada residente.',
  },
  {
    imageSrc: InstImage2,
    altText: 'Instalación 2',
    description: 'Un lugar acogedor para que los residentes se reúnan y socialicen.',
  },
  {
    imageSrc: InstImage3,
    altText: 'Instalación 3',
    description: 'Un lugar acogedor para que los residentes se reúnan y socialicen.',
  },
  {
    imageSrc: InstImage4,
    altText: 'Instalación 4',
    description: 'Un amplio y hermoso jardín para el esparcimiento y la relajación.',
  },
  {
    imageSrc: InstImage5,
    altText: 'Instalación 5',
    description: 'Un amplio y hermoso jardín para el esparcimiento y la relajación.',
  },
  {
    imageSrc: InstImage6,
    altText: 'Instalación 6',
    description: 'Espacio dedicado para actividades recreativas y juegos.',
  },
  {
    imageSrc: InstImage7,
    altText: 'Instalación 7',
    description: 'Espacio dedicado para actividades recreativas y juegos.',
  },
  {
    imageSrc: InstImage8,
    altText: 'Instalación 8',
    description: 'Espacio dedicado para actividades recreativas y juegos.',
  },
];

export const Instalaciones = () => {
  return (
    <section className='h-auto p-8 bg-gray-100'>
      {/* Título y descripción de la sección */}
      <div className='text-center mb-12'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold'>
          Nuestras <span className='text-red-600'>Instalaciones</span>
        </h1>
        <p className='text-gray-600 text-base sm:text-lg md:text-xl mt-4'>
          En Los Cerezos, contamos con instalaciones de primera para asegurar el
          bienestar y la comodidad de nuestros residentes.
        </p>
      </div>

      {/* Listado de Instalaciones */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {instalaciones.map((instalacion, index) => (
          <CardImgCom
            key={index}
            imageSrc={instalacion.imageSrc}
            altText={instalacion.altText}
            description={instalacion.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Instalaciones;
