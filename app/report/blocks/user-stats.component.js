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
    var NUM_USERS, UserStatsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NUM_USERS = 15;
            UserStatsComponent = (function () {
                function UserStatsComponent() {
                }
                UserStatsComponent.prototype.setData = function (data) {
                    this.data = data;
                };
                UserStatsComponent = __decorate([
                    core_1.Component({
                        selector: 'user-stats',
                        template: "\n    <section class=\"col-md-6\">\n    <div class=\"panel with-nav-tabs panel-default\">\n        <ul id=\"statTabs\" class=\"nav nav-tabs\">\n            <li class=\"active\"><a href=\"#tab1\" data-toggle=\"tab\">Tweets</a></li>\n            <li><a href=\"#tab2\" data-toggle=\"tab\">Retweets</a></li>\n            <li><a href=\"#tab3\" data-toggle=\"tab\">Relevancia</a></li>\n            <li><a href=\"#tab4\" data-toggle=\"tab\">Intermediaci\u00F3n</a></li>\n        </ul>\n        <div class=\"panel-body\">\n            <div class=\"tab-content row\">\n                <div class=\"tab-pane fade in active col-md-12\" id=\"tab1\">\n                    <div id=\"tweetsStatsChart\"></div>\n                </div>\n                <div class=\"tab-pane fade col-md-12\" id=\"tab2\">\n                    <div id=\"retweetsStatsChart\"></div>\n                </div>\n                <div class=\"tab-pane fade col-md-12\" id=\"tab3\">\n                    <div id=\"pagerankStatsChart\"></div>\n                </div>\n                <div class=\"tab-pane fade col-md-12\" id=\"tab4\">\n                    <div id=\"closenessStatsChart\"></div>\n                </div>\n            </div>\n        </div>\n\n        <p class=\"col-md-12 text-center\">\n            <a class=\"como-funciona\"\n            data-toggle=\"popover\"\n            data-content=\"Al pinchar en la pesta\u00F1a de cada m\u00E9trica\n            aparecen los 10 usuarios m\u00E1s valorados seg\u00FAn \u00E9sta. La\n            longitud de la barra representa el valor de la m\u00E9trica\n            en dicho usuario. Puedes acceder a cada uno de estos\n            perfiles pinchando sobre su nombre.\"\n            data-placement=\"bottom\"\n            data-original-title=\"M\u00E9tricas de Usuarios\"\n            href=\"javascript:void(0);\">\n                <span>M\u00E9tricas de Usuarios</span>\n                <small><i class=\"glyphicon glyphicon-info-sign\"></i></small>\n            </a>\n        </p>\n    </div>\n</section>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], UserStatsComponent);
                return UserStatsComponent;
            })();
            exports_1("UserStatsComponent", UserStatsComponent);
        }
    }
});
//# sourceMappingURL=user-stats.component.js.map