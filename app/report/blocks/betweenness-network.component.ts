import { Block } from './block';
import { AfterViewInit, Component } from 'angular2/core';

declare var $:any;
const NUM_USERS = 15;

@Component({
    selector: 'betweenness-network',
    template: `
    <section class="col-md-6">
        <div class="panel panel-default">
            <img id="grafoBetweenness" class="img-responsive" src="{{ src }}"/>
            <p class="col-md-12 text-center">
            <a class="como-funciona"
                                  data-toggle="popover"
                                  data-content="Ésta es una manera visual de ver la Intermediación
                                  de cada usuario de tu Comunidad. Aparecen más grandes aquellos
                                  usuarios que tienen un alto nivel de Intermediación y más pequeños
                                  aquellos que lo tienen bajo."
                                  data-placement="bottom"
                                  data-original-title="Red de Intermediación"
                                  href="javascript:void(0);">
                                   <span>Red de Intermediación</span>
                                   <small><i class="glyphicon glyphicon-info-sign"></i></small>
                               </a>
            </p>
        </div>
    </section>
    `
})
export class BetweennessNetworkComponent implements AfterViewInit {

    public src: string;

    constructor() {
        $('.como-funciona').popover();

    }

    ngAfterViewInit() {
        $('#grafoBetweenness').loupe({
            width: 200,
            height: 200,
            loupe: 'lupa'
        });
    }
    setData(data) {
        this.src = data;
    }
}
