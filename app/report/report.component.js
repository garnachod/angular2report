System.register(['angular2/core', './blocks/block-factory', './services/block-data.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, block_factory_1, block_data_service_1;
    var ReportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (block_factory_1_1) {
                block_factory_1 = block_factory_1_1;
            },
            function (block_data_service_1_1) {
                block_data_service_1 = block_data_service_1_1;
            }],
        execute: function() {
            ReportComponent = (function () {
                function ReportComponent(loader, injector, elementRef, factory, blockData) {
                    this.loader = loader;
                    this.injector = injector;
                    this.elementRef = elementRef;
                    this.factory = factory;
                    this.blockData = blockData;
                }
                ReportComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    if (!this.config) {
                        console.error('ReportComponent didn\'t get config input data');
                    }
                    this.blocks = this.factory.getBlocks(this.config);
                    this.blocks.map(function (block) {
                        _this.loader.loadNextToLocation(block.directive, _this.elementRef)
                            .then(function (component) {
                            if (_this.blockData.getData) {
                                try {
                                    _this.blockData.getData(block)
                                        .subscribe(function (data) {
                                        component.instance.setData(data);
                                    });
                                }
                                catch (e) {
                                }
                            }
                        });
                    });
                };
                ReportComponent = __decorate([
                    core_1.Component({
                        selector: 'report',
                        inputs: ['config'],
                        providers: [block_factory_1.BlockFactory, block_data_service_1.BlockData],
                        template: "\n    \n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.Injector, core_1.ElementRef, block_factory_1.BlockFactory, block_data_service_1.BlockData])
                ], ReportComponent);
                return ReportComponent;
            })();
            exports_1("ReportComponent", ReportComponent);
        }
    }
});
//# sourceMappingURL=report.component.js.map