import {IQuestion} from "@/interfaces/IQuestion";

export class UserQuestionsService {

    async getUserQuestions() : Promise<IQuestion[]> {
        return [{
            id: 1,
            title: "What is the capital of France?",
            description: "The capital of France is Paris.",
        }];
    }

    async getSavedQuestions() : Promise<IQuestion[]> {
        return [{
            id: 1,
            title: "What is the capital of Belgium?",
            description: "The capital of Belgium is Brussels.",
        }];
    }
}
