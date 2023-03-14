import {IAnswer} from "@/interfaces/IAnswer";

export interface IAnswersState {
    answers: IAnswer[];
    setAnswers: (answers: IAnswer[]) => void;
}
