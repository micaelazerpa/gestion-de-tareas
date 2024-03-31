'use client'
import { postUser } from '@/services/user.services'
import { useState } from 'react'

export const useRegister = () => {
  const [isLoading, setIsLoading] = useState(false)
  const createUser = async (body: any) => {
    setIsLoading(true)
    try {
      await postUser(body)
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
    createUser
  }
}