System.register(['angular2/core', './blocks/block-factory', './services/data-service-factory', './blocks/user-stats.component'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, block_factory_1, data_service_factory_1, user_stats_component_1;
    var ReportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (block_factory_1_1) {
                block_factory_1 = block_factory_1_1;
            },
            function (data_service_factory_1_1) {
                data_service_factory_1 = data_service_factory_1_1;
            },
            function (user_stats_component_1_1) {
                user_stats_component_1 = user_stats_component_1_1;
            }],
        execute: function() {
            ReportComponent = (function () {
                function ReportComponent(loader, injector, elementRef, rbf, rbpf) {
                    this.loader = loader;
                    this.injector = injector;
                    this.elementRef = elementRef;
                    this.rbf = rbf;
                    this.rbpf = rbpf;
                    this.blocks = this.rbf.getBlocks(this.config);
                }
                ReportComponent.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.blocks.map(function (block) {
                        _this.loader.loadAsRoot(block.directive, '#' + block.id, _this.injector)
                            .then(function (component) {
                            component.instance.setService();
                            //var service = this.rbpf.getProvider(block);
                            // todo: inject data services via magic component.instance.injectService(service);
                        });
                    });
                };
                ReportComponent = __decorate([
                    core_1.Component({
                        directives: [user_stats_component_1.UserStatsComponent],
                        providers: [block_factory_1.BlockFactory, data_service_factory_1.DataServiceFactory],
                        selector: 'report',
                        template: "\n    <div *ngFor=\"#block of reportBlocks\" id=\"{{ block.id }}\">\n    </div>\n    ",
                        inputs: ['config'],
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.Injector, core_1.ElementRef, block_factory_1.BlockFactory, data_service_factory_1.DataServiceFactory])
                ], ReportComponent);
                return ReportComponent;
            }());
            exports_1("ReportComponent", ReportComponent);
        }
    }
});
//# sourceMappingURL=report.component.js.map