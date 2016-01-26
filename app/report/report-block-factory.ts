import { ReportBlock } from './report-block';
import { UserStatsComponent } from './blocks/user-stats.component';

export class ReportBlockFactory {

    private reportBlocksMap: Map<string, ReportBlock> = new Map<string, ReportBlock>();

    constructor () {
        this.reportBlocksMap['user-stats'] = UserStatsComponent;
    }

    getReportBlocks(configData:any) {
        var reportBlocks = new Array<ReportBlock>();

        reportBlocks = configData.components.map(component => {
            this.reportBlocksMap[component.name];
        });

        return reportBlocks;
    }
}
