import {Component,OnInit,ViewChild} from  'angular2/core';
import {ReportComponent} from './report/report.component';

@Component({
    selector: 'app',
    directives: [ReportComponent],
    template: `
    <section class="container">
        <section id="informe">
            <header class="row">
                <img id="logo-horizontal" src="img/logo-horizontal.png" class="img-responsive col-md-4"/>
            </header>
            <article id="graphs">
                <section class="row">
                    <report [config]=reportConfig></report>
                </section>
            </article>
        </section>
    </section>

    `
})
export class AppComponent {

    // todo: sacar JSON principal de otro servicio
    public reportConfig = {
        'name': 'p_molins',
        'range': ['', ''],
        'language': 'es',
        'components': ['user-stats', 'user-stats']
    }

}
