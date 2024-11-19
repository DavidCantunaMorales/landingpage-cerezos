import CardImgArri from '../components/CardImgArri.jsx';
import CerezosImage from '../assets/cerezos-home.webp';

const therapies = [
  {
    imageSrc: CerezosImage,
    altText: 'Therapy 1',
    title: 'Terapia Física',
    description: 'Mejora la movilidad y reduce el dolor.',
    details: 'Detalles completos de la Terapia Física...',
  },
  {
    imageSrc: CerezosImage,
    altText: 'Therapy 2',
    title: 'Terapia Ocupacional',
    description: 'Ayuda a realizar actividades diarias.',
    details: 'Detalles completos de la Terapia Ocupacional...',
  },
  // Añadir más terapias con el mismo formato según sea necesario
];

export const Terapias = () => {
  return (
    <section className='h-auto p-8 bg-gray-100'>
      {/* Título y descripción de la sección */}
      <div className='text-center mb-12'>
        <h1 className='text-6xl font-bold'>
          Nuestras <span className='text-red-600'>Terapias</span>
        </h1>
        <p className='text-gray-600 text-xl mt-4'>
          En Los Cerezos, nos comprometemos a ofrecer terapias especializadas
          para el bienestar y la recuperación de nuestros residentes.
        </p>
      </div>

      {/* Listado de Terapias */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {therapies.map((therapy, index) => (
          <CardImgArri
            key={index}
            imageSrc={therapy.imageSrc}
            altText={therapy.altText}
            title={therapy.title}
            description={therapy.description}
            details={therapy.details}
          />
        ))}
      </div>
    </section>
  );
};
