import { create } from 'zustand';

type TaskState = {
  task:  any 
  setTask: (newTask: any) => void
};

export const useTaskProvider = create<TaskState>((set) => ({
  task: {}, 
  setTask: (newTask) => set(() => ({ task: newTask })),
}));