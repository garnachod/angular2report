System.register(['./blocks/user-stats.component'], function(exports_1) {
    var user_stats_component_1;
    var ReportBlockFactory;
    return {
        setters:[
            function (user_stats_component_1_1) {
                user_stats_component_1 = user_stats_component_1_1;
            }],
        execute: function() {
            ReportBlockFactory = (function () {
                function ReportBlockFactory() {
                    this.reportBlocksMap = new Map();
                    this.reportBlocksMap['user-stats'] = user_stats_component_1.UserStatsComponent;
                }
                ReportBlockFactory.prototype.getReportBlocks = function (configData) {
                    var _this = this;
                    var reportBlocks = new Array();
                    reportBlocks = configData.components.map(function (component) {
                        _this.reportBlocksMap[component.name];
                    });
                    return reportBlocks;
                };
                return ReportBlockFactory;
            })();
            exports_1("ReportBlockFactory", ReportBlockFactory);
        }
    }
});
//# sourceMappingURL=report-block-factory.js.map