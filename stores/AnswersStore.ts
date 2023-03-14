import { create } from 'zustand'
import {IAnswer} from "@/interfaces/IAnswer";
import {IAnswersState} from "@/interfaces/IAnswersState";

export const useAnswersStore = create<IAnswersState>((set) => ({
    answers: [] as IAnswer[],
    setAnswers: (answers: IAnswer[]) => set({ answers }),
}))
