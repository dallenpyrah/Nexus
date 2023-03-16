import styles from '@/styles/pages/Dashboard.module.css';
import {DashboardCreateButton} from "@/components/DashboardCreateButton";
import {DashboardTitleHeader} from "@/components/DashboardTitleHeader";
import {Divider} from "@mui/material";
import {useCallback, useState} from "react";
import {DashboardService} from "@/services/DashboardService";
import {UserQuestionsService} from "@/services/UserQuestionsService";
import {UserAnswersService} from "@/services/UserAnswersService";
import {TabType} from "@/enums/TabTypes";
import {useQuestionsStore} from "@/stores/QuestionsStore";
import {useAnswersStore} from "@/stores/AnswersStore";
import {NavigationToolBar} from "@/components/NavigationToolBar";
import {QuestionComponent} from "@/components/QuestionComponent";
import {AnswerComponent} from "@/components/AnswerComponent";

const dashboardService = new DashboardService();
const userQuestionsService = new UserQuestionsService();
const userAnswersService = new UserAnswersService();

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState(TabType.MY_QUESTIONS);
    const {setAnswers, answers} = useAnswersStore();
    const {setQuestions, questions} = useQuestionsStore();

    const isMyQuestionsTabActive = dashboardService.isTabActive(activeTab, TabType.MY_QUESTIONS);
    const isMyAnswersTabActive = dashboardService.isTabActive(activeTab, TabType.MY_ANSWERS);
    const isSavedQuestionsTabActive = dashboardService.isTabActive(activeTab, TabType.SAVED_QUESTIONS);
    const isSavedAnswersTabActive = dashboardService.isTabActive(activeTab, TabType.SAVED_ANSWERS);
    const isMyTopicsTabActive = dashboardService.isTabActive(activeTab, TabType.MY_TOPICS);
    const isSubscribedTopicsTabActive = dashboardService.isTabActive(activeTab, TabType.SUBSCRIBED_TOPICS);

    const renderDashboardTitleHeader = (title: string, tabType: TabType) => (
        <DashboardTitleHeader
            title={title}
            isActive={dashboardService.isTabActive(activeTab, tabType)}
            setActiveTab={setActiveTab}
            tabType={tabType}
        />
    );

    useCallback(async () => {
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
    }, [activeTab]);

    return (
        <div className={"nexus-container"}>
            <NavigationToolBar/>
            <Divider className={`${styles.divider}`}/>
            <div className={styles.dashboard_content_row}>
                <div className={styles.dashboard_content_column}>
                    <div className="mb-2">
                        {renderDashboardTitleHeader("My Questions", TabType.MY_QUESTIONS)}
                        {renderDashboardTitleHeader("Saved Questions", TabType.SAVED_QUESTIONS)}
                        {renderDashboardTitleHeader("My Answers", TabType.MY_ANSWERS)}
                        {renderDashboardTitleHeader("Saved Answers", TabType.SAVED_ANSWERS)}
                        {renderDashboardTitleHeader("My Topics", TabType.MY_TOPICS)}
                        {renderDashboardTitleHeader("Subscribed Topics", TabType.SUBSCRIBED_TOPICS)}
                    </div>
                    <div>
                        {(isMyQuestionsTabActive || isSavedQuestionsTabActive) &&
                            questions.map((question) => (
                                <QuestionComponent key={question.id} title={question.title}
                                                   description={question.description}/>
                            ))}

                        {(isMyAnswersTabActive || isSavedAnswersTabActive) && answers.map((answer) => (
                            <AnswerComponent key={answer.id} response={answer.response}/>
                        ))}

                        {(isMyQuestionsTabActive || isSavedQuestionsTabActive) &&
                            <DashboardCreateButton text={"Create Question"} url={"/create-question"}/>}

                        {(isMyTopicsTabActive || isSubscribedTopicsTabActive) &&
                            <DashboardCreateButton text={"Create Topic"} url={"/create-topic"}/>}
                    </div>
                </div>
            </div>
        </div>
    );
}
