'use client'
import { useEffect, useState } from "react";
import HomePage from "@/pages/Home";
import Task from "./task/page";
import { useAuth } from "./hooks/useAuth";

export default function Home() {
  const isLogin = useAuth((state)=>state.login)/* 
  useEffect(()=>{
    if (isLogin === true) {
      isLogin(true)
    }else{
      isLogin(false)
    }
  },[isLogin]) */
  return (
    <main>
       {isLogin? <Task/> : <HomePage/>}
    </main>
  );
}
