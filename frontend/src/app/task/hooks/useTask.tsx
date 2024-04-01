import { useEffect, useState } from "react";
import { getTasks } from "@/services/task.services";

export function useTask() {
  const [task, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getApplicants = async () => {
    setIsLoading(true);
    try {
      const { data } = await getTasks();
        console.log('Tareas regitradas', data)
      setTask(data);
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
  },[task.length]);

  return {
    task,
    isLoading,
    setTask,
  };
}
