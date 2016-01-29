System.register([], function(exports_1) {
    var Block;
    return {
        setters:[],
        execute: function() {
            Block = (function () {
                function Block(directive, id, name, language, range, service) {
                    this.directive = directive;
                    this.id = id;
                    this.name = name;
                    this.language = language;
                    this.range = range;
                    this.service = service;
                }
                return Block;
            })();
            exports_1("Block", Block);
        }
    }
});
//# sourceMappingURL=block.js.map