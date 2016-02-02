import { Block } from './block';
import { UserStatsComponent } from './user-stats.component';
import 'rxjs/Rx';

export class BlockFactory {

    private directivesMap: Map<string, any> = new Map<string, any>();
    private reportBlocks = new Array<Block>();

    constructor() {
        this.directivesMap['user-stats'] = UserStatsComponent;

    }

    getBlocks(configData: any) {

        var blocks : Array<Block> = new Array<Block>();
        var name, language, range, service, i;

        if (configData){
            name = configData.name;
            language = configData.language;
            range = configData.range;
            service = null;
            i = 0;
            // ver. seq. for unique ids
            if (configData.components) {
                configData.components.forEach((component) => {
                    var id = component + i;
                    blocks.push(new Block(this.directivesMap[component],id,name,language,range));
                    i++;
                });
            }
        } else {
            console.error('getBlocks didn\'t get config data')
        }
        console.log('Factory returning blocks:');
        console.log(blocks);
        return blocks;
    }

}
