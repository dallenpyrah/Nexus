import {IAnswerListProps} from "@/interfaces/IAnswerListProps";
import {AnswerComponent} from "@/components/AnswerComponent";

export const AnswersList = (props: IAnswerListProps) => {
    return (
        <div>
            {props.answers.map((answer) => (
                <AnswerComponent key={answer.id} response={answer.response} />
            ))}
        </div>
    );
}
