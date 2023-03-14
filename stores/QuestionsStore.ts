import { create } from 'zustand'
import {IQuestion} from "@/interfaces/IQuestion";
import {IQuestionsState} from "@/interfaces/IQuestionsState";

export const useQuestionsStore = create<IQuestionsState>((set) => ({
    questions: [] as IQuestion[],
    setQuestions: (questions: IQuestion[]) => set({ questions }),
}))
