import { Block } from './block';
import { UserStatsComponent } from './user-stats.component';
import 'rxjs/Rx';

export class BlockFactory {

    private directivesMap: Map<string, any> = new Map<string, any>();
    private reportBlocks = new Array<Block>();

    constructor() {
        this.directivesMap['user-stats'] = UserStatsComponent;
        //TODO: add more directives...
    }

    getBlocks(configData: any) {

        var blocks : Array<Block> = new Array<Block>();

        if (configData){
            let name = configData.name;
            let language = configData.language;
            let range = configData.range;
            let service = null;
            let i = 0;
            if (configData.components) {
                configData.components.forEach((component) => {
                    var id = component + i;
                    blocks.push(new Block(this.directivesMap[component],id,name,language,range));
                    i++;
                });
            }
        } else {
            console.error('BlockFactory didn\'t get config data')
        }
        
        return blocks;
    }

}
