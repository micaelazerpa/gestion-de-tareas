'use client'
import { useTaskProvider } from "@/app/hooks/useTaskProvider";
import {ChevronRightIcon, PencilIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function TaskPage(params: any) {
  const { task } = params;
  const router = useRouter();
  const {setTask} = useTaskProvider() 
 
  //console.log("parametros en tarjet", task);
  const handleClick = ()=>{
    setTask(task)
    router.push(`/task/${task._id}`)
  }
  return (
    <div className="mt-5 flex max-w-max px-4">
      <div className="max-w-sm overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          <div
            key={task._id}
            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
          >
            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
              <DocumentTextIcon
                className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                aria-hidden="true"
              />
            </div>
            <div>
              <h2 className="font-semibold text-gray-900">
                {task.nombre}
                <span className="absolute inset-0" />
              </h2>
              <p className="mt-1 text-gray-600">{task.descripcion}</p>
              <h4 className="font-semibold text-gray-900">
                Estado
                <span className="absolute inset-0" />
              </h4>
              <p className="mt-1 text-gray-600">{task.estado}</p>
            </div>
          </div>
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
            //href={`/[taskId]/${task.id}`}
            //href="/task/[id]" as={`/task/${task._id}`}
            //href={{ pathname: '/[taskId]', query: task }}
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
