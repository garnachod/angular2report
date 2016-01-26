import {Component} from  'angular2/core';
import {OnInit} from 'angular2/core';
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
export class AppComponent implements OnInit {

    constructor() {

    }

    ngOnInit() {

    }

}