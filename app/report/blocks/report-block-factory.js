System.register(['./user-stats.component', 'rxjs/Rx'], function(exports_1) {
    "use strict";
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
                ReportBlockFactory.prototype.loadConfig = function (configData) {
                    var _this = this;
                    configData.components.forEach(function (component) {
                        console.log('foreach ' + component);
                        switch (component) {
                            case 'user-stats':
                                _this.reportBlocks.push(new user_stats_component_1.UserStatsComponent(user_stats_component_1.UserStatsComponent, 'id', 'name', 'es', ['a', 'b']));
                                break;
                        }
                    });
                };
                ReportBlockFactory.prototype.getReportBlocks = function () {
                    return this.reportBlocks;
                };
                return ReportBlockFactory;
            }());
            exports_1("ReportBlockFactory", ReportBlockFactory);
        }
    }
});
//# sourceMappingURL=report-block-factory.js.map