import {
    Component, DynamicComponentLoader, Injector, Input, OnInit, ElementRef, Attribute
} from 'angular2/core';
import { BlockFactory } from './blocks/block-factory';
import { DataServiceFactory } from './services/data-service-factory';
import { UserStatsComponent } from './blocks/user-stats.component';
import { JSONService } from './services/json-service';
import { Block } from './blocks/block';

@Component({
    directives: [UserStatsComponent],
    providers: [BlockFactory, DataServiceFactory],
    selector: 'report',
    template: `
    <div *ngFor="#block of reportBlocks" id="{{ block.id }}">
    </div>
    `,
    inputs: ['config'],
})
export class ReportComponent {

    public blocks: Array<Block>;
    public config;

    constructor(
        private loader: DynamicComponentLoader,
        private injector: Injector,
        private elementRef:ElementRef,
        private rbf: BlockFactory,
        private rbpf: DataServiceFactory) {
        this.blocks = this.rbf.getBlocks(this.config);
    }

    ngAfterViewInit() {
        this.blocks.map(block => {
            this.loader.loadAsRoot(block.directive, '#' + block.id, this.injector)
                .then(component => {
                    component.instance.setService();
                    //var service = this.rbpf.getProvider(block);
                    // todo: inject data services via magic component.instance.injectService(service);
                });
        });

    }

}
