import styles from '@/styles/pages/Dashboard.module.css'
import {SearchBar} from "@/components/SearchBar";
import {
    Notifications,
    Settings
} from "@mui/icons-material";
import {Button, Divider} from "@mui/material";
import {QuestionComponent} from "@/components/QuestionComponent";
import {CreateQuestionComponent} from "@/components/CreateQuestionComponent";

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
                    <div className="mb-2">
                        <span className={`${styles.issue_title_dashboard} mr-2 bg-gray-800 text-white p-2 rounded`}>My Questions</span>
                        <span className={`${styles.issue_title_dashboard} mx-2 text-gray-400 hover:text-black transition-colors duration-300`}>My Answers</span>
                    </div>
                    <p className={styles.my_issues_sub_title}>
                        All of the issues you have created or contributed on will appear here
                    </p>
                    <div>
                        <QuestionComponent title={"Why hooks are the best thing to happen to React"} description={"Originally, React mainly used class components, which can be strenuous at times as you always had to switch between classes, higher-order components, and render props. With React hooks, you can now do all these without switching, using functional components."}/>
                        <QuestionComponent title={"Why hooks are the best thing to happen to React"} description={"Originally, React mainly used class components, which can be strenuous at times as you always had to switch between classes, higher-order components, and render props. With React hooks, you can now do all these without switching, using functional components."}/>
                        <QuestionComponent title={"Why hooks are the best thing to happen to React"} description={"Originally, React mainly used class components, which can be strenuous at times as you always had to switch between classes, higher-order components, and render props. With React hooks, you can now do all these without switching, using functional components."}/>
                        <QuestionComponent title={"Why hooks are the best thing to happen to React"} description={"Originally, React mainly used class components, which can be strenuous at times as you always had to switch between classes, higher-order components, and render props. With React hooks, you can now do all these without switching, using functional components."}/>
                        <CreateQuestionComponent/>
                    </div>
                </div>
            </div>
        </div>
    );
}
