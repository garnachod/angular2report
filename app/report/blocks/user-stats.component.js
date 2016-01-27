System.register(['./report-block', 'angular2/core'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var report_block_1, core_1;
    var UserStatsComponent;
    return {
        setters:[
            function (report_block_1_1) {
                report_block_1 = report_block_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserStatsComponent = (function (_super) {
                __extends(UserStatsComponent, _super);
                function UserStatsComponent() {
                    _super.apply(this, arguments);
                }
                UserStatsComponent = __decorate([
                    core_1.Component({
                        selector: 'user-stats',
                        template: "\n    Soy el componente user-start\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserStatsComponent);
                return UserStatsComponent;
            })(report_block_1.ReportBlock);
            exports_1("UserStatsComponent", UserStatsComponent);
        }
    }
});
//# sourceMappingURL=user-stats.component.js.map