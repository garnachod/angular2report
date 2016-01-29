System.register(['./user-stats.component', 'rxjs/Rx'], function(exports_1) {
    var user_stats_component_1;
    var BlockFactory;
    return {
        setters:[
            function (user_stats_component_1_1) {
                user_stats_component_1 = user_stats_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            BlockFactory = (function () {
                function BlockFactory() {
                    this.blocksMap = new Map();
                    this.reportBlocks = new Array();
                }
                BlockFactory.prototype.getBlocks = function (configData) {
                    // todo replace mock
                    return [
                        {
                            directive: user_stats_component_1.UserStatsComponent,
                            id: 'id1',
                            name: 'p_molins',
                            language: 'es',
                            range: ['a', 'b']
                        }
                    ];
                };
                return BlockFactory;
            })();
            exports_1("BlockFactory", BlockFactory);
        }
    }
});
//# sourceMappingURL=report-block-factory.js.map