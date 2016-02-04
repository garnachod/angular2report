System.register(['./data-component', 'angular2/core', '../services/global-color.service'], function(exports_1) {
    "use strict";
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
    var data_component_1, core_1, global_color_service_1;
    var ExtendedLDAvisComponent;
    return {
        setters:[
            function (data_component_1_1) {
                data_component_1 = data_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (global_color_service_1_1) {
                global_color_service_1 = global_color_service_1_1;
            }],
        execute: function() {
            ExtendedLDAvisComponent = (function (_super) {
                __extends(ExtendedLDAvisComponent, _super);
                function ExtendedLDAvisComponent(globalColor) {
                    _super.call(this);
                    this.globalColor = globalColor;
                    $('.como-funciona').popover();
                }
                ExtendedLDAvisComponent.prototype.setData = function (data) {
                    this.data = data;
                    this.parseData();
                };
                ExtendedLDAvisComponent.prototype.parseData = function () {
                };
                ExtendedLDAvisComponent = __decorate([
                    core_1.Component({
                        selector: 'extended-ldavis',
                        template: "\n\n            <article id=\"ldavis\" class=\"row hidden-sm hidden-xs\">\n                <div class=\"col-md-12\">\n                    <div class=\"panel panel-default\">\n                        <div class=\"col-md-12\" id=\"lda\"></div>\n                        <p class=\"col-md-12 text-center\">\n                            <a class=\"como-funciona\"\n                               data-toggle=\"popover\"\n                               data-content=\"Los temas representan relaciones entre palabras.\n                               Al seleccionar un tema los paneles inferiores cambiar\u00E1n\n                               para representar la informaci\u00F3n relativa al mismo.\"\n                               data-placement=\"bottom\"\n                               data-original-title=\"Segmentaci\u00F3n en Tem\u00E1ticas del Contenido Publicado\"\n                               href=\"javascript:void(0);\">\n                                <span>Segmentaci\u00F3n en Tem\u00E1ticas del Contenido Publicado</span>\n                                <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </article>\n\n            <article id=\"charts\" class=\"row hidden-sm hidden-xs\">\n                <section class=\"col-md-6\">\n                    <div class=\"panel panel-default\">\n                        <div id=\"userBarChart\"></div>\n                        <p class=\"col-md-12 text-center\">\n                            <a class=\"como-funciona\"\n                               data-toggle=\"popover\"\n                               data-content=\"Representa a los usuarios m\u00E1s influyentes en esa tem\u00E1tica.\n                               Se determina a partir de la estructura de la\n                               red y la informaci\u00F3n obtenida de los temas.\"\n                               data-placement=\"bottom\"\n                               data-original-title=\"Lista de usuarios relevantes\"\n                               href=\"javascript:void(0);\">\n                                <span>Lista de Usuarios Relevantes</span>\n                                <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n                            </a>\n                        </p>\n                    </div>\n                </section>\n                <section class=\"col-md-6\">\n                    <div class=\"panel panel-default\">\n                        <div id=\"hoursChart\"></div>\n                        <p class=\"col-md-12 text-center\">\n                            <a class=\"como-funciona\"\n                               data-toggle=\"popover\"\n                               data-content=\"Es una representaci\u00F3n construida a partir de los\n                               tweets, retweets y favoritos que ha\n                               realizado la comunidad de seguidores de tu\n                               cuenta. La altura de la gr\u00E1fica es la\n                               cantidad de actividad media en ese momento.\"\n                               data-placement=\"bottom\"\n                               data-original-title=\"Gr\u00E1fica de actividad media\"\n                               href=\"javascript:void(0);\">\n                                <span>Gr\u00E1fica de Actividad Media</span>\n                                <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n                            </a>\n                        </p>\n                    </div>\n                </section>\n            </article> \n    "
                    }), 
                    __metadata('design:paramtypes', [global_color_service_1.GlobalColor])
                ], ExtendedLDAvisComponent);
                return ExtendedLDAvisComponent;
            }(data_component_1.DataComponent));
            exports_1("ExtendedLDAvisComponent", ExtendedLDAvisComponent);
        }
    }
});
//# sourceMappingURL=ldavis.component.js.map