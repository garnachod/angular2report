import { Block } from './block';
import { AfterViewInit, Component } from 'angular2/core';

declare var $:any;
const NUM_USERS = 15;

@Component({
    selector: 'relevance-network',
    template: `
    <section class="col-md-6">
        <div class="panel panel-default">
            <img id="grafoRelevance" class="img-responsive" src="{{ src }}"/>
            <p class="col-md-12 text-center">
                <a class="como-funciona"
                        data-toggle="popover"
                        data-content="El grafo de comunidades es similar al grafo de actividad
                                  salvo porque a cada subcomunidad le ha sido asignado un color. Llamamos
                                  subcomunidad a un conjunto de cuentas más relacionada entre sí de lo habitual."
                                  data-placement="bottom"
                                  data-original-title="Red de Comunidades"
                                  href="javascript:void(0);">
                                  <span>Red de Comunidades</span>
                                  <small><i class="glyphicon glyphicon-info-sign"></i></small>
                </a>
            </p>
        </div>
    </section>
    `
})
export class RelevanceNetworkComponent implements AfterViewInit {

    public src: string;

    constructor() {
        $('.como-funciona').popover();

    }

    ngAfterViewInit() {
        $('#grafoRelevance').loupe({
            width: 200,
            height: 200,
            loupe: 'lupa'
        });
    }
    setData(data) {
        this.src = data;
    }
}
