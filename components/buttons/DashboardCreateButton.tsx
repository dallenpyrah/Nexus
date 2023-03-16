import styles from '@/styles/components/CreateIssueComponent.module.css'
import {Add} from "@mui/icons-material";
import {IDashboardCreateButtonProps} from "@/interfaces/props/IDashboardCreateButtonProps";
import {useRouter} from "next/router";

export const DashboardCreateButton = (props: IDashboardCreateButtonProps) => {
    const router = useRouter();

    const handleClick = async () => {
        await router.push(props.url);
    }

    return (
        <div className={styles.create_issue_row} onClick={handleClick}>
            <div className={styles.create_issue_column}>
                <h1 className={styles.create_issue_title}>
                    <Add className={"mr-2"}/>
                    {props.text}
                </h1>
            </div>
        </div>
    );
}
