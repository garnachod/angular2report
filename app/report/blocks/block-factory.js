System.register(['./block', './user-stats.component', './community-network.component', './betweenness-network.component', './relevance-network.component', './ldavis.component', 'rxjs/Rx'], function(exports_1) {
    "use strict";
    var block_1, user_stats_component_1, community_network_component_1, betweenness_network_component_1, relevance_network_component_1, ldavis_component_1;
    var BlockFactory;
    return {
        setters:[
            function (block_1_1) {
                block_1 = block_1_1;
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
            function (ldavis_component_1_1) {
                ldavis_component_1 = ldavis_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            BlockFactory = (function () {
                function BlockFactory() {
                    this.directivesMap = new Map();
                    this.reportBlocks = new Array();
                    this.directivesMap['user-stats'] = user_stats_component_1.UserStatsComponent;
                    this.directivesMap['community-network'] = community_network_component_1.CommunityNetworkComponent;
                    this.directivesMap['betweenness-network'] = betweenness_network_component_1.BetweennessNetworkComponent;
                    this.directivesMap['relevance-network'] = relevance_network_component_1.RelevanceNetworkComponent;
                    this.directivesMap['extended-ldavis'] = ldavis_component_1.ExtendedLDAvisComponent;
                    //TODO: add more directives...
                }
                BlockFactory.prototype.getBlocks = function (configData) {
                    var _this = this;
                    var blocks = new Array();
                    if (configData) {
                        var name_1 = configData.name;
                        var language = configData.language;
                        var range = configData.range;
                        var service = null;
                        var i = 0;
                        if (configData.components) {
                            configData.components.forEach(function (component) {
                                var id = component + i;
                                blocks.push(new block_1.Block(component, _this.directivesMap[component], id, name_1, language, range));
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
            }());
            exports_1("BlockFactory", BlockFactory);
        }
    }
});
//# sourceMappingURL=block-factory.js.map