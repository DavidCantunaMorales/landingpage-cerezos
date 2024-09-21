import cerezosHome from "../assets/cerezos-home.webp";

export const Home = () => {
  return (
    <>
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
              Nos esforzamos por ofrecer una vida digna, llena de actividades
              que promuevan el bienestar físico, mental y emocional de cada
              persona.
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
        <div className="md:col-span-3">
          <img
            src={cerezosHome}
            alt="Residencia Los Cerezos"
            className="h-full w-full object-cover p-5"
          />
        </div>
      </section>

      <section className="flex p-8">
        <div className="w-[40%] bg-cyan-100">
          <h1 className="text-5xl font-bold text-center">
            ¿Por qué Elegirnos?
          </h1>
          <p className="text-gray-600 mt-4 text-center">
            Nos destacamos por nuestro compromiso con la atención personalizada
            y las instalaciones modernas que garantizan el bienestar de nuestros
            residentes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center bg-white p-6 shadow-md rounded-lg">
            <img
              src="/path/to/commitment-icon"
              alt="Compromiso"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Compromiso y dedicación</h3>
            <p className="text-gray-600">
              Profesionales dedicados a brindar atención personalizada.
            </p>
          </div>

          <div className="text-center bg-white p-6 shadow-md rounded-lg">
            <img
              src="/path/to/facilities-icon"
              alt="Instalaciones Modernas"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Instalaciones Modernas</h3>
            <p className="text-gray-600">
              Espacios diseñados para el confort y seguridad de los residentes.
            </p>
          </div>

          <div className="text-center bg-white p-6 shadow-md rounded-lg">
            <img
              src="/path/to/activities-icon"
              alt="Actividades"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Actividades y terapias</h3>
            <p className="text-gray-600">
              Programas diseñados para promover el bienestar físico y emocional.
            </p>
          </div>

          <div className="text-center bg-white p-6 shadow-md rounded-lg">
            <img
              src="/path/to/family-icon"
              alt="Ambiente Familiar"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Ambiente familiar</h3>
            <p className="text-gray-600">
              Un entorno cálido y acogedor donde todos se sienten en casa.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de "Por qué elegirnos" */}
      <section className="py-16 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold">¿Por qué elegirnos?</h2>
          <p className="text-gray-600 mt-4">
            Nos destacamos por nuestro compromiso con la atención personalizada
            y las instalaciones modernas que garantizan el bienestar de nuestros
            residentes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center bg-white p-6 shadow-md rounded-lg">
            <img
              src="/path/to/commitment-icon"
              alt="Compromiso"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Compromiso y dedicación</h3>
            <p className="text-gray-600">
              Profesionales dedicados a brindar atención personalizada.
            </p>
          </div>

          <div className="text-center bg-white p-6 shadow-md rounded-lg">
            <img
              src="/path/to/facilities-icon"
              alt="Instalaciones Modernas"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Instalaciones Modernas</h3>
            <p className="text-gray-600">
              Espacios diseñados para el confort y seguridad de los residentes.
            </p>
          </div>

          <div className="text-center bg-white p-6 shadow-md rounded-lg">
            <img
              src="/path/to/activities-icon"
              alt="Actividades"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Actividades y terapias</h3>
            <p className="text-gray-600">
              Programas diseñados para promover el bienestar físico y emocional.
            </p>
          </div>

          <div className="text-center bg-white p-6 shadow-md rounded-lg">
            <img
              src="/path/to/family-icon"
              alt="Ambiente Familiar"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold mb-2">Ambiente familiar</h3>
            <p className="text-gray-600">
              Un entorno cálido y acogedor donde todos se sienten en casa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
