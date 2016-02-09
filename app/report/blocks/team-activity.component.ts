import {GlobalColor} from "../services/global-color.service";
import {Component} from "angular2/core";
import {DataComponent} from "./data-component";

declare var $: any;
declare var document: any;

@Component({
    selector: 'team-activity',
    template: `
    <section class="col-md-6">
        <div class="panel panel-default">
            <div id="teamActivityChart"></div>
            <p class="col-md-12 text-center">
                <a class="como-funciona"
                    data-toggle="popover"
                    data-content="Es una representación construida a partir de los
                    tweets, retweets y favoritos que ha
                    realizado la comunidad de seguidores de tu
                    cuenta. La altura de la gráfica es la
                    cantidad de actividad media en ese momento."
                    data-placement="bottom"
                    data-original-title="Gráfica de actividad media"
                    href="javascript:void(0);">
                    <span>Actividad por Equipo</span>
                    <small><i class="glyphicon glyphicon-info-sign"></i></small>
                </a>
            </p>
        </div>
    </section>
    `
})
export class TeamActivityComponent extends DataComponent {

    private element;
    private values = [];
    private teams = [];
    private interval = 1;
    private initDate;

    constructor (private colors: GlobalColor) {
        super();
        this.element = $('#teamActivityChart');
    }

    private drawChart() {
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
                layout: 'vertical',
                align: 'center',
                verticalAlign: 'top',
                float: true
            },
            plotOptions: {
                area: {
                    fillOpacity: 0.5,
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
                name: 'Actividad del Equipo 1: ' + this.teams[0],
                color: this.colors.secondaryColor,
                data: this.values[0],
                pointStart: Date.UTC(parseInt(this.initDate.substring(0,4)),
                parseInt(this.initDate.substring(5,7)) - 1,
                this.initDate.substring(8,11)),
                pointInterval: this.interval * 60 * 1000
            },
            {
                type: 'area',
                name: 'Actividad del Equipo 2 : ' + this.teams[1],
                color: this.colors.primaryColor,
                data: this.values[1],
                pointStart:  Date.UTC(parseInt(this.initDate.substring(0,4)),
                parseInt(this.initDate.substring(5,7)) - 1,
                this.initDate.substring(8,11)),
                pointInterval: this.interval * 60 * 1000
            }]

        });
    }

    public setData(data) {
        this.data = data;
        this.parseData(data);
    }

    private parseData(obj: any) {
        let scrollPos;
        this.initDate = obj.fechainicio;
        this.values.push(obj.valores1);
        this.values.push(obj.valores2);
        this.teams.push(obj.nombre1);
        this.teams.push(obj.nombre2);
        scrollPos = $(document).scrollTop(); // Prevent scrolling when redrawing chart!
        this.drawChart();
        $(document).scrollTop(scrollPos);
    }

}
