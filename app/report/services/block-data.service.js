System.register(['./json.service', 'angular2/core', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var json_service_1, core_1, Rx_1;
    var BlockData;
    return {
        setters:[
            function (json_service_1_1) {
                json_service_1 = json_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            BlockData = (function () {
                function BlockData(service) {
                    this.service = service;
                }
                BlockData.prototype.getData = function (block) {
                    switch (block.componentName) {
                        case "user-stats":
                            return this.service.getData("/informe/clientes/p_molins/json/stats.json");
                        case "basic-user-stats":
                            return this.service.getData("/informe/clientes/p_molins/json/stats.json");
                        case "hashtag-activity":
                            return this.service.getData("/informe/clientes/p_molins/json/activity.json");
                        case "team-activity":
                            return this.service.getData("/informe/clientes/p_molins/json/teams.json");
                        case "ldavis":
                            return this.service.getData("/informe/clientes/p_molins/json/terms.json");
                        case "extended-ldavis":
                            return this.service.getData("/informe/clientes/p_molins/json/terms.json");
                        case "team-sentiment":
                            return this.service.getData("/informe/clientes/p_molins/json/sentiments.json");
                        case "cloud":
                            return this.service.getData("/informe/clientes/p_molins/json/cloud.json");
                        case "community-network":
                            return Rx_1.Observable.create(function (subscriber) {
                                subscriber.next("/informe/clientes/p_molins/img/clusters.png").complete();
                            });
                        case "betweenness-network":
                            return Rx_1.Observable.create(function (subscriber) {
                                subscriber.next("/informe/clientes/p_molins/img/betweenness.png").complete();
                            });
                        case "relevance-network":
                            return Rx_1.Observable.create(function (subscriber) {
                                subscriber.next("/informe/clientes/p_molins/img/pagerank.png").complete();
                            });
                        default:
                            console.error('BlockData couldn\'t identify the block named: ' + block.componentName);
                            return Rx_1.Observable.create(function (subscriber) {
                                subscriber.next("Error").complete();
                            });
                    }
                };
                BlockData = __decorate([
                    __param(0, core_1.Inject(json_service_1.JSONService)), 
                    __metadata('design:paramtypes', [json_service_1.JSONService])
                ], BlockData);
                return BlockData;
            })();
            exports_1("BlockData", BlockData);
        }
    }
});
//# sourceMappingURL=block-data.service.js.map