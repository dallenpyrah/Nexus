import styles from '@/styles/components/IssueComponent.module.css';
import {Avatar} from "@mui/material";

interface QuestionComponentProps {
    title: string;
    description: string;
}

export const QuestionComponent = (props: QuestionComponentProps) => {
    return (
        <div className={`${styles.issue_row}`}>
            <Avatar className="mr-4 ml-2" />
            <div className={""}>
                <div className={`${styles.title}`}>
                    {props.title}
                </div>
                <div className={`${styles.description}`}>{props.description}</div>
            </div>
        </div>
    );
};
