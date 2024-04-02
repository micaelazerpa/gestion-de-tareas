import { useEffect, useState } from "react";
import { getTasks } from "@/services/task.services";

export function useTask() {
  const [task, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getApplicants = async () => {
    setIsLoading(true);
    console.log('Esta en el hook de tareas')
    try {
      const  data  = await getTasks();
        console.log('Tareas en el hook', data.tareas)
      setTask(data.tareas);
    } catch (error) {
      console.error("Error: ", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (task.length === 0) {
      getApplicants();
    }
  },[]);

  return {
    task,
    isLoading,
    setTask,
  };
}
