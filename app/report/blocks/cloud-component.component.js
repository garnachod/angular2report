System.register(["./data-component", 'angular2/core'], function(exports_1) {
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
    var data_component_1, core_1;
    var CloudComponent;
    return {
        setters:[
            function (data_component_1_1) {
                data_component_1 = data_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CloudComponent = (function (_super) {
                __extends(CloudComponent, _super);
                function CloudComponent() {
                    _super.call(this);
                }
                CloudComponent.prototype.setData = function (data) {
                    this.parseData(data);
                };
                CloudComponent.prototype.parseData = function (words) {
                    words.map(function (obj) {
                        return {
                            text: obj.text,
                            weight: Math.log(obj.weight)
                        };
                    });
                    $('#nube').jQCloud(words, {
                        colors: ['#CC59CD', '#C35FCA', '#B26CC5', '#A973C2', '#A379C0', '#9C7FBF', '#9587BD', '#8F91BC', '#8C94BB']
                    });
                };
                CloudComponent = __decorate([
                    core_1.Component({
                        selector: 'cloud',
                        template: "\n    <section class=\"col-md-12\">\n       <div class=\"panel panel-default\">\n           <div id=\"nube\"></div>\n           <p class=\"col-md-12 text-center\">\n               <a class=\"como-funciona\"\n                  data-toggle=\"popover\"\n                  data-content=\"\u00BFDe que suele hablar la gente cuando usa el hastag? Aqui tenemos las palabras m\u00E1s usadas, cuanto m\u00E1s grande sea la palabra m\u00E1s gente la habr\u00E1 utilizado.\"\n                  data-placement=\"bottom\"\n                  data-original-title=\"Nube de Palabras\"\n                  href=\"javascript:void(0);\">\n                   <span>Nube de Palabras</span>\n                   <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n               </a>\n           </p>\n       </div>\n\n   </section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CloudComponent);
                return CloudComponent;
            })(data_component_1.DataComponent);
            exports_1("CloudComponent", CloudComponent);
        }
    }
});
//# sourceMappingURL=cloud-component.component.js.map