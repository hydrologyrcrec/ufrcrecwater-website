import { Slides } from '@/types/home'
import { HomeState } from '@/types/state'
import { create } from 'zustand'

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
