import { JSONService } from "./report/services/json.service";
import { Component, AfterViewInit } from  'angular2/core';
import { ReportComponent } from './report/report.component';

@Component({
    providers: [JSONService],
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
                    <report *ngIf=reportConfig [config]=reportConfig></report>
                </section>
            </article>
        </section>
    </section>

    `
})
export class AppComponent implements AfterViewInit {

    public reportConfig : any;

    constructor(private service: JSONService) {

    }

    ngAfterViewInit() {
        this.service.getData('/json/report.mock.json').subscribe(data => {
            this.reportConfig = data;
        });
    }
}
