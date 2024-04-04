import { create } from 'zustand'

interface LoginState {
  login: boolean
  updateAuth: () => void
}
export const useAuth = create<LoginState>()((set) => ({
  login: false,
  updateAuth: () => set((state) => ({ login: !state.login })),
}))