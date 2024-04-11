import create from 'zustand';

type State = {
    taskState: string
    updateState: (state: any) => void
}
export const useTaskState = create<State>()((set) => ({
  taskState: '',
  updateState: (state) => set({ taskState: state }),
}));


/* 'use client'
import {useEffect, useState } from 'react'

export const useTaskState = () => {
    const [taskState, setTaskState] = useState()
    console.log('estado guardado',taskState)
    const updateState = (state: any) => {
        setTaskState(state)
    }

    return {
      taskState,
      updateState
    }  
  } */