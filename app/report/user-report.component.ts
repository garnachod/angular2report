import { JSONService } from "./services/json.service";
import { Component, AfterViewInit, Input, ElementRef } from  'angular2/core';
import { ReportComponent } from './report.component';

@Component({
    selector: 'user-report',
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
    `,
    providers: [JSONService],

})
export class UserReportComponent implements AfterViewInit {

    reportConfig : any;
    private username: string;
    private year: string;
    private month: string;

    constructor(private service: JSONService, private elementRef: ElementRef) {
        let elem = elementRef.nativeElement;
        this.username = elem.getAttribute("username");
        this.year = elem.getAttribute("year");
        this.month = elem.getAttribute("month");
    }

    ngAfterViewInit() {
        this.service.getData('/informe/clientes/' + this.username + '/' + this.year + '/' + this.month + '/config.json').subscribe(data => {
            if (data) {
                this.reportConfig = data;
            } else {
                console.error('UserReportComponent received invalid config data.');
            }
        });
    }
}
