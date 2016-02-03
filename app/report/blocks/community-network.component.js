System.register(['angular2/core'], function(exports_1) {
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
    var NUM_USERS, CommunityNetworkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NUM_USERS = 15;
            CommunityNetworkComponent = (function () {
                function CommunityNetworkComponent() {
                    $('.como-funciona').popover();
                }
                CommunityNetworkComponent.prototype.ngAfterViewInit = function () {
                    $('#grafoClusters').loupe({
                        width: 200,
                        height: 200,
                        loupe: 'lupa'
                    });
                };
                CommunityNetworkComponent.prototype.setData = function (data) {
                    this.src = data;
                };
                CommunityNetworkComponent = __decorate([
                    core_1.Component({
                        selector: 'community-network',
                        template: "\n    <section class=\"col-md-6\">\n        <div class=\"panel panel-default\">\n            <img id=\"grafoClusters\" class=\"img-responsive\" src=\"{{ src }}\"/>\n            <p class=\"col-md-12 text-center\">\n                <a class=\"como-funciona\"\n                        data-toggle=\"popover\"\n                        data-content=\"El grafo de comunidades es similar al grafo de actividad\n                                  salvo porque a cada subcomunidad le ha sido asignado un color. Llamamos\n                                  subcomunidad a un conjunto de cuentas m\u00E1s relacionada entre s\u00ED de lo habitual.\"\n                                  data-placement=\"bottom\"\n                                  data-original-title=\"Red de Comunidades\"\n                                  href=\"javascript:void(0);\">\n                                  <span>Red de Comunidades</span>\n                                  <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n                </a>\n            </p>\n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CommunityNetworkComponent);
                return CommunityNetworkComponent;
            })();
            exports_1("CommunityNetworkComponent", CommunityNetworkComponent);
        }
    }
});
//# sourceMappingURL=community-network.component.js.map