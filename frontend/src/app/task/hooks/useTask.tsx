import { useEffect, useState } from "react";
import { getTaskUserId, getTasks } from "@/services/task.services";

export function useTask(userId: any) {
  const [task, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const taskByUser = async () => {
    setIsLoading(true);
    if (userId) {
      try {
        const data = await getTaskUserId(userId);
        console.log("Tareas en el hook", data.tareas);
        setTask(data.tareas);
      } catch (error) {
        console.error("Error: ", error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (task.length === 0) {
      taskByUser();
    }
  }, [userId]);

  return {
    task,
    isLoading,
    setTask,
  };
}
