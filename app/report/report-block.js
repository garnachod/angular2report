System.register([], function(exports_1) {
    var ReportBlock;
    return {
        setters:[],
        execute: function() {
            ReportBlock = (function () {
                function ReportBlock(id, name, language, range) {
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
                ReportBlock.prototype.injectProvider = function (provider) {
                    this.provider = provider;
                };
                return ReportBlock;
            })();
            exports_1("ReportBlock", ReportBlock);
        }
    }
});
//# sourceMappingURL=report-block.js.map