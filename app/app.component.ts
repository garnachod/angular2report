import {JSONService} from "./report/services/json-service";
import { Component, OnInit, ViewChild, provide } from  'angular2/core';
import { ReportComponent } from './report/report.component';

@Component({
    providers: [JSONService,
        provide(String, {useValue: '/json/report.mock.json'})
    ],
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
    public reportConfig : any;

    constructor(private service: JSONService) {
        service.getData().subscribe(data => {
            this.reportConfig = data;
        });
    }


}
