import Link from "next/link";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <div className="bg-teal-50">
        <Header/>
        <div className="bg-purple-50 relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                ¡Gestión de Tareas!
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Tu Herramienta para Dominar tus Tareas ¡Únete a la Revolución de la Productividad! Regístrate ahora y comienza a dominar tus tareas hoy mismo.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/login"
                  className="rounded-md bg-cyan-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Empezar
                </Link>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Leer más <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>      
      </div>
    </>
  );
}
