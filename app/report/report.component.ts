import { OnInit, Component, DynamicComponentLoader, Injector, Input, AfterViewInit, ElementRef} from 'angular2/core';
import { BlockFactory } from './blocks/block-factory';
import { UserStatsComponent } from './blocks/user-stats.component';
import { JSONService } from './services/json.service';
import { Block } from './blocks/block';

@Component({
    selector: 'report',
    inputs: ['config'],
    directives: [UserStatsComponent],
    providers: [BlockFactory],
    template: `
    <div *ngFor="#block of blocks" id="{{ block.id }}">
    </div>
    `
})
export class ReportComponent implements OnInit {

    public blocks: Array<Block>;
    public config;

    constructor(
        private loader: DynamicComponentLoader,
        private injector: Injector,
        private elementRef:ElementRef,
        private rbf: BlockFactory) {
    }

    ngOnInit() {

        if (!this.config) {
            console.error('ReportComponent didn\'t get config input data');
        }

        this.blocks = this.rbf.getBlocks(this.config);

        this.blocks.map(block => {
            this.loader.loadAsRoot(block.directive, '#' + block.id, this.injector)
                .then(component => {
                    // todo: pass data
                });
        });

    }

}
