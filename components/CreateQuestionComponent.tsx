import styles from '@/styles/components/CreateIssueComponent.module.css'
import {Add} from "@mui/icons-material";

export const CreateQuestionComponent = () => {
    return (
        <div className={styles.create_issue_row}>
            <div className={styles.create_issue_column}>
                <h1 className={styles.create_issue_title}>
                    <Add className={"mr-2"}/>
                    Create Question
                </h1>
            </div>
        </div>
    );
}
