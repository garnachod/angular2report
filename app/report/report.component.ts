import {Component, DynamicComponentLoader, Injector, Input, OnInit, } from 'angular2/core';
import {ReportBlockFactory} from './report-block-factory';
import {ReportBlockProviderFactory} from './report-block-provider-factory';

@Component({
    providers: [ReportBlockFactory, ReportBlockProviderFactory],
    selector: 'report',
    template: `
    <div *ngFor="#block of reportBlocks" id="{{ block.nombre }}">
    </div>
    `
})
export class ReportComponent implements OnInit {

    private reportBlocks: Array<any>;
    private config: any;

    constructor(
        private dcl: DynamicComponentLoader,
        private injector: Injector,
        private rbf: ReportBlockFactory,
        private rbpf: ReportBlockProviderFactory) {
    }

    loadConfig(data) {
        this.config = data;
        this.reportBlocks = this.rbf.getReportBlocks(this.config);
        this.reportBlocks.forEach(block => {
            this.dcl.loadAsRoot(block, '#' + block.getName(), this.injector)
                .then(component => {
                    var provider = this.rbpf.getProvider(block);
                    component.instance.injectProvider(provider);
                });
        });
    }

    ngOnInit() {

    }
}
