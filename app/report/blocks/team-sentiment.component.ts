import {DataComponent} from "./data-component";
import { Component } from 'angular2/core';

declare var $: any;

@Component({
    selector: 'team-sentiment',
    template: `
    <section class="col-md-6">
        <div class="panel panel-default">
            <div id="sentimentsChart"></div>
            <p class="col-md-12 text-center">
                <a class="como-funciona"
                   data-toggle="popover"
                   data-content=""
                   data-placement="bottom"
                   data-original-title="Sentimientos por Equipo"
                   href="javascript:void(0);">
                    <span>Sentimientos por Equipo</span>
                    <small><i class="glyphicon glyphicon-info-sign"></i></small>
                </a>
            </p>
        </div>
    </section>
    `
})
export class TeamSentimentComponent extends DataComponent {

    private elemento;
    private equipos = [];
    private sentimientos = [];

    constructor() {
        super();
        this.elemento = $('#sentimentsChart');
        $('.como-funciona').popover();
    }

    setData(data) {
        for (var equipo in data) {
            this.equipos.push(equipo);
            this.sentimientos.push(data[equipo]);
        }

        this.drawChart();
    }
    private drawChart() {
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
            },{
                name: 'Sentimiento Positivo',
                data: [this.sentimientos[0], this.sentimientos[1]],
                color: '#00E885 '
            }]
        });

    }

}
