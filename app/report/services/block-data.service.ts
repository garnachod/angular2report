import { Block } from '../blocks/block';
import { JSONService } from './json.service';
import { Inject } from 'angular2/core';

export class BlockData {

    constructor(@Inject(JSONService) private service: JSONService) {

    }

    getData(block: Block) {
        console.log('bloque');
        console.log(block);
        switch(block.componentName) {
            case "user-stats":
                return this.service.getData("/json/clientes/p_molins/json/stats.json");

            default:
                // TODO: error json?
                return this.service.getData("/json/clientes/p_molins/json/stats.json");
        }
    }

}
