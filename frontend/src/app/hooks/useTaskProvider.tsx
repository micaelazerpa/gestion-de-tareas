import { create } from 'zustand';

type TaskState = {
  tasks:  any 
  setTasks: (newTask: any) => void
};

export const useTaskProvider = create<TaskState>((set) => ({
  tasks: {}, 
  setTasks: (newTask) => set(() => ({ tasks: newTask })),
}));