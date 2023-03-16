import {Answer} from "@/types/Answer";

export interface IAnswersState {
    answers: Answer[];
    setAnswers: (answers: Answer[]) => void;
}
