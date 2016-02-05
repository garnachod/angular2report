import {GlobalColor} from "../services/global-color.service";
import {Component} from "angular2/core";
import {DataComponent} from "./data-component";

declare var $: any;
declare var document: any;

@Component({
    selector: 'hours-chart',
    template: `
    <section class="col-md-6">
       <div class="panel panel-default">
           <div id="hoursChart"></div>
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
                   <span>Gráfica de Actividad Media</span>
                   <small><i class="glyphicon glyphicon-info-sign"></i></small>
               </a>
           </p>
       </div>
    </section>
    `
})
export class HoursChartComponent extends DataComponent {

    private topic = -1;
    private elemento;
    private values = [];

    constructor(private colorConfig: GlobalColor) {
        super();
        this.elemento = $('#hoursChart');
        this.topic = -1;
    }

    setData (data: any) {
        this.data = data;
        this.parseData(data);
    }

    parseData(obj) {
        let scrollPos;
        if (this.topic === -1) {
        } else {
            this.values = obj[this.topic];
        }
        scrollPos = $(document).scrollTop(); // Prevent scrolling when redrawing chart!
        this.drawChart();
        $(document).scrollTop(scrollPos);
    }

    setTopic(i) {
        this.topic = i;
        this.parseData(this.data);
    }
    
    private drawChart() {
        if (this.topic === -1) {
            this.elemento.append('<section class="alert alert-info"> ↑ Seleccione un tema para obtener su gráfica de actividad media ↑</section>');
        } else {
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
                    tickInterval:  24 * 3600 * 1000,
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
    }

}
