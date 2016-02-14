import { Block } from '../blocks/block';
import { JSONService } from './json.service';
import { Inject } from 'angular2/core';
import { Observable } from 'rxjs/Rx';
export class BlockData {

    constructor(@Inject(JSONService) private service: JSONService) {
    }

    getData(block: Block) {

        let userFolder = "/informe/clientes/" + block.name + "/" + block.year +  "/" + block.month;

        switch(block.componentName) {

            case "user-stats":
                return this.service.getData(userFolder + "/json/stats.json");

            case "basic-user-stats":
                return this.service.getData(userFolder + "/json/stats.json");

            case "hashtag-activity":
                return this.service.getData(userFolder + "/json/activity.json");

            case "team-activity":
                return this.service.getData(userFolder + "/json/teams.json");

            case "ldavis":
                return this.service.getData(userFolder + "/json/terms.json");

            case "extended-ldavis":
                return this.service.getData(userFolder + "/json/terms.json");

            case "team-sentiment":
                return this.service.getData(userFolder + "/json/sentiments.json");

            case "cloud":
                return this.service.getData(userFolder + "/json/cloud.json");

            case "community-network":
                return Observable.create((subscriber) => {
                  subscriber.next(userFolder + "/img/clusters.png").complete();
                });

            case "betweenness-network":
                return Observable.create((subscriber) => {
                    subscriber.next(userFolder + "/img/betweenness.png").complete();
                });

            case "relevance-network":
                return Observable.create((subscriber) => {
                    subscriber.next(userFolder + "/img/pagerank.png").complete();
                });

            default:
                console.error('BlockData service couldn\'t identify the block named: ' + block.componentName);
                return Observable.create((subscriber) => {
                    subscriber.next("Error").complete();
                });

        }
    }

}
