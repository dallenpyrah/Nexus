import { create } from 'zustand'
import {Answer} from "@/types/Answer";
import {IAnswersState} from "@/interfaces/state/IAnswersState";

export const useAnswersStore = create<IAnswersState>((set) => ({
    answers: [] as Answer[],
    setAnswers: (answers: Answer[]) => set({ answers }),
}))
