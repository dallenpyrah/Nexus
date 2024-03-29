import styles from '@/styles/components/NavigationToolBar.module.css'
import {SearchBar} from "@/components/search-bars/SearchBar";
import {Notifications} from "@mui/icons-material";
import {SettingsDropdown} from "@/components/dropdowns/SettingsDropdown";

export const NavigationToolBar = () => {
    return (
        <div className={styles.header_row}>
            <h1 className={styles.title}>Nexus</h1>
            <SearchBar/>
            <Notifications className={styles.notifications_icon}/>
            <SettingsDropdown/>
        </div>
    )
}
