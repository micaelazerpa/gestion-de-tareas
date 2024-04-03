'use client'
import TaskPage from "@/pages/Task";
import Link from "next/link";
import {useEffect, useState} from "react";
import { useTask } from "./hooks/useTask";
import { PlusIcon, PencilSquareIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { jwtDecode, JwtPayload } from "jwt-decode";
import { User } from "@/models/user.model";

export default function Task() {
    const [menu, setMenu] = useState([true, false, false]);
    const [show, setShow] = useState(true);
    const [user, setUser] = useState<User | null>(null);

    const setMenuValue = (props: any) => {
        let newArr = [...menu];
        newArr[props] = !newArr[props];
        setMenu(newArr);
    }
    
    const token = localStorage.getItem('token');
    const router = useRouter()
    const {task} = useTask(token)

    useEffect(()=>{ 
        if (token){
          try {
              const decodedToken =  jwtDecode(token) as User; 
              setUser(decodedToken);
          } catch (error) {
              console.error('Error al decodificar el token:', error);
              throw error;
          }
        }
    }, [token])
    const onChange = ()=>{
        router.push('/task-form')
       // router.push('/[taskId]', `/${id}`)
    }
    return (
      <div>
      <div className="rounded-r bg-purple-800 xl:hidden flex justify-between w-full p-6 items-center ">
          <div className="flex justify-between  items-center space-x-3">
              <Link href="/task" className="text-2xl leading-6 text-white">Tareas Púrpura</Link>
          </div>
          <div aria-label="toggler" className="flex justify-center items-center">
              <button aria-label="open" id="open" onClick={()=>setShow(true)} className={`${show ? 'hidden' : ''} focus:outline-none focus:ring-2`}>
                  <Bars3Icon className="h-6 w-6 flex-none text-white"  aria-hidden="true"/>
              </button>
              <button aria-label="close" id="close" onClick={()=>setShow(false)} className={`${show ? '' : 'hidden'} focus:outline-none focus:ring-2`}>
                  <XMarkIcon className="h-6 w-6 flex-none text-white"  aria-hidden="true"/>
              </button>
          </div>
      </div>
      <div className="grid grid-cols-4">
      <div id="Main" className={`${show ? 'translate-x-0' : '-translate-x-full'} xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-screen  w-full sm:w-64 bg-purple-800 flex-col col-span-1`}>
          <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
            <Link href="/task" className="text-2xl leading-6 text-white">Tareas Púrpura</Link>
          </div>
          <div className="mt-6 flex flex-col justify-between items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
              
              <div className=" flex justify-between items-center w-full">
                  <div className="flex justify-center items-center  space-x-2">
                      <div>
                          <img className="rounded-full" src="https://i.ibb.co/L1LQtBm/Ellipse-1.png" alt="avatar" />
                      </div>
                      <div className="flex justify-start flex-col items-start">
                          <p className="cursor-pointer text-sm leading-5 text-white"> {user?.nombre}</p>
                          <p className="cursor-pointer text-xs leading-3 text-gray-300">alexis81@gmail.com</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="flex flex-col justify-start items-center   px-6 border-b border-gray-600 w-full  ">
              <button onClick={()=>setMenuValue(0)} className="focus:outline-none focus:text-indigo-400  text-white flex justify-between items-center w-full py-5 space-x-14  ">
                  <p className="text-sm leading-5  uppercase">Tareas</p>
                  <svg id="icon1" className={`${menu[0] ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </button>
              <div id="menu1" className={`${menu[0] ? 'flex' : 'hidden'} justify-start  flex-col w-full md:w-auto items-start pb-1 `}>
                  <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-purple-800 focus:text-white hover:bg-purple-600 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                    <PencilSquareIcon  className="h-6 w-6 flex-none text-gray-400 m"  aria-hidden="true"/>
                    <Link href="/task" className="text-base leading-4  ">General</Link>
                  </button>
                  <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-purple-800 focus:text-white hover:bg-purple-600 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                    <PencilSquareIcon  className="h-6 w-6 flex-none text-gray-400 m"  aria-hidden="true"/>
                    <p className="text-base leading-4  ">Otras</p>
                  </button>
              </div>
          </div>
          
          <div className="flex flex-col justify-between items-center h-full pb-6   px-6  w-full  space-y-32 ">
              <button onClick={onChange} className="focus:outline-none focus:text-indigo-400  text-white flex items-center w-full py-5 space-x-14 text-sm leading-5  uppercase ">
                 <PlusIcon  className="h-6 w-6 flex-none text-white mr-1"  aria-hidden="true"/>AGREGRAR TAREA                
              </button>
          </div>
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-3">
            {task.map((task: any, id: any) => (
                <TaskPage key={id} task={task} />
            ))}                
         </div>
      </div>
      </div>
  </div>
    );
  }
  