System.register(['angular2/platform/browser', './report/user-report.component', 'angular2/http', './report/services/global-color.service'], function(exports_1) {
    var browser_1, user_report_component_1, http_1, global_color_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (user_report_component_1_1) {
                user_report_component_1 = user_report_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (global_color_service_1_1) {
                global_color_service_1 = global_color_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(user_report_component_1.UserReportComponent, [http_1.HTTP_PROVIDERS, global_color_service_1.GlobalColor]);
        }
    }
});
//# sourceMappingURL=boot.js.map