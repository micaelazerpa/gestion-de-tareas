"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { EstadoTarea, Tarea } from "@/models/task.model";
import { useRouter } from "next/navigation";
import { useUpdateTask } from "../hooks/useUpdateTask";
import { useEffect, useState } from "react";

export default function TaskId({ params }: any) {
    const taskLocal= localStorage.getItem('task');
    const [task, setTask ] = useState<Tarea | null>(null);
    const { register, handleSubmit, formState: { errors }, reset} = useForm<Tarea>({
        defaultValues:{
            nombre:task?.nombre,
            descripcion:task?.descripcion,
            estado:task?.estado
        }
    });
  const token = localStorage.getItem('token');
  const { updateTask} = useUpdateTask();

  const idTask = params;
  const router = useRouter()
  /* const data = router.query;  */
  useEffect(() => {
    if (taskLocal){
      const taskJson=JSON.parse(taskLocal)
      setTask(taskJson)
      reset(taskJson)
    }
  }, []);
  
  const onSubmit: SubmitHandler<Tarea> = (data) => {
    const {nombre, descripcion, estado}=data
    updateTask(idTask, {nombre, descripcion, estado}, token);
    router.push('/task')
  };

  return (
    <div className="flex min-h-screen justify-center px-6 py-12 lg:px-8">
      <div className="flex justify-center flex-1 flex-col max-w-lg overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Tarea
          </h2>
        </div>
        <div className="p-4 mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="nombre"
                  type="text"
                  autoComplete="nombre"
                  
                  required
                  {...register("nombre")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="text-sm font-medium text-red-500">
                  {errors.nombre?.message}
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="descripcion"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Descripción
                </label>
              </div>
              <div className="mt-2">
                <textarea
                  id="descripcion"
                  rows={3}
                  required
                  {...register("descripcion")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <p className="text-sm font-medium text-red-500">
                  {errors.descripcion?.message}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Escriba una descripción de su tarea.
                </p>
              </div>
            </div>
            <div className="mt-10 space-y-10">
              <fieldset>
                <legend className="block text-sm font-medium leading-6 text-gray-900">
                  Estado de la tarea
                </legend>
                <div className="mt-6 space-y-6">
                  {Object.values(EstadoTarea).map((estado) => (
                    <div key={estado} className="flex items-center gap-x-3">
                      <input
                        id={`estado-${estado}`}
                        type="radio"
                        value={estado}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        {...register("estado")}
                        //checked={task?.estado === estado} 
                      />
                      <label
                        htmlFor={`estado-${estado}`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {estado}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>

            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
              <Link
                href="/task"
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
              >
                {/* <PencilIcon
                    className="h-5 w-5 flex-none text-gray-400"
                    aria-hidden="true"
                /> */}
                Cancelar
              </Link>
              <button
                type="submit"
                className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                //disabled={isLoading}
              >
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
