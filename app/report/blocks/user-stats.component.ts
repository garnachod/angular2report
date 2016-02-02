import { JSONService } from "../services/json.service";
import { Block } from './block';
import { Injector, DynamicComponentLoader,  Component, Inject, OnInit, provide, forwardRef } from 'angular2/core';
import { ReportComponent } from '../report.component';

declare var $:any;
const NUM_USERS = 15;

@Component({
    selector: 'user-stats',
    template: `
    <section class="col-md-6">
    <div class="panel with-nav-tabs panel-default">
        <ul id="statTabs" class="nav nav-tabs">
            <li class="active"><a href="#tab1" data-toggle="tab">Tweets</a></li>
            <li><a href="#tab2" data-toggle="tab">Retweets</a></li>
            <li><a href="#tab3" data-toggle="tab">Relevancia</a></li>
            <li><a href="#tab4" data-toggle="tab">Intermediación</a></li>
        </ul>
        <div class="panel-body">
            <div class="tab-content row">
                <div class="tab-pane fade in active col-md-12" id="tab1">
                    <div id="tweetsStatsChart"></div>
                </div>
                <div class="tab-pane fade col-md-12" id="tab2">
                    <div id="retweetsStatsChart"></div>
                </div>
                <div class="tab-pane fade col-md-12" id="tab3">
                    <div id="pagerankStatsChart"></div>
                </div>
                <div class="tab-pane fade col-md-12" id="tab4">
                    <div id="closenessStatsChart"></div>
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
export class UserStatsComponent {

    public data: any;

    public setData(data) {
        this.data = data;
    }

}
