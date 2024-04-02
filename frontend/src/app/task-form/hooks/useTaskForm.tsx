'use client'
import { postTask } from '@/services/task.services'
import { useState } from 'react'

export const useRegisterTask = () => {
  const [isLoading, setIsLoading] = useState(false)
  const createTask = async (body: any) => {
    setIsLoading(true)
    try {
      console.log('Datos hook',body)
      await postTask(body)
      console.log('usuario registrado')
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