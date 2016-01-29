import { Block } from './block';
import { UserStatsComponent } from './user-stats.component';
import { JSONService } from '../services/json-service';
import 'rxjs/Rx';

export class BlockFactory {

    private directivesMap: Map<string, any> = new Map<string, any>();
    private reportBlocks = new Array<Block>();

    constructor() {
        this.directivesMap['user-stats'] = UserStatsComponent;
    }

    getBlocks(configData: any) {

        var name = configData.name;
        var language = configData.language;
        var range = configData.range;
        var service = null;
        var blocks : Array<Block> = new Array<Block>();
        var i = 0;

        // ver. seq. for unique ids
        if (!configData.components) {

            configData.components.forEach((component) => {
                var id = component + i;
                blocks.push(new Block(this.directivesMap[component],id,name,language,range,service));
                i++;
            });
        }

        return blocks;
    }

}
