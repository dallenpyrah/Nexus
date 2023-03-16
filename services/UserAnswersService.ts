import {Answer} from "@/types/Answer";

export class UserAnswersService {

    async getUserAnswers() : Promise<Answer[]> {
        return [{
            response: "test",
            id: 1
        }]
    }

    async getSavedAnswers() : Promise<Answer[]> {
        return [{
            response: "test",
            id: 1
        }];
    }
}
