'use client'
import { useTaskProvider } from "@/app/hooks/useTaskProvider";
import {ChevronRightIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function TaskPage(params: any) {
  const { task } = params;
  const router = useRouter();
  const {setTask} = useTaskProvider() 
  if (!task) {
    console.log('Esperando...')
    return <div>Cargando...</div>;
  }
 
  const handleClick = ()=>{
    setTask(task)
    router.push(`/task/${task._id}`)
  }
  return (
    <div className="mt-5 px-4 w-full sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/6">
      <div className="overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div key={task._id} className="p-1 flex flex-col ">
          <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50 h-32">
            {/* <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <DocumentTextIcon
                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                aria-hidden="true"
              />
            </div> */}
            
            <div className="h-full flex flex-col">
              <h2 className="flex font-semibold text-gray-900 h-auto">{task.nombre}</h2>
              <p className="flex flex-grow mt-1 text-gray-600 text-clip overflow-hidden">{task.descripcion}</p>
            </div>
          </div>
          <p className="mt-1 text-gray-600 h-1/6 self-center">{task.estado}</p>
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          <Link
            href="/"
            className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
          >
            <ChevronRightIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
            Ver
          </Link>
          <button
            onClick={handleClick}
            className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
          >
            <PencilIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
            Editar
          </button>
        </div>
      </div>
    </div>
  );
}
