import styles from "@/styles/components/IssueComponent.module.css";
import {Avatar} from "@mui/material";
import {IAnswerComponentProps} from "@/interfaces/IAnswerComponentProps";

export const AnswerComponent = (props: IAnswerComponentProps) => {
    return (
        <div className={`${styles.issue_row}`}>
            <Avatar className="mr-4 ml-2" />
            <div className={""}>
                <div className={`${styles.title}`}>
                    {props.response}
                </div>
            </div>
        </div>
    );
}
