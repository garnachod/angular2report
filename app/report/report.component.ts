import {
    Component, DynamicComponentLoader, Injector, Input, OnInit, ElementRef, Attribute
} from 'angular2/core';
import {ReportBlockFactory} from './blocks/report-block-factory';
import {ReportBlockProviderFactory} from './providers/report-block-provider-factory';
import { UserStatsComponent } from './blocks/user-stats.component';

@Component({
    directives: [UserStatsComponent],
    providers: [ReportBlockFactory, ReportBlockProviderFactory],
    selector: 'report',
    template: `
    <div *ngFor="#block of reportBlocks" id="{{ block.getId() }}">

    </div>
    `,
    inputs: ['config'],
})
export class ReportComponent {

    public reportBlocks: Array<any>;
    public config;

    constructor(
        private loader: DynamicComponentLoader,
        private injector: Injector,
        private elementRef:ElementRef,
        private rbf: ReportBlockFactory,
        private rbpf: ReportBlockProviderFactory) {

        this.reportBlocks = this.rbf.getReportBlocks(this.config);

    }

    ngAfterViewInit() {

        this.reportBlocks.map(block => {
            console.log('block');
            console.log(block);
            this.loader.loadAsRoot(block.getDirective(), '#' + block.getId(), this.injector)
                .then(component => {
                    var provider = this.rbpf.getProvider(block);
                    component.instance.injectProvider(provider);
                });
        });

    }



}
