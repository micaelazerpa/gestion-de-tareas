'use client'
import Link from "next/link";
import {useState} from "react";

export default function Header() {
  let menuArray = [true, false, false];
    const [menu, setMenu] = useState(menuArray);
    const [show, setShow] = useState(true);

    const setMenuValue = (props: any) => {
        let newArr = [...menu];
        newArr[props] = !newArr[props];
        setMenu(newArr);
    }
    return (
      <div>
      <div className="rounded-r bg-purple-800 xl:hidden flex justify-between w-full p-6 items-center ">
          <div className="flex justify-between  items-center space-x-3">
              <p className="text-2xl leading-6 text-white">Tareas Púrpura</p>
          </div>
          <div aria-label="toggler" className="flex justify-center items-center">
              <button aria-label="open" id="open" onClick={()=>setShow(true)} className={`${show ? 'hidden' : ''} focus:outline-none focus:ring-2`}>
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 12H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 18H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </button>
              <button aria-label="close" id="close" onClick={()=>setShow(false)} className={`${show ? '' : 'hidden'} focus:outline-none focus:ring-2`}>
                  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 6L6 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M6 6L18 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </button>
          </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
      <div id="Main" className={`${show ? 'translate-x-0' : '-translate-x-full'} xl:rounded-r transform  xl:translate-x-0  ease-in-out transition duration-500 flex justify-start items-start h-screen  w-full sm:w-64 bg-purple-800 flex-col col-span-1`}>
          <div className="hidden xl:flex justify-start p-6 items-center space-x-3">
            <p className="text-2xl leading-6 text-white">Tareas Púrpura</p>
          </div>
          <div className="mt-6 flex flex-col justify-between items-center  pl-4 w-full border-gray-600 border-b space-y-3 pb-5 ">
              
              <div className=" flex justify-between items-center w-full">
                  <div className="flex justify-center items-center  space-x-2">
                      <div>
                          <img className="rounded-full" src="https://i.ibb.co/L1LQtBm/Ellipse-1.png" alt="avatar" />
                      </div>
                      <div className="flex justify-start flex-col items-start">
                          <p className="cursor-pointer text-sm leading-5 text-white">Alexis Enache</p>
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    <Link href="/task" className="text-base leading-4  ">General</Link>
                  </button>
                  <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-purple-800 focus:text-white hover:bg-purple-600 text-gray-400 rounded px-3 py-2  w-full md:w-52">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                    <p className="text-base leading-4  ">Otras</p>
                  </button>
              </div>
          </div>
          
          <div className="flex flex-col justify-between items-center h-full pb-6   px-6  w-full  space-y-32 ">
              <button onClick={()=>setMenuValue(2)} className="focus:outline-none focus:text-indigo-400  text-white flex justify-between items-center w-full py-5 space-x-14  ">
                  <p className="text-sm leading-5  uppercase">OTRO</p>
                  <svg id="icon3" className={`${menu[2] ? '' : 'rotate-180 '} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </button>
              
          </div>
      </div>
      <div className="col-span-2"><h1>Holaasssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</h1></div>
      </div>
  </div>
    );
  }
  