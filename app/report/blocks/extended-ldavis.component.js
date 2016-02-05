System.register(["./ldavis.component", "./hours-chart.component", "./user-bar-chart.component", 'angular2/core', '../services/global-color.service'], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var ldavis_component_1, hours_chart_component_1, user_bar_chart_component_1, core_1, global_color_service_1;
    var ExtendedLDAvisComponent;
    return {
        setters:[
            function (ldavis_component_1_1) {
                ldavis_component_1 = ldavis_component_1_1;
            },
            function (hours_chart_component_1_1) {
                hours_chart_component_1 = hours_chart_component_1_1;
            },
            function (user_bar_chart_component_1_1) {
                user_bar_chart_component_1 = user_bar_chart_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (global_color_service_1_1) {
                global_color_service_1 = global_color_service_1_1;
            }],
        execute: function() {
            ExtendedLDAvisComponent = (function (_super) {
                __extends(ExtendedLDAvisComponent, _super);
                function ExtendedLDAvisComponent(color, userBarChart, hoursChart) {
                    _super.call(this, color);
                    this.color = color;
                    this.userBarChart = userBarChart;
                    this.hoursChart = hoursChart;
                    $('.como-funciona').popover();
                }
                ExtendedLDAvisComponent.prototype.setData = function (data) {
                    this.userBarChart.setData(data.users);
                    this.hoursChart.setData(data.hours);
                    this.LDAvis($, '#lda', data, this.userBarChart, this.hoursChart, this.color);
                };
                ExtendedLDAvisComponent = __decorate([
                    core_1.Component({
                        providers: [user_bar_chart_component_1.UserBarChartComponent, hours_chart_component_1.HoursChartComponent],
                        directives: [user_bar_chart_component_1.UserBarChartComponent, hours_chart_component_1.HoursChartComponent],
                        selector: 'extended-ldavis',
                        template: "\n            <article id=\"ldavis\" class=\" hidden-sm hidden-xs\">\n                <div class=\"col-md-12\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"col-md-12\" id=\"lda\"></div>\n                        <p class=\"col-md-12 text-center\">\n                            <a class=\"como-funciona\"\n                               data-toggle=\"popover\"\n                               data-content=\"Los temas representan relaciones entre palabras.\n                               Al seleccionar un tema los paneles inferiores cambiar\u00E1n\n                               para representar la informaci\u00F3n relativa al mismo.\"\n                               data-placement=\"bottom\"\n                               data-original-title=\"Segmentaci\u00F3n en Tem\u00E1ticas del Contenido Publicado\"\n                               href=\"javascript:void(0);\">\n                                <span>Segmentaci\u00F3n en Tem\u00E1ticas del Contenido Publicado</span>\n                                <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </article>\n\n            <article id=\"charts\" class=\" hidden-sm hidden-xs\">\n                <user-bar-chart #userBarChart></user-bar-chart>\n                <hours-chart #hoursChart></hours-chart>\n            </article>\n    "
                    }),
                    __param(1, core_1.ViewChild('userBarChart')),
                    __param(2, core_1.ViewChild('hoursChart')), 
                    __metadata('design:paramtypes', [global_color_service_1.GlobalColor, user_bar_chart_component_1.UserBarChartComponent, hours_chart_component_1.HoursChartComponent])
                ], ExtendedLDAvisComponent);
                return ExtendedLDAvisComponent;
            }(ldavis_component_1.LDAvisComponent));
            exports_1("ExtendedLDAvisComponent", ExtendedLDAvisComponent);
        }
    }
});
//# sourceMappingURL=extended-ldavis.component.js.map