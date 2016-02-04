import { Block } from './block';
import { DataComponent } from './data-component';
import { Component } from 'angular2/core';
import { GlobalColor } from '../services/global-color.service';

declare var $:any;

@Component({
    selector: 'extended-ldavis',
    template: `

            <article id="ldavis" class="row hidden-sm hidden-xs">
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

            <article id="charts" class="row hidden-sm hidden-xs">
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
            </article> 
    `
})
export class ExtendedLDAvisComponent extends DataComponent {

    constructor(private globalColor: GlobalColor) {
        super();
        $('.como-funciona').popover();
    }

    public setData(data) {
        this.data = data;
        this.parseData();
    }

    private parseData() {

    }

}
