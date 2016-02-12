import { Block } from '../blocks/block';
import { JSONService } from './json.service';
import { Inject } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
export class BlockData {

    constructor(@Inject(JSONService) private service: JSONService) {
    }

    getData(block: Block) {

        switch(block.componentName) {

            case "user-stats":
                return this.service.getData("/informe/clientes/" + block.name + "/" + block.year +  "/" + block.month + "/json/stats.json");

            case "basic-user-stats":
                return this.service.getData("/informe/clientes/p_molins/2016/03/json/stats.json");

            case "hashtag-activity":
                return this.service.getData("/informe/clientes/p_molins/2016/03/json/activity.json");

            case "team-activity":
                return this.service.getData("/informe/clientes/p_molins/2016/03/json/teams.json");

            case "ldavis":
                return this.service.getData("/informe/clientes/p_molins/2016/03/json/terms.json");

            case "extended-ldavis":
                return this.service.getData("/informe/clientes/p_molins/2016/03/json/terms.json");

            case "team-sentiment":
                return this.service.getData("/informe/clientes/p_molins/2016/03/json/sentiments.json");

            case "cloud":
                return this.service.getData("/informe/clientes/p_molins/2016/03/json/cloud.json");

            case "community-network":
                return Observable.create((subscriber) => {
                  subscriber.next("/informe/clientes/p_molins/2016/03/img/clusters.png").complete();
                });

            case "betweenness-network":
                return Observable.create((subscriber) => {
                    subscriber.next("/informe/clientes/p_molins/2016/03/img/betweenness.png").complete();
                });

            case "relevance-network":
                return Observable.create((subscriber) => {
                    subscriber.next("/informe/clientes/p_molins/2016/03/img/pagerank.png").complete();
                });

            default:
                console.error('BlockData service couldn\'t identify the block named: ' + block.componentName);
                return Observable.create((subscriber) => {
                    subscriber.next("Error").complete();
                });

        }
    }

}
