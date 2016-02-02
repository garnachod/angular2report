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
                                blocks.push(new block_1.Block(_this.directivesMap[component], id, name_1, language, range));
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