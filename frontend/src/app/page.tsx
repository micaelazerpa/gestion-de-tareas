'use client'
import { useState } from "react";
import HomePage from "@/pages/Home";
import Image from "next/image";
import TaskPage from "@/pages/Task";
import Task from "./task/page";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <main>
       {isLogin? <Task/> : <HomePage/>}
    </main>
  );
}
