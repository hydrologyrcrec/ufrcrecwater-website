import { Tool, } from '@/types/instrument'
import { Action, InstrumentState } from '@/types/state'
import { create } from 'zustand'

export const useInstrumentStore = create<InstrumentState>((set) => ({
    data: null,
    setInitialData: (data: {instrument_id: string, hasTools: boolean}[]) => 
        set((state) => {
            const newMap = new Map(data.map((item) => [
                item.instrument_id, 
                {   
                    hasTools: item.hasTools, 
                    isDataFetched: false, 
                    tools: [], 
                    currentIndex: 0
                }
            ]));
            return { data: newMap };
        }),
    setData: (instrument_id: string, tools: Tool[]) =>
        set((state) => {
            if (!state.data || !state.data.has(instrument_id)) return state
            const newMap = new Map(state.data)
            const entry = newMap.get(instrument_id)!
            newMap.set(instrument_id, {
            ...entry,
            tools,
            isDataFetched: true
            })
            return { data: newMap }
        }),
    setDataFetchStatus: (instrument_id: string, isDataFetched: boolean) =>
        set((state) => {
            if (!state.data || !state.data.has(instrument_id)) return state;
            const newMap = new Map(state.data);
            const entry = newMap.get(instrument_id)!;
            newMap.set(instrument_id, {
            ...entry,
            isDataFetched,
            });
            return { data: newMap };
        }),
    setCurrentInstrumentToolIndex: (instrument_id: string, action: Action) =>
        set((state) => {
            if (!state.data || !state.data.has(instrument_id)) return state;
            const newMap = new Map(state.data);
            const entry = newMap.get(instrument_id)!;
            const toolsLength = entry.tools.length+1;
            if (toolsLength === 0) return state;
            let newIndex = entry.currentIndex;
            if (action === "left") {
                newIndex = (newIndex - 1 + toolsLength) % toolsLength;
            } else if (action === "right") {
                newIndex = (newIndex + 1) % toolsLength;
            }
            newMap.set(instrument_id, {
            ...entry,
            currentIndex: newIndex,
            });
            return { data: newMap };
        }),
  }));
  