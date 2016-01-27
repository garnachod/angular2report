import { ReportBlock } from './report-block';
import { UserStatsComponent } from './user-stats.component';
import 'rxjs/Rx';

export class ReportBlockFactory {

    private reportBlocksMap: Map<string, any> = new Map<string, any>();
    private reportBlocks = new Array<ReportBlock>();

    getReportBlocks(configData: any) {

        return [
            new UserStatsComponent(UserStatsComponent, 'id1', 'p_molins', 'es', ['a', 'b']),
            new UserStatsComponent(UserStatsComponent, 'id2', 'p_molins', 'es', ['a', 'b']),
            new UserStatsComponent(UserStatsComponent, 'id3', 'p_molins', 'es', ['a', 'b']),
            new UserStatsComponent(UserStatsComponent, 'id4', 'p_molins', 'es', ['a', 'b']),
            new UserStatsComponent(UserStatsComponent, 'id5', 'p_molins', 'es', ['a', 'b']),
        ];
    }
}
