import { Block } from '../blocks/block';
import { JSONService } from './json.service';
import { Inject } from 'angular2/core';
import 'rxjs/Rx';
export class BlockData {

    constructor(@Inject(JSONService) private service: JSONService) {

    }

    getData(block: Block) {
        
        switch(block.componentName) {
            case "user-stats":
                return this.service.getData("/json/clientes/p_molins/json/stats.json");

            default:
                return this.service.getData("");
        }
    }

}
