"use client";
import { useTaskProvider } from "@/app/hooks/useTaskProvider";
import {
  ChevronRightIcon,
  PencilIcon,
  DocumentTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function TaskPage(params: any) {
  const { task } = params;
  const router = useRouter();
  const { setTasks } = useTaskProvider();
  const [open, setOpen] = useState(false);
  if (!task) {
    console.log('Esperando...')
    return <div>Cargando...</div>;
  }

  const handleClick = () => {
    setTasks(task);
    router.push(`/task/${task._id}`);
  };
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
              <h2 className="flex font-semibold text-gray-900 h-auto">
                {task.nombre}
              </h2>
              <p className="flex flex-grow mt-1 text-gray-600 text-clip overflow-hidden">
                {task.descripcion}
              </p>
            </div>
          </div>
          <p className="mt-1 text-gray-600 h-1/6 self-center">{task.estado}</p>
        </div>
        <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
          <button
            className="w-full flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
            onClick={() => setOpen(true)}
          >
            <ChevronRightIcon
              className="h-5 w-5 flex-none text-gray-400"
              aria-hidden="true"
            />
            Ver
          </button>
          <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
              </Transition.Child>
              <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                  <Dialog.Panel className="flex w-1/2 transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                    <div className="rounded-lg relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                      <button
                        type="button"
                        className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>

                      <div className="h-full w-full flex flex-col">
                        <h2 className="flex font-semibold text-gray-900 h-auto">
                          {task.nombre}
                        </h2>
                        <p className="flex flex-grow mt-1 text-gray-600 text-clip overflow-hidden">
                          {task.descripcion}
                        </p>
                        <p className="flex mt-8 text-gray-600 h-1/6 self-center">
                          {task.estado}
                        </p>
                      </div>
                    </div>
                  </Dialog.Panel>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
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
