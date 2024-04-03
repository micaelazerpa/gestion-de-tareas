'use client'
import { useEffect, useState } from "react";
import HomePage from "@/pages/Home";
import Image from "next/image";
import TaskPage from "@/pages/Task";
import Task from "./task/page";

export default function Home() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const storedIsLogin = localStorage.getItem('isLogin');
  useEffect(()=>{
    if (storedIsLogin === 'true') {
      setIsLogin(true);
    }else{
      setIsLogin(false)
    }
  },[storedIsLogin])
  return (
    <main>
       {isLogin? <Task/> : <HomePage/>}
    </main>
  );
}
