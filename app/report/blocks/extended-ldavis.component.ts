import { LDAvisComponent } from "./ldavis.component";
import { BlockData } from "../services/block-data.service";
import { HoursChartComponent } from "./hours-chart.component";
import { UserBarChartComponent } from "./user-bar-chart.component";
import { Block } from './block';
import { DataComponent } from './data-component';
import { Component, ViewChild } from 'angular2/core';
import { GlobalColor } from '../services/global-color.service';

declare var $:any;
declare var d3:any;

@Component({
    providers: [UserBarChartComponent, HoursChartComponent],
    directives: [UserBarChartComponent, HoursChartComponent],
    selector: 'extended-ldavis',
    template: `
            <article id="ldavis" class=" hidden-sm hidden-xs">
                <div class="col-md-12">
                    <div class="panel panel-default">
                        <div class="col-md-12" id="lda"></div>
                        <p class="col-md-12 text-center">
                            <a class="como-funciona"
                               data-toggle="popover"
                               data-content="Los temas representan relaciones entre palabras.
                               Al seleccionar un tema los paneles inferiores cambiarán
                               para representar la información relativa al mismo."
                               data-placement="bottom"
                               data-original-title="Segmentación en Temáticas del Contenido Publicado"
                               href="javascript:void(0);">
                                <span>Segmentación en Temáticas del Contenido Publicado</span>
                                <small><i class="glyphicon glyphicon-info-sign"></i></small>
                            </a>
                        </p>
                    </div>
                </div>
            </article>

            <article id="charts" class=" hidden-sm hidden-xs">
                <user-bar-chart #userBarChart></user-bar-chart>
                <hours-chart #hoursChart></hours-chart>
            </article>
    `
})
export class ExtendedLDAvisComponent extends LDAvisComponent {

    constructor(private color: GlobalColor,
        @ViewChild('userBarChart') private userBarChart: UserBarChartComponent,
        @ViewChild('hoursChart') private hoursChart: HoursChartComponent) {

        super(color);
        $('.como-funciona').popover();
    }

    public setData(data) {
        this.userBarChart.setData(data.users);
        this.hoursChart.setData(data.hours);
        this.LDAvis($, '#lda', data, this.userBarChart, this.hoursChart, this.color);
    }
}
