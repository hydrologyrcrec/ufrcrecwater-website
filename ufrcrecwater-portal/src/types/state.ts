import { RoleType } from "@prisma/client"
import { Slides } from "./home"

export type HomeState = {
    slidesLength: number
    currentSlide: number
    data: Slides
    setSlidesData: (data: Slides) => void
    setSlidesLength: (length: number) => void
    setCurrentSlide: (slide: number) => void
    left: () => void
    right: () => void
}

export type PageKey = 
| "research"
| "publications"
| "team"
| "facilities"
| "instrumentation"
| "news"
| "conferences"
| "applications"
| "gallery"
| "";


export type SelectionState = {
    page: PageKey
    setPage: (page: PageKey) => void
    cardId: string
    setCardId: (id: string) => void
    editState: boolean
    setEditState: (state: boolean) => void
    deleteState: boolean
    setDeleteState: (state: boolean) => void
    saveState: boolean
    setSaveState: (state: boolean) => void
    cancelState: boolean
    setCancelState: (state: boolean) => void
}

export type AuthState = {
    user_id: string | null
    user_name: string | null
    role: RoleType | null
    email: string | null
    setUserId: (user_id: string | null) => void
    setUserName: (user_name: string | null) => void
    setRole: (role: RoleType | null) => void
    setEmail: (email: string | null) => void
}