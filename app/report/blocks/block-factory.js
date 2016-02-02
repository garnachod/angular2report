System.register(['./block', './user-stats.component', 'rxjs/Rx'], function(exports_1) {
    var block_1, user_stats_component_1;
    var BlockFactory;
    return {
        setters:[
            function (block_1_1) {
                block_1 = block_1_1;
            },
            function (user_stats_component_1_1) {
                user_stats_component_1 = user_stats_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            BlockFactory = (function () {
                function BlockFactory() {
                    this.directivesMap = new Map();
                    this.reportBlocks = new Array();
                    this.directivesMap['user-stats'] = user_stats_component_1.UserStatsComponent;
                }
                BlockFactory.prototype.getBlocks = function (configData) {
                    var _this = this;
                    var blocks = new Array();
                    var name, language, range, service, i;
                    if (configData) {
                        name = configData.name;
                        language = configData.language;
                        range = configData.range;
                        service = null;
                        i = 0;
                        // ver. seq. for unique ids
                        if (configData.components) {
                            configData.components.forEach(function (component) {
                                var id = component + i;
                                blocks.push(new block_1.Block(_this.directivesMap[component], id, name, language, range));
                                i++;
                            });
                        }
                    }
                    else {
                        console.error('getBlocks didn\'t get config data');
                    }
                    console.log('Factory returning blocks:');
                    console.log(blocks);
                    return blocks;
                };
                return BlockFactory;
            })();
            exports_1("BlockFactory", BlockFactory);
        }
    }
});
//# sourceMappingURL=block-factory.js.map