import { Block } from './block';
import { DataComponent } from './data-component';
import { Component } from 'angular2/core';
import { GlobalColor } from '../services/global-color.service';

declare var $:any;
const NUM_USERS = 15;

@Component({
    selector: 'basic-user-stats',
    template: `
    <section class="col-md-6">
        <div class="panel with-nav-tabs panel-default">
            <ul id="basicStatTabs" class="nav nav-tabs">
                <li class="active"><a href="#basicTab1" data-toggle="tab">Tweets</a></li>
                <li><a href="#basicTab2" data-toggle="tab">Retweets</a></li>
            </ul>
            <div class="panel-body">
                <div class="tab-content row">
                    <div class="tab-pane fade in active col-md-12" id="basicTab1">
                        <div id="basicTweetsId"></div>
                    </div>
                    <div class="tab-pane fade col-md-12" id="basicTab2">
                        <div id="basicRetweetsId"></div>
                    </div>
                </div>
            </div>

            <p class="col-md-12 text-center">
                <a class="como-funciona"
                data-toggle="popover"
                data-content="Al pinchar en la pestaña de cada métrica
                aparecen los 10 usuarios más valorados según ésta. La
                longitud de la barra representa el valor de la métrica
                en dicho usuario. Puedes acceder a cada uno de estos
                perfiles pinchando sobre su nombre."
                data-placement="bottom"
                data-original-title="Métricas de Usuarios"
                href="javascript:void(0);">
                <span>Métricas de Usuarios</span>
                <small><i class="glyphicon glyphicon-info-sign"></i></small>
                </a>
            </p>
        </div>
    </section>
    `

})
export class BasicUserStatsComponent extends DataComponent {

    private colors: any;
    private elementoTweets: string;
    private elementoRetweets: string;
    private file: string;
    private valoresTweets = [];
    private valoresRetweets = [];

    constructor(private globalColor: GlobalColor) {
        super();
        this.elementoTweets = $('#basicTweetsId');
        this.elementoRetweets = $('#basicRetweetsId');
        $('.como-funciona').popover();
    }

    public setData(data) {
        this.data = data;
        this.parseData();
    }

    private parseData() {

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

    }

    private compare(a, b) {
        if (a.valor < b.valor) {
            return 1;
        }
        if (a.valor > b.valor) {
            return -1;
        }
        return 0;
    }

    private sortValores() {
        this.valoresTweets.sort(this.compare);
        this.valoresRetweets.sort(this.compare);
    }

    private drawCharts() {
        this.drawChart(this.elementoTweets, this.valoresTweets, 'Tweets', '');
        this.drawChart(this.elementoRetweets, this.valoresRetweets, 'Retweets', '');
    }

    private drawChart(element, values, serie, axis) {

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

    }

}
