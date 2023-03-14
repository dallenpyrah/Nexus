import styles from '@/styles/pages/Dashboard.module.css'
import {SearchBar} from "@/components/SearchBar";
import {Notifications, Settings} from "@mui/icons-material";
import {Divider} from "@mui/material";
import {QuestionComponent} from "@/components/QuestionComponent";
import {CreateQuestionButton} from "@/components/CreateQuestionButton";
import {QuestionTitleHeader} from "@/components/QuestionTitleHeader";
import {useState} from "react";
import {DashboardService} from "@/services/DashboardService";
import {TabType} from "@/enums/TabTypes";
import {QuestionsList} from "@/components/QuestionsList";

const dashboardService = new DashboardService();

export default function Dashboard () {
    const [activeTab, setActiveTab] = useState("my_questions");

    const isMyQuestionsTabActive = dashboardService.isTabActive(activeTab, TabType.MY_QUESTIONS);
    const isMyAnswersTabActive = dashboardService.isTabActive(activeTab, TabType.MY_ANSWERS);
    const isSavedQuestionsTabActive = dashboardService.isTabActive(activeTab, TabType.SAVED_QUESTIONS);
    const isSavedAnswersTabActive = dashboardService.isTabActive(activeTab, TabType.SAVED_ANSWERS);

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
                        <QuestionTitleHeader title={"My Questions"} isActive={isMyQuestionsTabActive} setActiveTab={setActiveTab} tabType={TabType.MY_QUESTIONS} />
                        <QuestionTitleHeader title={"My Answers"} isActive={isMyAnswersTabActive} setActiveTab={setActiveTab} tabType={TabType.MY_ANSWERS}  />
                        <QuestionTitleHeader title={"Saved Questions"} isActive={isSavedQuestionsTabActive} setActiveTab={setActiveTab} tabType={TabType.SAVED_QUESTIONS}  />
                        <QuestionTitleHeader title={"Saved Answers"} isActive={isSavedAnswersTabActive} setActiveTab={setActiveTab} tabType={TabType.SAVED_ANSWERS}  />
                    </div>
                    <p className={styles.my_issues_sub_title}>
                        All of the issues you have created or contributed on will appear here
                    </p>
                    <div>
                        <QuestionsList questions={["Test"]} />
                        <CreateQuestionButton/>
                    </div>
                </div>
            </div>
        </div>
    );
}
