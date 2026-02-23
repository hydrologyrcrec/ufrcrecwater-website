"use client"

import { useAuthStore } from "@/store/authStore"

export default function AdminOnly({ children }: { children: React.ReactNode }) {
    const role = useAuthStore((state) => state.role)
    if (role=== null || role !== "admin") return null
    return <>{children}</>
}