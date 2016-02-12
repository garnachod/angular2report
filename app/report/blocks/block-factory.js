System.register(['./block', "./basic-user-stats.component", "./cloud-component.component", './user-stats.component', './community-network.component', './betweenness-network.component', './relevance-network.component', './extended-ldavis.component', './ldavis.component', './team-sentiment.component', './hashtag-activity.component', './team-activity.component', 'rxjs/Rx'], function(exports_1) {
    var block_1, basic_user_stats_component_1, cloud_component_component_1, user_stats_component_1, community_network_component_1, betweenness_network_component_1, relevance_network_component_1, extended_ldavis_component_1, ldavis_component_1, team_sentiment_component_1, hashtag_activity_component_1, team_activity_component_1;
    var BlockFactory;
    return {
        setters:[
            function (block_1_1) {
                block_1 = block_1_1;
            },
            function (basic_user_stats_component_1_1) {
                basic_user_stats_component_1 = basic_user_stats_component_1_1;
            },
            function (cloud_component_component_1_1) {
                cloud_component_component_1 = cloud_component_component_1_1;
            },
            function (user_stats_component_1_1) {
                user_stats_component_1 = user_stats_component_1_1;
            },
            function (community_network_component_1_1) {
                community_network_component_1 = community_network_component_1_1;
            },
            function (betweenness_network_component_1_1) {
                betweenness_network_component_1 = betweenness_network_component_1_1;
            },
            function (relevance_network_component_1_1) {
                relevance_network_component_1 = relevance_network_component_1_1;
            },
            function (extended_ldavis_component_1_1) {
                extended_ldavis_component_1 = extended_ldavis_component_1_1;
            },
            function (ldavis_component_1_1) {
                ldavis_component_1 = ldavis_component_1_1;
            },
            function (team_sentiment_component_1_1) {
                team_sentiment_component_1 = team_sentiment_component_1_1;
            },
            function (hashtag_activity_component_1_1) {
                hashtag_activity_component_1 = hashtag_activity_component_1_1;
            },
            function (team_activity_component_1_1) {
                team_activity_component_1 = team_activity_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            BlockFactory = (function () {
                function BlockFactory() {
                    this.directivesMap = new Map();
                    this.reportBlocks = new Array();
                    this.directivesMap['user-stats'] = user_stats_component_1.UserStatsComponent;
                    this.directivesMap['basic-user-stats'] = basic_user_stats_component_1.BasicUserStatsComponent;
                    this.directivesMap['hashtag-activity'] = hashtag_activity_component_1.HashtagActivityComponent;
                    this.directivesMap['team-activity'] = team_activity_component_1.TeamActivityComponent;
                    this.directivesMap['community-network'] = community_network_component_1.CommunityNetworkComponent;
                    this.directivesMap['betweenness-network'] = betweenness_network_component_1.BetweennessNetworkComponent;
                    this.directivesMap['relevance-network'] = relevance_network_component_1.RelevanceNetworkComponent;
                    this.directivesMap['ldavis'] = ldavis_component_1.LDAvisComponent;
                    this.directivesMap['extended-ldavis'] = extended_ldavis_component_1.ExtendedLDAvisComponent;
                    this.directivesMap['team-sentiment'] = team_sentiment_component_1.TeamSentimentComponent;
                    this.directivesMap['cloud'] = cloud_component_component_1.CloudComponent;
                    //TODO: add more directives...
                }
                BlockFactory.prototype.getBlocks = function (configData) {
                    var _this = this;
                    var blocks = new Array();
                    if (configData) {
                        var name_1 = configData.name;
                        var language = configData.language;
                        var year = configData.year;
                        var month = configData.month;
                        var i = 0;
                        if (configData.components) {
                            configData.components.forEach(function (component) {
                                blocks.push(new block_1.Block(component, _this.directivesMap[component], name_1, language, year, month));
                                i++;
                            });
                        }
                    }
                    else {
                        console.error('BlockFactory didn\'t get config data');
                    }
                    return blocks;
                };
                return BlockFactory;
            })();
            exports_1("BlockFactory", BlockFactory);
        }
    }
});
//# sourceMappingURL=block-factory.js.map