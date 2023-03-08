import styles from '@/styles/pages/Dashboard.module.css'
import {SearchBar} from "@/components/SearchBar";
import {
    Notifications,
    Settings
} from "@mui/icons-material";

export default function Dashboard () {
    return (
        <div className={styles.container}>
            <div className={styles.header_row}>
                <h1 className={styles.title}>Nexus</h1>
                <SearchBar/>
                <Notifications className={styles.notifications_icon}/>
                <Settings className={styles.settings_icon}/>
            </div>
            <div className={styles.dashboard_hub_row}>

            </div>
            <div className={styles.dashboard_content_row}>
                <div className={styles.dashboard_content_column}>
                    <h1>
                        My Groups
                    </h1>
                </div>
                <div className={styles.dashboard_content_column}>
                    <h1>
                        My Issues
                    </h1>
                </div>
            </div>
        </div>
    );
}
