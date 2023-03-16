import { create } from 'zustand'
import {Question} from "@/types/Question";
import {IQuestionsState} from "@/interfaces/state/IQuestionsState";

export const useQuestionsStore = create<IQuestionsState>((set) => ({
    questions: [] as Question[],
    setQuestions: (questions: Question[]) => set({ questions }),
}))
