import {TabType} from "@/enums/TabTypes";

export class DashboardService {
    constructor() {

    }

    public isTabActive(activeTab: string, tabType: TabType): boolean {
        return activeTab.toUpperCase() === tabType;
    }

}
