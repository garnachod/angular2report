import { Block } from './block';
import { UserStatsComponent } from './user-stats.component';
import { JSONService } from '../services/json-service';
import 'rxjs/Rx';

export class BlockFactory {

    private blocksMap: Map<string, any> = new Map<string, any>();
    private reportBlocks = new Array<Block>();

    getBlocks(configData: any) {
        // todo replace mock
        return [
            {
                    directive: UserStatsComponent,
                    id: 'id1',
                    name: 'p_molins',
                    language: 'es',
                    range: ['a', 'b']
            }
        ];
    }
}
