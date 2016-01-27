import {Component, DynamicComponentLoader, Injector, Input, OnInit} from 'angular2/core';
import {ReportBlockFactory} from './blocks/report-block-factory';
import {ReportBlockProviderFactory} from './providers/report-block-provider-factory';
import { UserStatsComponent } from './blocks/user-stats.component';

@Component({
    directives: [UserStatsComponent],
    providers: [ReportBlockFactory, ReportBlockProviderFactory],
    selector: 'report',
    template: `
    <div id="test">
    </div>
    `
})
export class ReportComponent {

    private reportBlocks: Array<any>;

    constructor(
        private dcl: DynamicComponentLoader,
        private injector: Injector,
        private rbf: ReportBlockFactory,
        private rbpf: ReportBlockProviderFactory) {
    }

    loadConfig(data) {
        this.rbf.loadConfig(data)

        this.reportBlocks = this.rbf.getReportBlocks();
        this.reportBlocks.forEach(block => {
            this.dcl.loadAsRoot(block.directive, '#test', this.injector)
                .then(component => {
                    var provider = this.rbpf.getProvider(block);
                    component.instance.injectProvider(provider);
                });
        });
    }

}
