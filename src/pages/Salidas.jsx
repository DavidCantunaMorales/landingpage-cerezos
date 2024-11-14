import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import CerezosImage from '../assets/cerezos-home.webp';

export const Salidas = () => {
  const proximasSalidas = [
    {
      titulo: 'Visita al Jardín Botánico',
      descripcion:
        'Un paseo relajante para disfrutar de la naturaleza y aire fresco.',
      icono: '🌿',
      link: '#',
    },
    {
      titulo: 'Taller de Pintura al Aire Libre',
      descripcion:
        'Explora la creatividad con actividades artísticas al aire libre.',
      icono: '🎨',
      link: '#',
    },
    {
      titulo: 'Excursión al Museo',
      descripcion: 'Una visita cultural para explorar la historia y el arte.',
      icono: '🏛️',
      link: '#',
    },
    {
      titulo: 'Picnic en el Parque',
      descripcion:
        'Disfruta de un picnic con juegos y actividades recreativas.',
      icono: '🧺',
      link: '#',
    },
  ];

  return (
    <section className='py-16 bg-gray-100'>
      {/* Sección de Salidas Recientes (Carrusel) */}
      <div className='container mx-auto px-8 mb-16'>
        <h2 className='text-5xl font-bold text-center mb-8'>
          Salidas recientes
        </h2>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className='w-full relative'
        >
          {/* Carrusel de Salidas Recientes */}
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className='flex flex-col md:flex-row items-center gap-8 bg-white shadow-lg rounded-lg p-6 max-w-[90%] mx-auto'>
                <div className='md:w-1/2'>
                  <p className='text-gray-600 text-lg'>
                    Recientemente, nuestros residentes disfrutaron de un día
                    maravilloso explorando el parque local, compartiendo
                    sonrisas y buenos momentos al aire libre.
                  </p>
                </div>
                <div className='md:w-1/2'>
                  <img
                    src={CerezosImage}
                    alt='Salida reciente'
                    className='w-full rounded-lg shadow-lg'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Botones de Navegación */}
          <div className='swiper-button-prev hidden md:flex absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-gray-700 bg-white p-2 rounded-full shadow-lg z-10'>
            ❮
          </div>
          <div className='swiper-button-next hidden md:flex absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-gray-700 bg-white p-2 rounded-full shadow-lg z-10'>
            ❯
          </div>
        </Swiper>
      </div>

      {/* Sección de Próximas Salidas */}
      <div className='container mx-auto px-8'>
        <h2 className='text-5xl font-bold text-center mb-8'>
          Próximas salidas
        </h2>
        <p className='text-gray-600 text-center mb-12'>
          Tenemos planeadas emocionantes salidas para los próximos días,
          diseñadas para el disfrute y la socialización de nuestros residentes.
        </p>

        {/* Grid para Próximas Salidas */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
          {/* Primer grupo de salidas */}
          <div className='flex flex-col gap-6'>
            {proximasSalidas.slice(0, 2).map((salida, index) => (
              <div
                key={index}
                className='flex items-start gap-4'
              >
                <span className='text-3xl'>{salida.icono}</span>
                <div>
                  <h3 className='text-xl font-semibold'>{salida.titulo}</h3>
                  <p className='text-gray-600'>{salida.descripcion}</p>
                  <a
                    href={salida.link}
                    className='text-blue-600 hover:text-blue-800'
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Imagen Central */}
          <div className='flex justify-center'>
            <img
              src={CerezosImage}
              alt='Próximas salidas'
              className='w-full max-w-md rounded-lg shadow-lg'
            />
          </div>

          {/* Segundo grupo de salidas */}
          <div className='flex flex-col gap-6'>
            {proximasSalidas.slice(2).map((salida, index) => (
              <div
                key={index}
                className='flex items-start gap-4'
              >
                <span className='text-3xl'>{salida.icono}</span>
                <div>
                  <h3 className='text-xl font-semibold'>{salida.titulo}</h3>
                  <p className='text-gray-600'>{salida.descripcion}</p>
                  <a
                    href={salida.link}
                    className='text-blue-600 hover:text-blue-800'
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
