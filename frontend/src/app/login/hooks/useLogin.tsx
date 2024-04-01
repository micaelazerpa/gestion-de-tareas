'use client'
import { getUser } from '@/services/user.services'
import { useState } from 'react'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false)
  const searchUser = async (body: any) => {
    setIsLoading(true)
    try {
      await getUser(body)
      console.log('inicio de sesión')
    } catch (error) {
      console.error('Error: ', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    searchUser
  }
}