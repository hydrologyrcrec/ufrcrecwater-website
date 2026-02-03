import { Slides } from '@/types/home'
import { create } from 'zustand'

type HomeState = {
    slidesLength: number
    currentSlide: number
    data: Slides
    setSlidesData: (data: Slides) => void
    setSlidesLength: (length: number) => void
    setCurrentSlide: (slide: number) => void
    left: () => void
    right: () => void
}

export const useUIStore = create<HomeState>((set) => ({
    slidesLength: 0,
    currentSlide: 0,
    data: [],
    setSlidesData: (data: Slides) => set(() => ({ data: data })),
    setSlidesLength: (length: number) => set(() => ({ slidesLength: length })),
    setCurrentSlide: (slide: number) => set(() => ({ currentSlide: slide })),
    left: () => set((state) => ({ currentSlide: state.currentSlide - 1 })),
    right: () => set((state) => ({ currentSlide: state.currentSlide + 1 })),
}))
