import styles from '@/styles/pages/Dashboard.module.css'
import {SearchBar} from "@/components/SearchBar";
import {
    BugReport, BugReportTwoTone, Build, BuildTwoTone, GroupAddTwoTone,
    Notifications,
    Settings
} from "@mui/icons-material";
import {Button, Divider} from "@mui/material";
import {Hammersmith_One} from "next/dist/compiled/@next/font/dist/google";

export default function Dashboard () {
    return (
        <div className={styles.container}>
            <div className={styles.header_row}>
                <h1 className={styles.title}>Nexus</h1>
                <SearchBar/>
                <Notifications className={styles.notifications_icon}/>
                <Settings className={styles.settings_icon}/>
            </div>
            <Divider className={`${styles.divider}`}/>
            <div className={styles.dashboard_content_row}>
                <div className={styles.dashboard_content_column}>
                    <h1 className={styles.my_issues}>
                        My Issues
                    </h1>
                    <p className={styles.my_issues_sub_title}>
                        All of the issues you have created or contributed on will appear here
                    </p>
                    <div className={styles.issue_row}>
                        <BugReportTwoTone className={styles.issue_icon}/>
                        <div className={styles.issue_column}>
                            <h1 className={styles.issue_title}>
                                Issue Title
                            </h1>
                            <p className={styles.issue_sub_title}>
                                Issue Subtitle
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
