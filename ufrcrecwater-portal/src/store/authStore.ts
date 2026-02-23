import { AuthState } from '@/types/state'
import { RoleType } from '@prisma/client'
import { create } from 'zustand'

export const useAuthStore = create<AuthState>((set) => ({
    user_id: null,
    user_name: null,
    role: "admin",
    email: null,
    setUserId: (user_id: string | null) => set(() => ({ user_id: user_id })),
    setUserName: (user_name: string | null) => set(() => ({ user_name: user_name })),
    setRole: (role: RoleType | null) => set(() => ({ role: role })),
    setEmail: (email: string | null) => set(() => ({ email: email }))
}))