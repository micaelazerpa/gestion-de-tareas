'use client'
import { putTask } from '@/services/task.services'
import { useState } from 'react'

export const useUpdateTask = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const updateTask = async (id: any, body: any, token: any) => {
    setIsLoading(true)
    try {
      await putTask(id, body, token)
    } catch (error) {
      console.error('Error: ', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    updateTask
  }
}