
import { Block } from './block';
import { BasicUserStatsComponent } from "./basic-user-stats.component";
import { CloudComponent } from "./cloud-component.component";
import { UserStatsComponent } from './user-stats.component';
import { CommunityNetworkComponent } from './community-network.component';
import { BetweennessNetworkComponent } from './betweenness-network.component';
import { RelevanceNetworkComponent } from './relevance-network.component';
import { ExtendedLDAvisComponent } from './extended-ldavis.component';
import { LDAvisComponent } from './ldavis.component';
import { TeamSentimentComponent } from './team-sentiment.component';
import { HashtagActivityComponent } from './hashtag-activity.component';
import { TeamActivityComponent } from './team-activity.component';

import 'rxjs/Rx';

export class BlockFactory {

    private directivesMap: Map<string, any> = new Map<string, any>();
    private reportBlocks = new Array<Block>();

    constructor() {
        this.directivesMap['user-stats'] = UserStatsComponent;
        this.directivesMap['basic-user-stats'] = BasicUserStatsComponent;
        this.directivesMap['hashtag-activity'] = HashtagActivityComponent;
        this.directivesMap['team-activity'] = TeamActivityComponent;

        this.directivesMap['community-network'] = CommunityNetworkComponent;
        this.directivesMap['betweenness-network'] = BetweennessNetworkComponent;
        this.directivesMap['relevance-network'] = RelevanceNetworkComponent;

        this.directivesMap['ldavis'] = LDAvisComponent;
        this.directivesMap['extended-ldavis'] = ExtendedLDAvisComponent;
        this.directivesMap['team-sentiment'] = TeamSentimentComponent;
        this.directivesMap['cloud'] = CloudComponent;

        //TODO: add more directives...
    }

    getBlocks(configData: any) {

        var blocks : Array<Block> = new Array<Block>();

        if (configData){
            let name = configData.name;
            let language = configData.language;
            let year = configData.year;
            let month = configData.month;
            let i = 0;
            if (configData.components) {
                configData.components.forEach((component) => {
                    blocks.push(new Block(component, this.directivesMap[component],name ,language, year, month));
                    i++;
                });
            }
        } else {
            console.error('BlockFactory didn\'t get config data')
        }

        return blocks;
    }

}
