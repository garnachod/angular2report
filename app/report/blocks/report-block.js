System.register([], function(exports_1) {
    "use strict";
    var ReportBlock;
    return {
        setters:[],
        execute: function() {
            ReportBlock = (function () {
                function ReportBlock(directive, id, name, language, range) {
                    this.directive = directive;
                    this.id = id;
                    this.name = name;
                    this.language = language;
                    this.range = range;
                }
                ReportBlock.prototype.getId = function () { return this.id; };
                ;
                ReportBlock.prototype.getName = function () { return this.name; };
                ;
                ReportBlock.prototype.getLanguage = function () { return this.language; };
                ;
                ReportBlock.prototype.getRange = function () { return this.range; };
                ;
                ReportBlock.prototype.getDirective = function () { return this.directive; };
                ;
                ReportBlock.prototype.setId = function (id) { return this.id = id; };
                ;
                ReportBlock.prototype.setName = function (name) { return this.name = name; };
                ;
                ReportBlock.prototype.setLanguage = function (language) { return this.language = language; };
                ;
                ReportBlock.prototype.setRange = function (range) { return this.range = range; };
                ;
                ReportBlock.prototype.setDirective = function (directive) { return this.directive; };
                ;
                ReportBlock.prototype.injectProvider = function (provider) {
                    this.provider = provider;
                };
                return ReportBlock;
            }());
            exports_1("ReportBlock", ReportBlock);
        }
    }
});
//# sourceMappingURL=report-block.js.map