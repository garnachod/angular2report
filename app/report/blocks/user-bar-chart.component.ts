import {GlobalColor} from "../services/global-color.service";
import {Component} from "angular2/core";
import {DataComponent} from "./data-component";

const NUM_USERS = 11;
declare var $:any;

@Component({
    selector: 'user-bar-chart',
    template: `
    <section class="col-md-6">
        <div class="panel panel-default">
            <div id="userBarChart"></div>
            <p class="col-md-12 text-center">
                <a class="como-funciona"
                   data-toggle="popover"
                   data-content="Representa a los usuarios más influyentes en esa temática.
                   Se determina a partir de la estructura de la
                   red y la información obtenida de los temas."
                   data-placement="bottom"
                   data-original-title="Lista de usuarios relevantes"
                   href="javascript:void(0);">
                    <span>Lista de Usuarios Relevantes</span>
                    <small><i class="glyphicon glyphicon-info-sign"></i></small>
                </a>
            </p>
        </div>
    </section>
    `
})
export class UserBarChartComponent extends DataComponent {

    private elemento;
    private usernameValues = [];
    private topic;

    constructor(private colorConfig: GlobalColor) {
        super();
    }

    setData(data) {
        this.data = data;
        this.topic = -1;
        this.elemento = $('#userBarChart');
        this.parseData(data);
    }

    setTopic(i) {
        this.topic = i;
        this.parseData(this.data);
    }

        private parseData(obj) {
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
            let scrollPos = $(document).scrollTop(); // Prevent scrolling when redrawing chart!
            this.drawChart();
            $(document).scrollTop(scrollPos);
        }

    private sortUsernameValues() {
        this.usernameValues.sort(function compare(a, b) {
            if (a.relevance < b.relevance) {
                return 1;
            }
            if (a.relevance > b.relevance) {
                return -1;
            }
            return 0;
        });
    }

    private drawChart() {
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
        } else {
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

    }


}
