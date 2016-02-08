System.register(['./data-component', 'angular2/core', '../services/global-color.service'], function(exports_1) {
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
    var data_component_1, core_1, global_color_service_1;
    var NUM_USERS, BasicUserStatsComponent;
    return {
        setters:[
            function (data_component_1_1) {
                data_component_1 = data_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (global_color_service_1_1) {
                global_color_service_1 = global_color_service_1_1;
            }],
        execute: function() {
            NUM_USERS = 15;
            BasicUserStatsComponent = (function (_super) {
                __extends(BasicUserStatsComponent, _super);
                function BasicUserStatsComponent(globalColor) {
                    _super.call(this);
                    this.globalColor = globalColor;
                    this.valoresTweets = [];
                    this.valoresRetweets = [];
                    this.elementoTweets = $('#basicTweetsId');
                    this.elementoRetweets = $('#basicRetweetsId');
                    $('.como-funciona').popover();
                }
                BasicUserStatsComponent.prototype.setData = function (data) {
                    this.data = data;
                    this.parseData();
                };
                BasicUserStatsComponent.prototype.parseData = function () {
                    var scrollPos;
                    var columnas = ['username', 'tweets', 'retweets'];
                    var that = this;
                    this.data.forEach(function (elem) {
                        that.valoresTweets.push({
                            username: elem[columnas.indexOf('username')],
                            valor: elem[columnas.indexOf('tweets')]
                        });
                        that.valoresRetweets.push({
                            username: elem[columnas.indexOf('username')],
                            valor: elem[columnas.indexOf('retweets')]
                        });
                    });
                    this.sortValores();
                    scrollPos = $(document).scrollTop(); // Prevent scrolling when redrawing chart!
                    this.drawCharts();
                    $(document).scrollTop(scrollPos);
                };
                BasicUserStatsComponent.prototype.compare = function (a, b) {
                    if (a.valor < b.valor) {
                        return 1;
                    }
                    if (a.valor > b.valor) {
                        return -1;
                    }
                    return 0;
                };
                BasicUserStatsComponent.prototype.sortValores = function () {
                    this.valoresTweets.sort(this.compare);
                    this.valoresRetweets.sort(this.compare);
                };
                BasicUserStatsComponent.prototype.drawCharts = function () {
                    this.drawChart(this.elementoTweets, this.valoresTweets, 'Tweets', '');
                    this.drawChart(this.elementoRetweets, this.valoresRetweets, 'Retweets', '');
                };
                BasicUserStatsComponent.prototype.drawChart = function (element, values, serie, axis) {
                    var usernames = [];
                    var valores = [];
                    values.forEach(function (valorMetrica) {
                        usernames.push(valorMetrica.username);
                        valores.push(valorMetrica.valor);
                    });
                    usernames = usernames.splice(0, NUM_USERS);
                    valores = valores.splice(0, NUM_USERS);
                    element.highcharts({
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
                                text: axis,
                                x: -40
                            },
                            visible: true
                        },
                        plotOptions: {
                            bar: {
                                color: {
                                    linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                                    stops: [
                                        [0, this.globalColor.secondaryColor],
                                        [1, this.globalColor.primaryColor]
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
                                name: serie,
                                data: valores
                            }]
                    });
                };
                BasicUserStatsComponent = __decorate([
                    core_1.Component({
                        selector: 'basic-user-stats',
                        template: "\n    <section class=\"col-md-6\">\n        <div class=\"panel with-nav-tabs panel-default\">\n            <ul id=\"basicStatTabs\" class=\"nav nav-tabs\">\n                <li class=\"active\"><a href=\"#basicTab1\" data-toggle=\"tab\">Tweets</a></li>\n                <li><a href=\"#basicTab2\" data-toggle=\"tab\">Retweets</a></li>\n            </ul>\n            <div class=\"panel-body\">\n                <div class=\"tab-content row\">\n                    <div class=\"tab-pane fade in active col-md-12\" id=\"basicTab1\">\n                        <div id=\"basicTweetsId\"></div>\n                    </div>\n                    <div class=\"tab-pane fade col-md-12\" id=\"basicTab2\">\n                        <div id=\"basicRetweetsId\"></div>\n                    </div>\n                </div>\n            </div>\n\n            <p class=\"col-md-12 text-center\">\n                <a class=\"como-funciona\"\n                data-toggle=\"popover\"\n                data-content=\"Al pinchar en la pesta\u00F1a de cada m\u00E9trica\n                aparecen los 10 usuarios m\u00E1s valorados seg\u00FAn \u00E9sta. La\n                longitud de la barra representa el valor de la m\u00E9trica\n                en dicho usuario. Puedes acceder a cada uno de estos\n                perfiles pinchando sobre su nombre.\"\n                data-placement=\"bottom\"\n                data-original-title=\"M\u00E9tricas de Usuarios\"\n                href=\"javascript:void(0);\">\n                <span>M\u00E9tricas de Usuarios</span>\n                <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n                </a>\n            </p>\n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [global_color_service_1.GlobalColor])
                ], BasicUserStatsComponent);
                return BasicUserStatsComponent;
            })(data_component_1.DataComponent);
            exports_1("BasicUserStatsComponent", BasicUserStatsComponent);
        }
    }
});
//# sourceMappingURL=basic-user-stats.component.js.map