import {Question} from "@/types/Question";

export interface IQuestionsState {
    questions: Question[];
    setQuestions: (questions: Question[]) => void;
}
