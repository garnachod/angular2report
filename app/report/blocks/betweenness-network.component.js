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
    var NUM_USERS, BetweennessNetworkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NUM_USERS = 15;
            BetweennessNetworkComponent = (function () {
                function BetweennessNetworkComponent() {
                    $('.como-funciona').popover();
                }
                BetweennessNetworkComponent.prototype.ngAfterViewInit = function () {
                    $('#grafoBetweenness').loupe({
                        width: 200,
                        height: 200,
                        loupe: 'lupa'
                    });
                };
                BetweennessNetworkComponent.prototype.setData = function (data) {
                    this.src = data;
                };
                BetweennessNetworkComponent = __decorate([
                    core_1.Component({
                        selector: 'betweenness-network',
                        template: "\n    <section class=\"col-md-6\">\n        <div class=\"panel panel-default\">\n            <img id=\"grafoBetweenness\" class=\"img-responsive\" src=\"{{ src }}\"/>\n            <p class=\"col-md-12 text-center\">\n            <a class=\"como-funciona\"\n                  data-toggle=\"popover\"\n                  data-content=\"\u00C9sta es una manera visual de ver la Intermediaci\u00F3n\n                  de cada usuario de tu Comunidad. Aparecen m\u00E1s grandes aquellos\n                  usuarios que tienen un alto nivel de Intermediaci\u00F3n y m\u00E1s peque\u00F1os\n                  aquellos que lo tienen bajo.\"\n                  data-placement=\"bottom\"\n                  data-original-title=\"Red de Intermediaci\u00F3n\"\n                  href=\"javascript:void(0);\">\n                   <span>Red de Intermediaci\u00F3n</span>\n                   <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n               </a>\n            </p>\n        </div>\n    </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], BetweennessNetworkComponent);
                return BetweennessNetworkComponent;
            })();
            exports_1("BetweennessNetworkComponent", BetweennessNetworkComponent);
        }
    }
});
//# sourceMappingURL=betweenness-network.component.js.map