import { OnInit, Component, DynamicComponentLoader, Injector, Input, AfterViewInit, ElementRef} from 'angular2/core';
import { BlockFactory } from './blocks/block-factory';
import { JSONService } from './services/json.service';
import { Block } from './blocks/block';
import { BlockData } from './services/block-data.service';

@Component({
    selector: 'report',
    inputs: ['config'],
    providers: [BlockFactory, BlockData],
    template: `

    `
})
export class ReportComponent implements OnInit {

    public blocks: Array<Block>;
    public config;

    constructor(
        private loader: DynamicComponentLoader,
        private injector: Injector,
        public elementRef:ElementRef,
        private factory: BlockFactory,
        private blockData: BlockData ) {
        }

        ngOnInit() {

            if (!this.config) {
                console.error('ReportComponent didn\'t get config input data');
            }

            this.blocks = this.factory.getBlocks(this.config);

            this.blocks.map(block => {
                this.loader.loadNextToLocation(block.directive, this.elementRef)
                .then(component =>  {
                    if (this.blockData.getData) {
                        try {
                            this.blockData.getData(block)
                            .subscribe(data => {
                                component.instance.setData(data);
                            });
                        } catch (e) {

                        }
                    }
                });
            });
        }

    }
