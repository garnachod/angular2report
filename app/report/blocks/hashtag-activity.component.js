System.register(["../services/global-color.service", "angular2/core", "./data-component"], function(exports_1) {
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
    var HashtagActivityComponent;
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
            HashtagActivityComponent = (function (_super) {
                __extends(HashtagActivityComponent, _super);
                function HashtagActivityComponent(colors) {
                    _super.call(this);
                    this.colors = colors;
                    this.values = [];
                    this.interval = 1;
                    this.element = $('#activityChart');
                    $('.como-funciona').popover();
                }
                HashtagActivityComponent.prototype.setData = function (data) {
                    this.data = data;
                    this.parseData(data);
                };
                HashtagActivityComponent.prototype.parseData = function (obj) {
                    var scrollPos;
                    this.initDate = obj.fechainicio;
                    this.values = obj.valores;
                    scrollPos = $(document).scrollTop(); // Prevent scrolling when redrawing chart!
                    this.drawChart();
                    $(document).scrollTop(scrollPos);
                };
                HashtagActivityComponent.prototype.drawChart = function () {
                    this.element.highcharts({
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
                            type: 'datetime'
                        },
                        yAxis: {
                            title: {
                                text: 'Tweets y retweets'
                            },
                            min: 0
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
                                        [0, this.colors.primaryColor],
                                        [1, this.colors.secondaryColor]
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
                                name: 'Actividad del Hashtag',
                                color: this.colors.primaryColor,
                                data: this.values,
                                pointStart: Date.UTC(parseInt(this.initDate.substring(0, 4)), parseInt(this.initDate.substring(5, 7)) - 1, this.initDate.substring(8, 11)),
                                pointInterval: this.interval * 60 * 1000
                            }]
                    });
                };
                HashtagActivityComponent = __decorate([
                    core_1.Component({
                        selector: 'hashtag-activity',
                        template: "\n    <section class=\"col-md-6\">\n          <div class=\"panel panel-default\">\n              <div id=\"activityChart\"></div>\n              <p class=\"col-md-12 text-center\">\n                  <a class=\"como-funciona\"\n                     data-toggle=\"popover\"\n                     data-content=\"Es una representaci\u00F3n construida a partir de los\n                     tweets, retweets y favoritos que ha\n                     realizado la comunidad de seguidores de tu\n                     cuenta. La altura de la gr\u00E1fica es la\n                     cantidad de actividad media en ese momento.\"\n                     data-placement=\"bottom\"\n                     data-original-title=\"Gr\u00E1fica de actividad media\"\n                     href=\"javascript:void(0);\">\n                      <span>Actividad del Hashtag</span>\n                      <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n                  </a>\n              </p>\n          </div>\n      </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [global_color_service_1.GlobalColor])
                ], HashtagActivityComponent);
                return HashtagActivityComponent;
            })(data_component_1.DataComponent);
            exports_1("HashtagActivityComponent", HashtagActivityComponent);
        }
    }
});
//# sourceMappingURL=hashtag-activity.component.js.map