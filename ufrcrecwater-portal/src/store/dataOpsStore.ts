import { PageKey } from '@/types/state'
import { create } from 'zustand'
import { SelectionState } from '@/types/state'

export const useSelectionStore = create<SelectionState>((set) => ({
    page: "",
    setPage: (page: PageKey) => set(() => ({ page: page })),
    cardId: "",
    setCardId: (id: string) => set(() => ({ cardId: id })),
    editState: true,
    setEditState: (state: boolean) => set(() => ({ editState: state })),
    deleteState: true,
    setDeleteState: (state: boolean) => set(() => ({ deleteState: state })),
    saveState: false,
    setSaveState: (state: boolean) => set(() => ({ saveState: state })),
    cancelState: false,
    setCancelState: (state: boolean) => set(() => ({ cancelState: state }))
}))
