System.register(['angular2/core'], function(exports_1) {
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
    var core_1;
    var NUM_USERS, RelevanceNetworkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NUM_USERS = 15;
            RelevanceNetworkComponent = (function () {
                function RelevanceNetworkComponent() {
                    $('.como-funciona').popover();
                }
                RelevanceNetworkComponent.prototype.ngAfterViewInit = function () {
                    $('#grafoRelevance').loupe({
                        width: 200,
                        height: 200,
                        loupe: 'lupa'
                    });
                };
                RelevanceNetworkComponent.prototype.setData = function (data) {
                    this.src = data;
                };
                RelevanceNetworkComponent = __decorate([
                    core_1.Component({
                        selector: 'relevance-network',
                        template: "\n    <article id=\"graphs\">\n    <section class=\"col-md-6\">\n        <div class=\"panel panel-default\">\n            <img id=\"grafoRelevance\" class=\"img-responsive\" src=\"{{ src }}\"/>\n            <p class=\"col-md-12 text-center\">\n                <a class=\"como-funciona\"\n                        data-toggle=\"popover\"\n                        data-content=\"El grafo de comunidades es similar al grafo de actividad\n                                  salvo porque a cada subcomunidad le ha sido asignado un color. Llamamos\n                                  subcomunidad a un conjunto de cuentas m\u00E1s relacionada entre s\u00ED de lo habitual.\"\n                                  data-placement=\"bottom\"\n                                  data-original-title=\"Red de Comunidades\"\n                                  href=\"javascript:void(0);\">\n                                  <span>Red de Comunidades</span>\n                                  <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n                </a>\n            </p>\n        </div>\n    </section>\n    </article>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], RelevanceNetworkComponent);
                return RelevanceNetworkComponent;
            }());
            exports_1("RelevanceNetworkComponent", RelevanceNetworkComponent);
        }
    }
});
//# sourceMappingURL=relevance-network.component.js.map