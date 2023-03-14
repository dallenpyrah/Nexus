import {IQuestion} from "@/interfaces/IQuestion";

export interface IQuestionsState {
    questions: IQuestion[];
    setQuestions: (questions: IQuestion[]) => void;
}
