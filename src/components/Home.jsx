export const Home = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* Informacion */}
      <div className="md:col-span-5 flex items-center justify-center p-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-bold text-center">
            Bienvenidos a La Residencia <span>Los Cerezos</span>
          </h1>
          <p className="text-gray-500 text-xl leading-6">
            En la Residencia Los Cerezos, nos comprometemos a brindar una
            atención de calidad y un ambiente cálido para nuestros residentes.
            Nos esforzamos por ofrecer una vida digna, llena de actividades que
            promuevan el bienestar físico, mental y emocional de cada persona.
          </p>
          <p className="text-gray-500 text-xl leading-6">
            Contamos con un equipo de profesionales dedicados que proporciona
            cuidados personalizados, asegurando que cada residente reciba la
            atención que necesita en un entorno de respeto y cariño. Nuestro
            objetivo es que se sientan como en casa, rodeados de seguridad y
            confort.
          </p>
          <button className="bg-red-600 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">
            Conoce Más
          </button>
        </div>
      </div>
      <div className="bg-red-600 md:col-span-3">Image</div>
    </section>
  );
};
