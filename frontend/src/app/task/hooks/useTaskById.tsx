import { useEffect, useState } from "react";
import { getTaskUserId, getTasks } from "@/services/task.services";

export function useTaskById(taskId: any) {
  const [task, setTask] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const taskByUser = async () => {
    setIsLoading(true);
    if (taskId) {
      try {
        const data = await getTaskId(taskId);
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
  }, [taskId]);

  return {
    task,
    isLoading,
    setTask,
  };
}
