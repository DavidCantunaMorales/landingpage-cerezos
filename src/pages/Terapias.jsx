import CardImgArri from '../components/CardImgArri.jsx';
import ocupacional from '../assets//Terapias/ocupacional.webp';
import fisica from '../assets//Terapias/fisica.webp';
import arte from '../assets//Terapias/arte.webp';


const therapies = [
  {
    imageSrc: ocupacional,
    altText: 'Therapy 1',
    title: 'Terapia Ocupacional',
    description: 'Fomenta la independencia y la salud integral.',
    details: 'Nuestros terapeutas se enfocan en prevenir la dependencia, con actividades enfocadas a que los adultos mayores a traviesen la etapa de la tercera edad con una buena salud tanto física como cognitiva reduciendo estados patológicos, y permitiendo que tengan una vida saludable y activa.',
  },
  {
    imageSrc: fisica,
    altText: 'Therapy 2',
    title: 'Terapia Física',
    description: 'Fortalece el cuerpo y previene el sedentarismo.',
    details: 'Nuestros terapeutas físicos se enfocan en que nuestros adultos mayores mantegan una vida activa mediante ejercicios que ayuden a mantener y fortalecer todo su sistema muscular previniendo así el sedentarismo y patologías ostemusculares.',
  },{
    imageSrc: arte,
    altText: 'Therapy 3',
    title: 'Arte Terapia',
    description: 'Estimula la creatividad y refuerza habilidades cognitivas.',
    details: 'Contamos con un profesional en el arte el cual se enfoca en desarrollar el lado artístico de nuestros adultos mayores lo que les ayuda a mantener la motricidad fina, aliviando el dolor y la regidez y reforzando componentes cognitivos como la memoria, la atención y concentración de los adultos mayores',
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
