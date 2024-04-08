import { create } from 'zustand'

interface TokenState {
  token: string
  setToken: (newToken: any) => void;
}
export const useToken = create<TokenState>()((set) => ({
  token: '',
  setToken: (newToken) => set((state: any) => {
    if (state.token !== newToken){
      return {token: newToken }
    }
    return state
  })
})) 

/* 'use client'
import { useEffect, useState } from 'react'

export const useToken = () => {
  const [token, setToken] = useState<any | undefined>(undefined)
  console.log('token guardado',token)
   const updateToken = (newToken: any) => {
    if (newToken !== token) {
      console.log('Actualizando token:', newToken)
      setToken(newToken);
    }
  };
  useEffect(() => {
    if (token && token.length === 0) {
      console.log('token vacio?',token)
      updateToken('');
    }else{
      updateToken(token)
    }
  }, [token]); 
  
  return {
    token,
    setToken
  }  
} */
