import { ReportBlock } from './report-block';
import { UserStatsComponent } from './user-stats.component';
import 'rxjs/Rx';

export class ReportBlockFactory {

    private reportBlocksMap: Map<string, any> = new Map<string, any>();
    private reportBlocks = new Array<ReportBlock>();

    loadConfig(configData: any) {
        configData.components.forEach((component) => {
            console.log('foreach ' + component);
            switch(component) {
                case 'user-stats':
                    this.reportBlocks.push(new UserStatsComponent(UserStatsComponent, 'id', 'name', 'es', ['a', 'b']));
                    break;
            }
        });
    }

    getReportBlocks() {
        return this.reportBlocks;
    }
}
