import {DataComponent} from "./data-component";
import { Component } from 'angular2/core';

declare var $: any;

@Component({
    selector: 'cloud',
    template: `
    <section class="col-md-12">
       <div class="panel panel-default">
           <div id="nube"></div>
           <p class="col-md-12 text-center">
               <a class="como-funciona"
                  data-toggle="popover"
                  data-content="¿De que suele hablar la gente cuando usa el hastag? Aqui tenemos las palabras más usadas, cuanto más grande sea la palabra más gente la habrá utilizado."
                  data-placement="bottom"
                  data-original-title="Nube de Palabras"
                  href="javascript:void(0);">
                   <span>Nube de Palabras</span>
                   <small><i class="glyphicon glyphicon-info-sign"></i></small>
               </a>
           </p>
       </div>

   </section>
    `
})
export class CloudComponent extends DataComponent {

    constructor() {
        super();
    }

    setData(data) {
        this.parseData(data);
    }

    private parseData(words) {

             words.map(function (obj) {
                 return {
                     text: obj.text,
                     weight: Math.log(obj.weight)
                 };
             });

             $('#nube').jQCloud(words, {
                 colors: ['#CC59CD', '#C35FCA','#B26CC5','#A973C2', '#A379C0', '#9C7FBF', '#9587BD', '#8F91BC', '#8C94BB']
             });
    }
}
