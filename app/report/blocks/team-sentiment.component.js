System.register(["./data-component", 'angular2/core'], function(exports_1) {
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
    var data_component_1, core_1;
    var TeamSentimentComponent;
    return {
        setters:[
            function (data_component_1_1) {
                data_component_1 = data_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TeamSentimentComponent = (function (_super) {
                __extends(TeamSentimentComponent, _super);
                function TeamSentimentComponent() {
                    _super.call(this);
                    this.equipos = [];
                    this.sentimientos = [];
                    this.elemento = $('#sentimentsChart');
                    $('.como-funciona').popover();
                }
                TeamSentimentComponent.prototype.setData = function (data) {
                    for (var equipo in data) {
                        this.equipos.push(equipo);
                        this.sentimientos.push(data[equipo]);
                    }
                    this.drawChart();
                };
                TeamSentimentComponent.prototype.drawChart = function () {
                    this.elemento.highcharts({
                        chart: {
                            type: 'bar'
                        },
                        title: {
                            text: ''
                        },
                        xAxis: {
                            categories: [this.equipos[0], this.equipos[1]]
                        },
                        yAxis: {
                            min: 0,
                            max: 1,
                            title: {
                                text: ''
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        plotOptions: {
                            series: {
                                stacking: 'normal'
                            }
                        },
                        legend: {
                            reversed: true
                        },
                        series: [{
                                name: 'Sentimiento Negativo',
                                data: [1 - this.sentimientos[0], 1 - this.sentimientos[1]],
                                color: '#EF4040 '
                            }, {
                                name: 'Sentimiento Positivo',
                                data: [this.sentimientos[0], this.sentimientos[1]],
                                color: '#00E885 '
                            }]
                    });
                };
                TeamSentimentComponent = __decorate([
                    core_1.Component({
                        selector: 'team-sentiment',
                        template: "\n    <section class=\"col-md-6\">\n        <div class=\"panel panel-default\">\n            <div id=\"sentimentsChart\"></div>\n            <p class=\"col-md-12 text-center\">\n                <a class=\"como-funciona\"\n                   data-toggle=\"popover\"\n                   data-content=\"\"\n                   data-placement=\"bottom\"\n                   data-original-title=\"Sentimientos por Equipo\"\n                   href=\"javascript:void(0);\">\n                    <span>Sentimientos por Equipo</span>\n                    <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n                </a>\n            </p>\n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TeamSentimentComponent);
                return TeamSentimentComponent;
            })(data_component_1.DataComponent);
            exports_1("TeamSentimentComponent", TeamSentimentComponent);
        }
    }
});
//# sourceMappingURL=team-sentiment.component.js.map