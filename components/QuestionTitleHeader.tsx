import styles from "@/styles/pages/Dashboard.module.css";
import {Dispatch, SetStateAction} from "react";
import {TabType} from "@/enums/TabTypes";

interface IQuestionTitleHeaderProps {
    title: string;
    isActive: boolean;
    setActiveTab: Dispatch<SetStateAction<TabType>>;
    tabType: TabType;
}

export const QuestionTitleHeader = (props: IQuestionTitleHeaderProps) => {
    return (
        <span
            className={`${styles.issue_title_dashboard} ${props.isActive ? 'text-black' : 'text-gray-400'} mr-8 hover:text-black transition-colors duration-300`}
            onClick={() => props.setActiveTab(props.tabType)}>{props.title}</span>
    )
}
