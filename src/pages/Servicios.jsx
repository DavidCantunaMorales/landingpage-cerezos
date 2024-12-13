import CardImgArri from '../components/CardImgArri.jsx';
import CerezosImage from '../assets/cerezos-home.webp';

export const Servicios = () => {
  const servicios = [
    {
      imageSrc: CerezosImage,
      altText: 'Residencia Permanente',
      title: 'Residencia Permanente',
      description:
        'Brindamos un hogar permanente con atención médica especializada y actividades diarias para promover una vida activa y plena. Nuestro personal está siempre disponible para proporcionar el mejor cuidado.',
      details: 'Detalles completos de la Residencia Permanente...',
      categoria: 'Atención Integral',
      autor: 'Los Cerezos',
    },
    {
      imageSrc: CerezosImage,
      altText: 'Guardería Diurna',
      title: 'Guardería Diurna',
      description:
        'Ofrecemos un servicio de estancia diurna para adultos mayores que necesitan supervisión durante el día. Incluye actividades recreativas, ejercicios suaves y acompañamiento médico, asegurando un entorno seguro y estimulante.',
      details: 'Detalles completos de la Guardería Diurna...',
      categoria: 'Cuidado Diurno',
      autor: 'Los Cerezos',
    },
    {
      imageSrc: CerezosImage,
      altText: 'Estancia Temporal',
      title: 'Estancia Temporal (Hotel de Paso)',
      description:
        'Contamos con estancias temporales para recuperaciones postoperatorias o simplemente para ofrecer un descanso temporal con todos los cuidados necesarios. Un espacio cómodo y seguro para una rápida recuperación.',
      details: 'Detalles completos de la Estancia Temporal...',
      categoria: 'Estancia Temporal',
      autor: 'Los Cerezos',
    },
    {
      imageSrc: CerezosImage,
      altText: 'Rehabilitación Física',
      title: 'Rehabilitación Física',
      description:
        'Disponemos de un programa de rehabilitación física para ayudar a los residentes a recuperar movilidad y fortalecer su cuerpo tras cirugías o lesiones. El servicio incluye terapias personalizadas con fisioterapeutas especializados.',
      details: 'Detalles completos de la Rehabilitación Física...',
      categoria: 'Salud y Bienestar',
      autor: 'Los Cerezos',
    },
    {
      imageSrc: CerezosImage,
      altText: 'Atención Médica Especializada',
      title: 'Atención Médica Especializada',
      description:
        'Proporcionamos atención médica constante con un equipo de profesionales de la salud que supervisan el bienestar de nuestros residentes. Contamos con médicos, enfermeras y personal capacitado las 24 horas.',
      details: 'Detalles completos de la Atención Médica Especializada...',
      categoria: 'Cuidado Médico',
      autor: 'Los Cerezos',
    },
    {
      imageSrc: CerezosImage,
      altText: 'Actividades Recreativas y Talleres',
      title: 'Actividades Recreativas y Talleres',
      description:
        'Organizamos actividades recreativas, talleres de manualidades, y programas culturales para fomentar el bienestar emocional y la socialización. Nuestro enfoque es enriquecer la vida diaria de nuestros residentes.',
      details: 'Detalles completos de las Actividades Recreativas y Talleres...',
      categoria: 'Actividades Recreativas',
      autor: 'Los Cerezos',
    },
  ];

  return (
    <section className='h-auto p-8 bg-gray-100'>
      {/* Título y descripción de la sección */}
      <div className='text-center mb-12'>
        <h1 className='text-6xl font-bold'>
          Nuestros <span className='text-red-600'>Servicios</span>
        </h1>
        <p className='text-gray-600 text-xl mt-4'>
          En Los Cerezos, nos comprometemos a ofrecer servicios especializados
          para el bienestar y la felicidad de nuestros residentes.
        </p>
      </div>

      {/* Listado de Servicios */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {servicios.map((servicio, index) => (
          <CardImgArri
            key={index}
            imageSrc={servicio.imageSrc}
            altText={servicio.altText}
            title={servicio.title}
            description={servicio.description}
            details={
              <>
                <div className='flex items-center gap-2 mb-2 text-gray-500 text-sm'>
                  <span>{servicio.fecha}</span>
                  <span>•</span>
                  <span>{servicio.categoria}</span>
                  <span>•</span>
                  <span>{servicio.autor}</span>
                </div>
                {servicio.details}
              </>
            }
          />
        ))}
      </div>
    </section>
  );
};
