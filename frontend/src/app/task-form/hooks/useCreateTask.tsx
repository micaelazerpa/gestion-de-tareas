'use client'
import { postTask } from '@/services/task.services'
import { useState } from 'react'

export const useCreateTask = () => {
  const [isLoading, setIsLoading] = useState(false)
  const createTask = async (body: any, token: any) => {
    setIsLoading(true)
    try {
      await postTask(body, token)
    } catch (error) {
      console.error('Error: ', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    createTask
  }
}