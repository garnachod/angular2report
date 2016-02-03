System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NUM_USERS, UserStatsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NUM_USERS = 15;
            UserStatsComponent = (function () {
                function UserStatsComponent() {
                    this.valoresTweets = [];
                    this.valoresRetweets = [];
                    this.valoresPagerank = [];
                    this.valoresCloseness = [];
                    this.elementoTweets = $('#tweetsId');
                    this.elementoRetweets = $('#retweetsId');
                    this.elementoPagerank = $('#pagerankId');
                    this.elementoCloseness = $('#closenessId');
                }
                UserStatsComponent.prototype.setData = function (data) {
                    this.data = data;
                    this.parseData();
                };
                UserStatsComponent.prototype.parseData = function () {
                    var scrollPos;
                    var columnas = ['username', 'tweets', 'retweets', 'pagerank', 'closeness'];
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
                        that.valoresPagerank.push({
                            username: elem[columnas.indexOf('username')],
                            valor: Math.floor(elem[columnas.indexOf('pagerank')] * 10000) / 10000
                        });
                        that.valoresCloseness.push({
                            username: elem[columnas.indexOf('username')],
                            valor: Math.floor(elem[columnas.indexOf('closeness')] * 10000) / 10000
                        });
                    });
                    this.sortValores();
                    scrollPos = $(document).scrollTop(); // Prevent scrolling when redrawing chart!
                    this.drawCharts();
                    $(document).scrollTop(scrollPos);
                };
                UserStatsComponent.prototype.compare = function (a, b) {
                    if (a.valor < b.valor) {
                        return 1;
                    }
                    if (a.valor > b.valor) {
                        return -1;
                    }
                    return 0;
                };
                UserStatsComponent.prototype.sortValores = function () {
                    this.valoresTweets.sort(this.compare);
                    this.valoresRetweets.sort(this.compare);
                    this.valoresPagerank.sort(this.compare);
                    this.valoresCloseness.sort(this.compare);
                };
                UserStatsComponent.prototype.drawCharts = function () {
                    this.drawChart(this.elementoTweets, this.valoresTweets, 'Tweets', '');
                    this.drawChart(this.elementoRetweets, this.valoresRetweets, 'Retweets', '');
                    this.drawChart(this.elementoPagerank, this.valoresPagerank, 'Relevancia', 'Relevancia');
                    this.drawChart(this.elementoCloseness, this.valoresCloseness, 'Intermediación', 'Intermediación');
                };
                UserStatsComponent.prototype.drawChart = function (element, values, serie, axis) {
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
                                        [0, 'rgba(204, 89, 205, 1)'],
                                        [1, 'rgba(91, 104, 158, 0.7)']
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
                UserStatsComponent = __decorate([
                    core_1.Component({
                        selector: 'user-stats',
                        template: "\n    <section class=\"col-md-6\">\n    <div class=\"panel with-nav-tabs panel-default\">\n    <ul id=\"statTabs\" class=\"nav nav-tabs\">\n    <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">Tweets</a></li>\n    <li><a href=\"#tab2\" data-toggle=\"tab\">Retweets</a></li>\n    <li><a href=\"#tab3\" data-toggle=\"tab\">Relevancia</a></li>\n    <li><a href=\"#tab4\" data-toggle=\"tab\">Intermediaci\u00F3n</a></li>\n    </ul>\n    <div class=\"panel-body\">\n    <div class=\"tab-content row\">\n    <div class=\"tab-pane fade in active col-md-12\" id=\"tab1\">\n    <div id=\"tweetsId\"></div>\n    </div>\n    <div class=\"tab-pane fade col-md-12\" id=\"tab2\">\n    <div id=\"retweetsId\"></div>\n    </div>\n    <div class=\"tab-pane fade col-md-12\" id=\"tab3\">\n    <div id=\"pagerankId\"></div>\n    </div>\n    <div class=\"tab-pane fade col-md-12\" id=\"tab4\">\n    <div id=\"closenessId\"></div>\n    </div>\n    </div>\n    </div>\n\n    <p class=\"col-md-12 text-center\">\n    <a class=\"como-funciona\"\n    data-toggle=\"popover\"\n    data-content=\"Al pinchar en la pesta\u00F1a de cada m\u00E9trica\n    aparecen los 10 usuarios m\u00E1s valorados seg\u00FAn \u00E9sta. La\n    longitud de la barra representa el valor de la m\u00E9trica\n    en dicho usuario. Puedes acceder a cada uno de estos\n    perfiles pinchando sobre su nombre.\"\n    data-placement=\"bottom\"\n    data-original-title=\"M\u00E9tricas de Usuarios\"\n    href=\"javascript:void(0);\">\n    <span>M\u00E9tricas de Usuarios</span>\n    <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n    </a>\n    </p>\n    </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserStatsComponent);
                return UserStatsComponent;
            })();
            exports_1("UserStatsComponent", UserStatsComponent);
        }
    }
});
//# sourceMappingURL=user-stats.component.js.map