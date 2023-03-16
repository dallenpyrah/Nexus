import {Question} from "@/types/Question";

export class UserQuestionsService {

    async getUserQuestions() : Promise<Question[]> {
        return [{
            id: 1,
            title: "What is the capital of France?",
            description: "The capital of France is Paris.",
        }];
    }

    async getSavedQuestions() : Promise<Question[]> {
        return [{
            id: 1,
            title: "What is the capital of Belgium?",
            description: "The capital of Belgium is Brussels.",
        }];
    }
}
