import {GlobalColor} from "../services/global-color.service";
import {Component} from "angular2/core";
import {DataComponent} from "./data-component";

declare var $: any;
declare var document: any;

@Component({
    selector: 'hashtag-activity',
    template: `
    <section class="col-md-6">
          <div class="panel panel-default">
              <div id="activityChart"></div>
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
                      <span>Actividad del Hashtag</span>
                      <small><i class="glyphicon glyphicon-info-sign"></i></small>
                  </a>
              </p>
          </div>
      </section>
    `
})
export class HashtagActivityComponent extends DataComponent {

     private topic;
     private element;
     private values = [];
     private interval = 1;
     private fechaInicio;

     constructor(private colors: GlobalColor) {
         super();
         this.element = $('#activityChart');
     }

     public setData(data) {
         this.data = data;
         this.parseData(data);
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
                      pointStart: Date.UTC(parseInt(this.fechaInicio.substring(0,4)),
                                          parseInt(this.fechaInicio.substring(5,7)) - 1,
                                          this.fechaInicio.substring(8,11)),
                      pointInterval: this.interval * 60 * 1000
                  }]

          });
      }

      private parseData(obj) {
          let scrollPos;
          this.fechaInicio = obj.fechainicio;
          this.values = obj.valores;
          scrollPos = $(document).scrollTop(); // Prevent scrolling when redrawing chart!
          this.drawChart();
          $(document).scrollTop(scrollPos);
      }



}
