import CerezosImage from '../assets/cerezos-home.webp';

export const Servicios = () => {
  const servicios = [
    {
      titulo: 'Residencia Permanente',
      descripcion:
        'Brindamos un hogar permanente con atención médica especializada y actividades diarias para promover una vida activa y plena. Nuestro personal está siempre disponible para proporcionar el mejor cuidado.',
      imagen: CerezosImage,
      fecha: '5 Nov 2024',
      categoria: 'Atención Integral',
      autor: 'Los Cerezos',
    },
    {
      titulo: 'Guardería Diurna',
      descripcion:
        'Ofrecemos un servicio de estancia diurna para adultos mayores que necesitan supervisión durante el día. Incluye actividades recreativas, ejercicios suaves y acompañamiento médico, asegurando un entorno seguro y estimulante.',
      imagen: CerezosImage,
      fecha: '5 Nov 2024',
      categoria: 'Cuidado Diurno',
      autor: 'Los Cerezos',
    },
    {
      titulo: 'Estancia Temporal (Hotel de Paso)',
      descripcion:
        'Contamos con estancias temporales para recuperaciones postoperatorias o simplemente para ofrecer un descanso temporal con todos los cuidados necesarios. Un espacio cómodo y seguro para una rápida recuperación.',
      imagen: CerezosImage,
      fecha: '5 Nov 2024',
      categoria: 'Estancia Temporal',
      autor: 'Los Cerezos',
    },
    {
      titulo: 'Rehabilitación Física',
      descripcion:
        'Disponemos de un programa de rehabilitación física para ayudar a los residentes a recuperar movilidad y fortalecer su cuerpo tras cirugías o lesiones. El servicio incluye terapias personalizadas con fisioterapeutas especializados.',
      imagen: CerezosImage,
      fecha: '5 Nov 2024',
      categoria: 'Salud y Bienestar',
      autor: 'Los Cerezos',
    },
    {
      titulo: 'Atención Médica Especializada',
      descripcion:
        'Proporcionamos atención médica constante con un equipo de profesionales de la salud que supervisan el bienestar de nuestros residentes. Contamos con médicos, enfermeras y personal capacitado las 24 horas.',
      imagen: CerezosImage,
      fecha: '5 Nov 2024',
      categoria: 'Cuidado Médico',
      autor: 'Los Cerezos',
    },
    {
      titulo: 'Actividades Recreativas y Talleres',
      descripcion:
        'Organizamos actividades recreativas, talleres de manualidades, y programas culturales para fomentar el bienestar emocional y la socialización. Nuestro enfoque es enriquecer la vida diaria de nuestros residentes.',
      imagen: CerezosImage,
      fecha: '5 Nov 2024',
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
          <div
            key={index}
            className='bg-white shadow-lg rounded-lg overflow-hidden'
          >
            <img
              src={servicio.imagen}
              alt={servicio.titulo}
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              {/* Información del servicio */}
              <div className='flex items-center gap-2 mb-2 text-gray-500 text-sm'>
                <span>{servicio.fecha}</span>
                <span>•</span>
                <span>{servicio.categoria}</span>
                <span>•</span>
                <span>{servicio.autor}</span>
              </div>
              <h2 className='text-2xl font-semibold mb-4'>{servicio.titulo}</h2>
              <p className='text-gray-700 mb-4'>{servicio.descripcion}</p>
              <a
                href='#'
                className='text-blue-600 hover:text-blue-800 transition-colors'
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
