
export default function Proyect() {
  return (
    <div className="text-center mx-10 my-10 h-screen">
      <div className="xl:mx-auto xl:container 2xl:px-0 px-6">
        <div className="lg:flex items-center justify-between">
          <div className=" lg:w-1/2 w-full">
            <h1
              role="heading"
              className="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-900"
            >
              ¡Bienvenida/o a Gestión de Tareas!
            </h1>
            <p
              role="contentinfo"
              className="text-base leading-5 mt-5 text-gray-700"
            >
              Tus tareas se organizan en proyectos, en cada proyecto podrás
              filtrar tus tareas por los estados disponibles. Pendientes, en
              progreso, canceladas y terminadas.
            </p>
          </div>
          <div
            className="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
            role="list"
          >
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
            >
              <div className="w-2.5  h-auto bg-cyan-600 rounded-tl-md rounded-bl-md" />
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-900">
                    Proyecto 1
                  </h2>
                </div>
              </div>
            </div>
            <div
              role="listitem"
              className="bg-white cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
            >
              <div className="w-2.5  h-auto bg-cyan-600 rounded-tl-md rounded-bl-md" />
              <div className="w-full p-8">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-2xl font-semibold leading-6 text-gray-900">
                    Otro
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
