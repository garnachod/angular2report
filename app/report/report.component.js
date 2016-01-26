System.register(['angular2/core', './report-block-factory', './report-block-provider-factory'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, report_block_factory_1, report_block_provider_factory_1;
    var ReportComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (report_block_factory_1_1) {
                report_block_factory_1 = report_block_factory_1_1;
            },
            function (report_block_provider_factory_1_1) {
                report_block_provider_factory_1 = report_block_provider_factory_1_1;
            }],
        execute: function() {
            ReportComponent = (function () {
                function ReportComponent(dcl, injector, rbf, rbpf) {
                    this.dcl = dcl;
                    this.injector = injector;
                    this.rbf = rbf;
                    this.rbpf = rbpf;
                }
                ReportComponent.prototype.loadConfig = function (data) {
                    var _this = this;
                    this.config = data;
                    this.reportBlocks = this.rbf.getReportBlocks(this.config);
                    this.reportBlocks.forEach(function (block) {
                        _this.dcl.loadAsRoot(block, '#' + block.getName(), _this.injector)
                            .then(function (component) {
                            var provider = _this.rbpf.getProvider(block);
                            component.instance.injectProvider(provider);
                        });
                    });
                };
                ReportComponent.prototype.ngOnInit = function () {
                };
                ReportComponent = __decorate([
                    core_1.Component({
                        providers: [report_block_factory_1.ReportBlockFactory, report_block_provider_factory_1.ReportBlockProviderFactory],
                        selector: 'report',
                        template: "\n    <div *ngFor=\"#block of reportBlocks\" id=\"{{ block.nombre }}\">\n    </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.Injector, report_block_factory_1.ReportBlockFactory, report_block_provider_factory_1.ReportBlockProviderFactory])
                ], ReportComponent);
                return ReportComponent;
            })();
            exports_1("ReportComponent", ReportComponent);
        }
    }
});
//# sourceMappingURL=report.component.js.map