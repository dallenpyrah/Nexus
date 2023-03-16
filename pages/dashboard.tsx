import styles from '@/styles/pages/Dashboard.module.css'
import {SearchBar} from "@/components/SearchBar";
import {Notifications, Settings} from "@mui/icons-material";
import {Divider} from "@mui/material";
import {DashboardCreateButton} from "@/components/DashboardCreateButton";
import {DashboardTitleHeader} from "@/components/DashboardTitleHeader";
import {useEffect, useState} from "react";
import {DashboardService} from "@/services/DashboardService";
import {TabType} from "@/enums/TabTypes";
import {QuestionsList} from "@/components/QuestionsList";
import {UserQuestionsService} from "@/services/UserQuestionsService";
import {UserAnswersService} from "@/services/UserAnswersService";
import {useQuestionsStore} from "@/stores/QuestionsStore";
import {useAnswersStore} from "@/stores/AnswersStore";
import {AnswersList} from "@/components/AnswersList";

const dashboardService = new DashboardService();
const userQuestionsService = new UserQuestionsService();
const userAnswersService = new UserAnswersService();

export default function Dashboard () {
    const [activeTab, setActiveTab] = useState(TabType.MY_QUESTIONS);
    const { setAnswers, answers } = useAnswersStore();
    const { setQuestions, questions } = useQuestionsStore();

    const isMyQuestionsTabActive = dashboardService.isTabActive(activeTab, TabType.MY_QUESTIONS);
    const isMyAnswersTabActive = dashboardService.isTabActive(activeTab, TabType.MY_ANSWERS);
    const isSavedQuestionsTabActive = dashboardService.isTabActive(activeTab, TabType.SAVED_QUESTIONS);
    const isSavedAnswersTabActive = dashboardService.isTabActive(activeTab, TabType.SAVED_ANSWERS);
    const isMyTopicsTabActive = dashboardService.isTabActive(activeTab, TabType.MY_TOPICS);
    const isSubscribedTopicsTabActive = dashboardService.isTabActive(activeTab, TabType.SUBSCRIBED_TOPICS);

    async function displayActiveTabInformation() {
        switch (activeTab) {
            case TabType.MY_QUESTIONS:
                const userQuestions = await userQuestionsService.getUserQuestions();
                setQuestions(userQuestions)
                break;
            case TabType.MY_ANSWERS:
                const userAnswers = await userAnswersService.getUserAnswers();
                setAnswers(userAnswers);
                break;
            case TabType.SAVED_QUESTIONS:
                const savedQuestions = await userQuestionsService.getSavedQuestions();
                setQuestions(savedQuestions);
                break;
            case TabType.SAVED_ANSWERS:
                const savedAnswers = await userAnswersService.getSavedAnswers();
                setAnswers(savedAnswers);
                break;
        }
    }

    useEffect(() => {
        displayActiveTabInformation()
    }, [activeTab]);

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
                        <DashboardTitleHeader title={"My Questions"} isActive={isMyQuestionsTabActive} setActiveTab={setActiveTab} tabType={TabType.MY_QUESTIONS} />
                        <DashboardTitleHeader title={"Saved Questions"} isActive={isSavedQuestionsTabActive} setActiveTab={setActiveTab} tabType={TabType.SAVED_QUESTIONS}  />
                        <DashboardTitleHeader title={"My Answers"} isActive={isMyAnswersTabActive} setActiveTab={setActiveTab} tabType={TabType.MY_ANSWERS}  />
                        <DashboardTitleHeader title={"Saved Answers"} isActive={isSavedAnswersTabActive} setActiveTab={setActiveTab} tabType={TabType.SAVED_ANSWERS}  />
                        <DashboardTitleHeader title={"My Topics"} isActive={isMyTopicsTabActive} setActiveTab={setActiveTab} tabType={TabType.MY_TOPICS}  />
                        <DashboardTitleHeader title={"Subscribed Topics"} isActive={isSubscribedTopicsTabActive} setActiveTab={setActiveTab} tabType={TabType.SUBSCRIBED_TOPICS}  />
                    </div>
                    <div>
                        {(isMyQuestionsTabActive || isSavedQuestionsTabActive) && <QuestionsList questions={questions} />}
                        {(isMyAnswersTabActive || isSavedAnswersTabActive) && <AnswersList answers={answers} />}
                        {(isMyQuestionsTabActive || isSavedQuestionsTabActive) && <DashboardCreateButton text={"Create Question"}/>}
                        {(isMyTopicsTabActive || isSubscribedTopicsTabActive) && <DashboardCreateButton text={"Create Topic"}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
