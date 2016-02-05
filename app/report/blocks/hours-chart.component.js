System.register(["../services/global-color.service", "angular2/core", "./data-component"], function(exports_1) {
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
    var global_color_service_1, core_1, data_component_1;
    var HoursChartComponent;
    return {
        setters:[
            function (global_color_service_1_1) {
                global_color_service_1 = global_color_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (data_component_1_1) {
                data_component_1 = data_component_1_1;
            }],
        execute: function() {
            HoursChartComponent = (function (_super) {
                __extends(HoursChartComponent, _super);
                function HoursChartComponent(colorConfig) {
                    _super.call(this);
                    this.colorConfig = colorConfig;
                    this.topic = -1;
                    this.values = [];
                    this.elemento = $('#hoursChart');
                    this.topic = -1;
                }
                HoursChartComponent.prototype.setData = function (data) {
                    this.data = data;
                    this.parseData(data);
                };
                HoursChartComponent.prototype.parseData = function (obj) {
                    var scrollPos;
                    if (this.topic === -1) {
                    }
                    else {
                        this.values = obj[this.topic];
                    }
                    scrollPos = $(document).scrollTop(); // Prevent scrolling when redrawing chart!
                    this.drawChart();
                    $(document).scrollTop(scrollPos);
                };
                HoursChartComponent.prototype.setTopic = function (i) {
                    this.topic = i;
                    this.parseData(this.data);
                };
                HoursChartComponent.prototype.drawChart = function () {
                    if (this.topic === -1) {
                        this.elemento.append('<section class="alert alert-info"> ↑ Seleccione un tema para obtener su gráfica de actividad media ↑</section>');
                    }
                    else {
                        this.elemento.highcharts({
                            title: {
                                text: ''
                            },
                            chart: {
                                zoomType: 'x'
                            },
                            credits: {
                                enabled: false
                            },
                            tooltip: {
                                headerFormat: '<b>{series.name}</b><br>',
                                pointFormat: '{point.x:%A %H:%M}'
                            },
                            xAxis: {
                                type: 'datetime',
                                tickInterval: 24 * 3600 * 1000,
                                labels: {
                                    format: '{value: %A}',
                                    x: 30,
                                    align: 'center'
                                }
                            },
                            yAxis: {
                                title: {
                                    text: 'Actividad acumulada'
                                }
                            },
                            legend: {
                                enabled: false
                            },
                            plotOptions: {
                                area: {
                                    fillColor: {
                                        linearGradient: {
                                            x1: 0,
                                            y1: 0,
                                            x2: 1,
                                            y2: 0
                                        },
                                        stops: [
                                            [0, this.colorConfig.primaryColor],
                                            [1, this.colorConfig.secondaryColor]
                                        ]
                                    },
                                    marker: {
                                        radius: 2
                                    },
                                    lineWidth: 1,
                                    states: {
                                        hover: {
                                            lineWidth: 1
                                        }
                                    },
                                    threshold: null
                                }
                            },
                            series: [{
                                    type: 'area',
                                    name: 'Actividad acumulada',
                                    color: this.colorConfig.primaryColor,
                                    data: this.values,
                                    pointStart: Date.UTC(2015, 0, 5),
                                    pointInterval: 15 * 60 * 1000
                                }]
                        });
                    }
                };
                HoursChartComponent = __decorate([
                    core_1.Component({
                        selector: 'hours-chart',
                        template: "\n    <section class=\"col-md-6\">\n       <div class=\"panel panel-default\">\n           <div id=\"hoursChart\"></div>\n           <p class=\"col-md-12 text-center\">\n               <a class=\"como-funciona\"\n                  data-toggle=\"popover\"\n                  data-content=\"Es una representaci\u00F3n construida a partir de los\n                  tweets, retweets y favoritos que ha\n                  realizado la comunidad de seguidores de tu\n                  cuenta. La altura de la gr\u00E1fica es la\n                  cantidad de actividad media en ese momento.\"\n                  data-placement=\"bottom\"\n                  data-original-title=\"Gr\u00E1fica de actividad media\"\n                  href=\"javascript:void(0);\">\n                   <span>Gr\u00E1fica de Actividad Media</span>\n                   <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n               </a>\n           </p>\n       </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [global_color_service_1.GlobalColor])
                ], HoursChartComponent);
                return HoursChartComponent;
            }(data_component_1.DataComponent));
            exports_1("HoursChartComponent", HoursChartComponent);
        }
    }
});
//# sourceMappingURL=hours-chart.component.js.map