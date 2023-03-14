import {IQuestionListProps} from "@/interfaces/IQuestionListProps";
import {QuestionComponent} from "@/components/QuestionComponent";

export const QuestionsList = (props: IQuestionListProps) => {
    return (
        <div>
            {props.questions.map((question) => (
                <QuestionComponent title={"Test"} description={"Test"} />
            ))}
        </div>
    );
}
