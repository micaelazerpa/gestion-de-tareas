'use client'
import TaskPage from "@/pages/Task";
import {useEffect, useState} from "react";
import { useTask } from "./hooks/useTask";
import { PlusIcon, Bars3Icon, XMarkIcon, ArrowLeftStartOnRectangleIcon,  PencilSquareIcon, ChevronUpIcon} from "@heroicons/react/24/outline";
import { useRouter} from 'next/navigation'
import { useAuth} from "../hooks/useAuth";
import { useToken } from "../hooks/useToken";
import ProyectPage from "@/pages/Proyect";
import ProfilePage from "@/pages/Profile";
import { useTaskState } from "../hooks/useTaskState";

const State=[
    {name:'PENDIENTE', nombre:'Pendientes',id:'1'},
    {name:'EN_PROGRESO',nombre:'En progreso',id:'2'}, 
    {name:'CANCELADA', nombre:'Canceladas', id:'3'}, 
    {name:'TERMINADA', nombre:'Terminadas',id:'4'}
]

export default function Task() {
    const [show, setShow] = useState(true);
    const [isMenuOpen, setMenuOpen] = useState(false)
    const {updateAuth}=useAuth()
    const {token } = useToken()
    const router = useRouter()
    const {task} = useTask(token)

    const [taskFilter, setTaskFilter] = useState([])
    const {taskState, updateState} = useTaskState()
    //const prevFilter = useRef(state)
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    
    useEffect(()=>{ 
        console.log('estado recuperado', taskState)
        const filterTask = task.filter((item: any) => item.estado === taskState)
        console.log('tareas a filtrar', filterTask)
        setTaskFilter(filterTask)
    }, [taskState, task]) 
    
    const handleState = (name:string) => {
        updateState(name)
    }
  
    const handleChange = ()=>{
        router.push('/task-form')
    }
    const handleLogin = ()=>{
        updateAuth()
        updateState('')
        router.push('/')
    }
    return (
      <div className="bg-teal-50 ">
      <div className="rounded-r bg-cyan-800 flex justify-between xl:hidden w-full p-6 items-center flex-wrap">
          <div className="flex justify-between  items-center space-x-3">
              <button onClick={()=>(updateState(''))} className="text-2xl leading-6 text-white">Gestión-Tareas</button>
          </div>
          <div aria-label="toggler" className="flex justify-center items-center">
              <button aria-label="open" id="open" onClick={()=>setShow(true)} className={`${show ? 'hidden' : ''}  xl:hidden focus:outline-none focus:ring-2`}>
                  <Bars3Icon className="h-6 w-6 flex-none text-white"  aria-hidden="true"/>
              </button>
              <button aria-label="close" id="close" onClick={()=>setShow(false)} className={`${show ? '' : 'hidden'} xl:hidden focus:outline-none focus:ring-2`}>
                  <XMarkIcon className="h-6 w-6 flex-none text-white"  aria-hidden="true"/>
              </button>
          </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <div id="Main" className={`${show ? 'translate-x-0' : '-translate-x-full hidden'} xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-screen w-full bg-cyan-800 flex-col col-span-1`}>
          <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
            <button onClick={()=>(updateState(''))} className="text-2xl leading-6 text-white">Gestión-Tareas</button>
          </div>
          <div className="mt-6 flex flex-col justify-between items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
              <ProfilePage/>
          </div>
          <div className="flex flex-col justify-start items-center px-6 border-b border-gray-600 w-full  ">
            <button onClick={toggleMenu} className="focus:outline-none focus:text-indigo-400 text-white flex justify-between items-center w-full py-5 space-x-14 " >
                <p className="text-sm leading-5 truncate">Proyecto 1</p>
                <ChevronUpIcon className={`${isMenuOpen ? "" : "rotate-180"} transform duration-100 h-6 w-6 flex-none text-white`}/>
            </button>

            <div id="menu1" className={`${ isMenuOpen ? "flex" : "hidden" } justify-start  flex-col w-full md:w-auto items-start pb-1 `} >
                {State.map((item)=>(
                    <button key={item.id} onClick={()=>handleState(item.name)} className="flex justify-start space-x-6 hover:text-white focus:text-white hover:bg-cyan-600 text-gray-400 rounded px-3 py-2 w-full md:w-max">
                    <PencilSquareIcon className="h-6 w-6 flex-none text-gray-400 m" aria-hidden="true"/>
                    <p className="text-base leading-4  ">{item.nombre}</p>
                    </button>
                ))}                
            </div>
          </div>
          
          <div className="flex flex-col justify-between items-center h-full pb-6 px-6  w-full  space-y-32 border-b border-gray-600">
              <button onClick={handleChange} className="focus:outline-none focus:text-indigo-400  text-white flex items-center w-full py-5 space-x-14 text-sm leading-5  uppercase">
                 <PlusIcon  className="h-6 w-6 flex-none text-white mr-1"  aria-hidden="true"/>AGREGRAR TAREA                
              </button>             
          </div>
          <div className="flex flex-col justify-between items-center pb-6 px-6  w-full  space-y-32 border-b border-gray-600">
              <button onClick={handleLogin} className="focus:outline-none focus:text-indigo-400  text-white flex items-center w-full py-5 space-x-14 text-sm leading-5">
                 <ArrowLeftStartOnRectangleIcon className="h-6 w-6 flex-none text-white mr-1"  aria-hidden="true"/>Cerrar sesión           
              </button>
          </div>
          
      </div>
        <div className={`${show ? 'col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4' : ' col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5' }`}>
           {taskState==''?<ProyectPage/>:
            <div className={`overflow-y-scroll overflow-x-hidden pb-5 h-screen flex flex-wrap`}>
            {Array.isArray(taskFilter) && taskFilter.map((task: any, id: any) => (
                <TaskPage key={id} task={task}/>
            ))}
            </div>}
        </div>
      </div>
  </div>
    );
  }
  