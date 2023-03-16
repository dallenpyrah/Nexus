import {IAnswer} from "@/interfaces/IAnswer";

export class UserAnswersService {

    async getUserAnswers() : Promise<IAnswer[]> {
        return [{
            response: "test",
            id: 1
        }]
    }

    async getSavedAnswers() : Promise<IAnswer[]> {
        return [{
            response: "test",
            id: 1
        }];
    }
}
