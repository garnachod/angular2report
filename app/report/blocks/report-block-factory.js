System.register(['./user-stats.component', 'rxjs/Rx'], function(exports_1) {
    var user_stats_component_1;
    var ReportBlockFactory;
    return {
        setters:[
            function (user_stats_component_1_1) {
                user_stats_component_1 = user_stats_component_1_1;
            },
            function (_1) {}],
        execute: function() {
            ReportBlockFactory = (function () {
                function ReportBlockFactory() {
                    this.reportBlocksMap = new Map();
                    this.reportBlocks = new Array();
                }
                ReportBlockFactory.prototype.getReportBlocks = function (configData) {
                    return [
                        new user_stats_component_1.UserStatsComponent(user_stats_component_1.UserStatsComponent, 'id1', 'p_molins', 'es', ['a', 'b']),
                        new user_stats_component_1.UserStatsComponent(user_stats_component_1.UserStatsComponent, 'id2', 'p_molins', 'es', ['a', 'b']),
                        new user_stats_component_1.UserStatsComponent(user_stats_component_1.UserStatsComponent, 'id3', 'p_molins', 'es', ['a', 'b']),
                        new user_stats_component_1.UserStatsComponent(user_stats_component_1.UserStatsComponent, 'id4', 'p_molins', 'es', ['a', 'b']),
                        new user_stats_component_1.UserStatsComponent(user_stats_component_1.UserStatsComponent, 'id5', 'p_molins', 'es', ['a', 'b']),
                    ];
                };
                return ReportBlockFactory;
            })();
            exports_1("ReportBlockFactory", ReportBlockFactory);
        }
    }
});
//# sourceMappingURL=report-block-factory.js.map