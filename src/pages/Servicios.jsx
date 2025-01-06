import ServiceCard from '../components/ServiceCard.jsx';
import EstanciaTemporal from '../assets/Servicios/estancia_temporal.webp';
import Estimulacion from '../assets/Servicios/estimulacion_cognitiva.webp';
import Guarderia from '../assets/Servicios/guarderia.webp';
import Medicos from '../assets/Servicios/medicos_especializados.webp';
import Rehabilitacion from '../assets/Servicios/rehabilitacion_fisica.webp';
import Residencia from '../assets/Servicios/residencia_permanente.webp';


export const Servicios = () => {
  const servicios = [
    {
      imageSrc: Residencia,
      altText: 'Residencia Permanente',
      title: 'Residencia Permanente',
      description:
        'Brindamos un hogar permanente con atención médica especializada y actividades diarias para promover una vida activa y plena.',
      details: [
        'Habitaciones cómodas',
        'Enfermería 24/7',
        'Salidas recreacionales',
        'Lavandería',
        'Peluquería',
        'Terapias',
        'Plan nutricional personalizado',
      ],
      categoria: 'Residencia Permanente',
      horarios: 'Lunes a domingo, 24 horas',
      autor: 'Los Cerezos',
    },
    {
      imageSrc: Guarderia,
      altText: 'Guardería',
      title: 'Guardería',
      description:
        'Servicio de estancia diurna para adultos mayores que necesitan supervisión durante el día.',
      details: [
        'Servicio de enfermería',
        'Acceso a todas las instalaciones',
        'Media mañana',
        'Almuerzo',
        'Media tarde',
      ],
      categoria: 'Cuidado Diurno',
      horarios: '9:00 AM - 12:00 PM / 9:00 AM - 4:00 PM',
      autor: 'Los Cerezos',
    },
    {
      imageSrc: EstanciaTemporal,
      altText: 'Estancia Temporal',
      title: 'Estancia Temporal (Hotel de Paso)',
      description:
        'Ofrecemos estancias temporales para recuperaciones postoperatorias o descanso temporal con cuidados necesarios.',
      details: [
        'Derecho a todas las instalaciones',
        'Servicio de enfermería',
        'Terapias',
        'Alimentación',
      ],
      categoria: 'Estancia Temporal',
      horarios: 'Lunes a domingo, 24 horas',
      autor: 'Los Cerezos',
    },
    {
      imageSrc: Estimulacion,
      altText: 'Estimulación Cognitiva',
      title: 'Estimulación Cognitiva',
      description:
        'Disponemos de un programa de rehabilitación física para ayudar a los residentes a recuperar movilidad y fortalecer su cuerpo tras cirugías o lesiones. El servicio incluye terapias personalizadas con fisioterapeutas especializados.',
      details: [
        'Terapias personalizadas',
        'Actividades cognitivas',
        'Entrenamiento físico especializado',
      ],
      categoria: 'Salud y Bienestar',
      horarios: 'Lunes a viernes, 9:00 AM - 6:00 PM',
      autor: 'Los Cerezos',
    },
    {
      imageSrc: Rehabilitacion,
      altText: 'Rehabilitación Física',
      title: 'Rehabilitación Física',
      description:
        'Disponemos de un programa de rehabilitación física para ayudar a los residentes a recuperar movilidad y fortalecer su cuerpo tras cirugías o lesiones. El servicio incluye terapias personalizadas con fisioterapeutas especializados.',
      details: [
        'Fisioterapia especializada',
        'Terapias musculares',
        'Planes de recuperación personalizados',
      ],
      categoria: 'Salud y Bienestar',
      horarios: 'Lunes a sábado, 8:00 AM - 5:00 PM',
      autor: 'Los Cerezos',
    },
    {
      imageSrc: Medicos,
      altText: 'Atención Médica Especializada',
      title: 'Atención Médica Especializada',
      description:
        'Proporcionamos atención médica constante con un equipo de profesionales de la salud que supervisan el bienestar de nuestros residentes.',
      details: [
        'Supervisión médica constante',
        'Personal capacitado 24/7',
        'Monitoreo de signos vitales',
      ],
      categoria: 'Cuidado Médico',
      horarios: '24 horas, todos los días',
      autor: 'Los Cerezos',
    },
  ];

  return (
    <section className="h-auto p-8 bg-gray-100">
      {/* Título y descripción de la sección */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold">
          Nuestros <span className="text-red-600">Servicios</span>
        </h1>
        <p className="text-gray-600 text-xl mt-4">
          En Los Cerezos, nos comprometemos a ofrecer servicios especializados
          para el bienestar y la felicidad de nuestros residentes.
        </p>
      </div>

      {/* Listado de Servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => (
          <ServiceCard
            key={index}
            imageSrc={servicio.imageSrc}
            altText={servicio.altText}
            title={servicio.title}
            description={servicio.description}
            details={servicio.details}
            categoria={servicio.categoria}
            horarios={servicio.horarios}
            autor={servicio.autor}
          />
        ))}
      </div>
    </section>
  );
};
