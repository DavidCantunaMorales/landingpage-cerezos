import CerezosImage from "../assets/cerezos-home.webp";

export const Home = () => {
  return (
    <>
      { 
      <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8 bg-gray-100">
        <div className="md:col-span-5 flex items-center justify-center p-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-7xl font-bold text-center">
              Bienvenidos a la Residencia <br /><span>Los Cerezos</span>
            </h1>
            <p className="text-gray-500 text-xl leading-6 text-justify my-5">
              En la Residencia Los Cerezos, nos comprometemos a brindar una
              atención de calidad y un ambiente cálido para nuestros residentes.
              Nos esforzamos por ofrecer una vida digna, llena de actividades
              que promuevan el bienestar físico, mental y emocional de cada
              persona.
            </p>
            <p className="text-gray-500 text-xl leading-6 text-justify">
              Contamos con un equipo de profesionales dedicados que proporciona
              cuidados personalizados, asegurando que cada residente reciba la
              atención que necesita en un entorno de respeto y cariño. Nuestro
              objetivo es que se sientan como en casa, rodeados de seguridad y
              confort.
            </p>
            <button className="bg-red-600 mt-5 text-white text-xl py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">
              Conoce Más
            </button>
          </div>
        </div>

      </section> 
      
      }

      <section className="flex flex-col pt-28 bg-gray-100 items-center gap-8 p-6 md:flex-row md:items-start md:p-12">
        {/* Sección de texto */}
        <div className="md:w-[40%] md:mt-52 md:text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            maximus, nulla ut commodo sagittis, sapien dui mattis dui, non
            pulvinar lorem felis nec erat.
          </p>
        </div>

        {/* Sección de las tarjetas */}
        <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white">
            <img
              src={CerezosImage}
              alt="Residencia Los Cerezos"
              className="w-[450px] h-[200px] object-cover mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Compromiso y dedicación
            </h3>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white">
            <img
              src={CerezosImage}
              alt="Residencia Los Cerezos"
              className="w-[450px] h-[200px] object-cover mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Instalaciones Modernas
            </h3>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white">
            <img
              src={CerezosImage}
              alt="Residencia Los Cerezos"
              className="w-[450px] h-[200px] object-cover mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Actividades y terapias
            </h3>
          </div>
          <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm bg-white">
            <img
              src={CerezosImage}
              alt="Residencia Los Cerezos"
              className="w-[450px] h-[200px] object-cover mb-3"
            />
            <h3 className="text-lg font-semibold text-gray-800">
              Ambiente familiar
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};
