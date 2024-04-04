import { useEffect, useState } from "react";
import { getTaskUserId, getTasks } from "@/services/task.services";

export function useTask(token: any) {
  const [task, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const taskByUser = async () => {
    setIsLoading(true);
    if (token) {
      try {
        const data = await getTaskUserId(token);
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
  }, [token]);

  return {
    task,
    isLoading,
    setTask,
  };
}
