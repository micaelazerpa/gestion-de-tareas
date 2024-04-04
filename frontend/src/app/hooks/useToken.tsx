import { create } from 'zustand'

interface TokenState {
  token: string
}
export const useToken = create<any>()((set) => ({
  token: '',
  setToken: (newToken: any) => set((state: any) => {
    if (state.token !== newToken){
      return {token: newToken }
    }
    return state
  })
}))