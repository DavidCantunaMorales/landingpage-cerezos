export const Servicios = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* Informacion de los Servicios */}
      <div className="md:col-span-5 flex items-center justify-center p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold text-center">
            Nuestros <span>Servicios</span>
          </h1>
          <p className="text-gray-500 text-xl leading-6">
            En la Residencia Los Cerezos, ofrecemos una variedad de servicios
            diseñados para el bienestar de nuestros residentes. Desde terapias
            personalizadas hasta actividades recreativas, nos aseguramos de
            cubrir todas las necesidades.
          </p>
          <p className="text-gray-500 text-xl leading-6">
            Nuestros servicios están diseñados para garantizar una vida plena y
            saludable, con especial enfoque en la atención médica, la actividad
            física y el apoyo emocional. Cada uno de nuestros servicios está
            adaptado para proporcionar el máximo confort y cuidado.
          </p>
          <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">
            Ver Todos los Servicios
          </button>
        </div>
      </div>
      
      {/* Imagen o Gráficos */}
      <div className="bg-red-600 md:col-span-3 flex items-center justify-center">
        <img
          src="https://via.placeholder.com/400"
          alt="Nuestros Servicios"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};
