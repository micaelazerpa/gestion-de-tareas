'use client'
import { postLogin } from '@/services/user.services'
import { useState } from 'react'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [token, setToken] = useState<string | null>(null)

  const searchUser = async (body: any) => {
    setIsLoading(true)
    try {
      const authToken = await postLogin(body);
      setToken(authToken);
    } catch (error) {
      console.error('Error: ', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    token,
    searchUser
  }
}