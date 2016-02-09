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
    var NUM_USERS, UserBarChartComponent;
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
            NUM_USERS = 11;
            UserBarChartComponent = (function (_super) {
                __extends(UserBarChartComponent, _super);
                function UserBarChartComponent(colorConfig) {
                    _super.call(this);
                    this.colorConfig = colorConfig;
                    this.usernameValues = [];
                    $('.como-funciona').popover();
                }
                UserBarChartComponent.prototype.setData = function (data) {
                    this.data = data;
                    this.topic = -1;
                    this.elemento = $('#userBarChart');
                    this.parseData(data);
                };
                UserBarChartComponent.prototype.setTopic = function (i) {
                    this.topic = i;
                    this.parseData(this.data);
                };
                UserBarChartComponent.prototype.parseData = function (obj) {
                    this.usernameValues = [];
                    for (var username in obj) {
                        if (obj.hasOwnProperty(username)) {
                            this.usernameValues.push({
                                'username': username,
                                'relevance': Math.floor(obj[username][this.topic] * 100) / 100
                            });
                        }
                    }
                    this.sortUsernameValues();
                    var scrollPos = $(document).scrollTop(); // Prevent scrolling when redrawing chart!
                    this.drawChart();
                    $(document).scrollTop(scrollPos);
                };
                UserBarChartComponent.prototype.sortUsernameValues = function () {
                    this.usernameValues.sort(function compare(a, b) {
                        if (a.relevance < b.relevance) {
                            return 1;
                        }
                        if (a.relevance > b.relevance) {
                            return -1;
                        }
                        return 0;
                    });
                };
                UserBarChartComponent.prototype.drawChart = function () {
                    var usernames = [];
                    var relevances = [];
                    this.usernameValues.forEach(function (usernameValue) {
                        usernames.push(usernameValue.username);
                        relevances.push(usernameValue.relevance);
                    });
                    usernames = usernames.splice(0, NUM_USERS);
                    relevances = relevances.splice(0, NUM_USERS);
                    if (this.topic === -1) {
                        this.elemento.append('<section class="alert alert-info">↑ Seleccione un tema para obtener su lista de usuarios relevantes ↑</section>');
                    }
                    else {
                        this.elemento.highcharts({
                            chart: {
                                type: 'bar'
                            },
                            title: {
                                text: ''
                            },
                            tooltip: {
                                headerFormat: ''
                            },
                            legend: {
                                enabled: false
                            },
                            xAxis: {
                                categories: usernames,
                                visible: true,
                                min: 0,
                                max: 10,
                                minRange: 10,
                                labels: {
                                    formatter: function () {
                                        return '<a class="user-link" target="_blank" href="https://twitter.com/' + this.value + '">' + this.value + '</a>';
                                    },
                                    useHTML: true
                                }
                            },
                            yAxis: {
                                min: 0,
                                title: {
                                    text: '',
                                    align: 'high'
                                },
                                visible: true
                            },
                            plotOptions: {
                                bar: {
                                    color: {
                                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                                        stops: [
                                            [0, this.colorConfig.secondaryColor],
                                            [1, this.colorConfig.primaryColor]
                                        ]
                                    }
                                },
                                series: {
                                    pointWidth: 14
                                }
                            },
                            credits: {
                                enabled: false
                            },
                            series: [{
                                    name: 'Relevancia',
                                    data: relevances
                                }]
                        });
                    }
                };
                UserBarChartComponent = __decorate([
                    core_1.Component({
                        selector: 'user-bar-chart',
                        template: "\n    <section class=\"col-md-6\">\n        <div class=\"panel panel-default\">\n            <div id=\"userBarChart\"></div>\n            <p class=\"col-md-12 text-center\">\n                <a class=\"como-funciona\"\n                   data-toggle=\"popover\"\n                   data-content=\"Representa a los usuarios m\u00E1s influyentes en esa tem\u00E1tica.\n                   Se determina a partir de la estructura de la\n                   red y la informaci\u00F3n obtenida de los temas.\"\n                   data-placement=\"bottom\"\n                   data-original-title=\"Lista de usuarios relevantes\"\n                   href=\"javascript:void(0);\">\n                    <span>Lista de Usuarios Relevantes</span>\n                    <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n                </a>\n            </p>\n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [global_color_service_1.GlobalColor])
                ], UserBarChartComponent);
                return UserBarChartComponent;
            })(data_component_1.DataComponent);
            exports_1("UserBarChartComponent", UserBarChartComponent);
        }
    }
});
//# sourceMappingURL=user-bar-chart.component.js.map