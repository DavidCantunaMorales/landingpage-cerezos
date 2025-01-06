import CardImgDer from "../components/CardImgDer.jsx";
import CardImgIzq from "../components/CardImgIzq.jsx";
import Mision from '../assets/SobreNosotros/mision.webp';
import Vision from '../assets/SobreNosotros/vision.webp';
import Valores from '../assets/SobreNosotros/valores.webp';


export const SobreNosotros = () => {
  // Datos de ejemplo
  const cardsData = [
    {
      imageSrc: Mision,
      altText: "Misión",
      title: "Misión",
      description: "Ofrecer un servicio geriátrico multidisciplinario enfocado al adulto mayor, a través de diferentes actividades desarrolladas por nuestros profesionales con el fin de garantizar un envejecimiento activo, así como el mantener la funcionalidad y autonomía propias de nuestros residentes en sus diferentes esferas (Física, cognitiva, social, espiritual y emocional).",
    },
    {
      imageSrc: Vision,
      altText: "Visión",
      title: "Visión",
      description: "Ser una residencia que promueve la salud y el bienestar de nuestros adultos mayores mejorando su calidad de vida, mediante nuestros servicios con la finalidad de incrementar el sentido de participación, autoestima y utilidad, rompiendo las barreras que surgen con las diferentes patologías que se pueden presentar en el adulto mayor.",
    },
    {
      imageSrc: Valores,
      altText: "Valores",
      title: "Valores",
      description: "Nuestros valores fundamentales son la integridad, el respeto y la innovación.",
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <div className="flex flex-col space-y-6">
        {cardsData.map((card, index) => (
          // Alternar entre CardImgDer y CardImgIzq
          index % 2 === 0 ? (
            <CardImgDer
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              description={card.description}  
            />
          ) : (
            <CardImgIzq
              key={index}
              imageSrc={card.imageSrc}
              altText={card.altText}
              title={card.title}
              description={card.description}
            />
          )
        ))}
      </div>
    </div>
  );
};
