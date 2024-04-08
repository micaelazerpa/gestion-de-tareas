import { useState } from "react";
import { PencilSquareIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTaskProvider } from "@/app/hooks/useTaskProvider";

export default function Proyect() {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const {task, setTask} = useTaskProvider()

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }
  const handleState = (id:string) => {
    const filterTask=task.filter((item:any)=> item.estado==id)
    console.log('tareas a filtrar', task)
    console.log('tareas a filtrar', filterTask)
  }

  return (
    <>
      <button
        onClick={toggleMenu}
        className="focus:outline-none focus:text-indigo-400 text-white flex justify-between items-center w-full py-5 space-x-14  "
      >
        <p className="text-sm leading-5 truncate">Proyecto 1</p>
        <ChevronUpIcon className={`${isMenuOpen ? "" : "rotate-180"} transform duration-100 h-6 w-6 flex-none text-white`}/>
      </button>
      <div id="menu1" className={`${ isMenuOpen ? "flex" : "hidden" } justify-start  flex-col w-full md:w-auto items-start pb-1 `}
      >
        <button onClick={()=>handleState("PENDIENTE")} className="flex justify-start space-x-6 hover:text-white focus:bg-purple-800 focus:text-white hover:bg-purple-600 text-gray-400 rounded px-3 py-2 w-full md:w-max">
          <PencilSquareIcon className="h-6 w-6 flex-none text-gray-400 m" aria-hidden="true"/>
          <p className="text-base leading-4  ">Pendientes</p>
        </button>
        <button className="flex justify-start space-x-6 hover:text-white focus:bg-purple-800 focus:text-white hover:bg-purple-600 text-gray-400 rounded px-3 py-2  w-full md:w-max">
          <PencilSquareIcon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true"/>
          <p className="text-base leading-4  ">En progreso</p>
        </button>
        <button className="flex justify-start space-x-6 hover:text-white focus:bg-purple-800 focus:text-white hover:bg-purple-600 text-gray-400 rounded px-3 py-2  w-full md:w-max">
          <PencilSquareIcon className="h-6 w-6 flex-none text-gray-400 m" aria-hidden="true"/>
          <p className="text-base leading-4  ">Canceladas</p>
        </button>
        <button className="flex justify-start space-x-6 hover:text-white focus:bg-purple-800 focus:text-white hover:bg-purple-600 text-gray-400 rounded px-3 py-2  w-full md:w-max">
          <PencilSquareIcon className="h-6 w-6 flex-none text-gray-400" aria-hidden="true"/>
          <p className="text-base leading-4  ">Terminadas</p>
        </button>
      </div>
    </>
  );
}
