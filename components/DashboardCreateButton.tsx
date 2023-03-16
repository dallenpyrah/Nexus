import styles from '@/styles/components/CreateIssueComponent.module.css'
import {Add} from "@mui/icons-material";
import {IDashboardCreateButton} from "@/interfaces/IDashboardCreateButton";

export const DashboardCreateButton = (props: IDashboardCreateButton) => {
    return (
        <div className={styles.create_issue_row}>
            <div className={styles.create_issue_column}>
                <h1 className={styles.create_issue_title}>
                    <Add className={"mr-2"}/>
                    {props.text}
                </h1>
            </div>
        </div>
    );
}
