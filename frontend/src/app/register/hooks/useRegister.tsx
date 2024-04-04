'use client'
import { postUser } from '@/services/user.services'
import { useState } from 'react'

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const createUser = async (body: any) => {
    setIsLoading(true)
    try {
      await postUser(body)
    } catch (error) {
      console.error('Error: ', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    createUser
  }
}