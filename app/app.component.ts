import {Component,OnInit,ViewChild} from  'angular2/core';
import {ReportComponent} from './report/report.component';

@Component({
    selector: 'app',
    directives: [ReportComponent],
    providers: [],
    template: `
    <section class="container">
        <section id="informe">
            <header class="row">
                <img id="logo-horizontal" src="img/logo-horizontal.png" class="img-responsive col-md-4"/>
            </header>
            <article id="graphs">
                <section class="row">
                    <report></report>
                </section>
            </article>
        </section>
    </section>

    `
})
export class AppComponent {

    @ViewChild(ReportComponent) private reportComponent: ReportComponent;

    constructor() {
    }

    ngAfterViewInit () {
        this.reportComponent.loadConfig({
            'name': 'p_molins',
            'range': ['', ''],
            'language': 'es',
            'components': ['user-stats', 'user-stats']
        });
    }

}
