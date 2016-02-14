System.register(["./services/json.service", 'angular2/core', './report.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var json_service_1, core_1, report_component_1;
    var UserReportComponent;
    return {
        setters:[
            function (json_service_1_1) {
                json_service_1 = json_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (report_component_1_1) {
                report_component_1 = report_component_1_1;
            }],
        execute: function() {
            UserReportComponent = (function () {
                function UserReportComponent(service, elementRef) {
                    this.service = service;
                    this.elementRef = elementRef;
                    var elem = elementRef.nativeElement;
                    this.username = elem.getAttribute("username");
                    this.year = elem.getAttribute("year");
                    this.month = elem.getAttribute("month");
                }
                UserReportComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.service.getData('/informe/clientes/' + this.username + '/' + this.year + '/' + this.month + '/config.json').subscribe(function (data) {
                        if (data) {
                            _this.reportConfig = data;
                        }
                        else {
                            console.error('UserReportComponent received invalid config data.');
                        }
                    });
                };
                UserReportComponent = __decorate([
                    core_1.Component({
                        selector: 'user-report',
                        directives: [report_component_1.ReportComponent],
                        template: "\n    <section class=\"container\">\n        <section id=\"informe\">\n            <header class=\"row\">\n                <img id=\"logo-horizontal\" src=\"img/logo-horizontal.png\" class=\"img-responsive col-md-4\"/>\n            </header>\n            <article id=\"graphs\">\n                <section class=\"row\">\n                    <report *ngIf=reportConfig [config]=reportConfig></report>\n                </section>\n            </article>\n        </section>\n    </section>\n    ",
                        providers: [json_service_1.JSONService],
                    }), 
                    __metadata('design:paramtypes', [json_service_1.JSONService, core_1.ElementRef])
                ], UserReportComponent);
                return UserReportComponent;
            })();
            exports_1("UserReportComponent", UserReportComponent);
        }
    }
});
//# sourceMappingURL=user-report.component.js.map