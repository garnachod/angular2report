System.register([], function(exports_1) {
    var Block;
    return {
        setters:[],
        execute: function() {
            Block = (function () {
                function Block(directive, id, name, language, interval) {
                    this.directive = directive;
                    this.id = id;
                    this.name = name;
                    this.language = language;
                    this.interval = interval;
                }
                return Block;
            })();
            exports_1("Block", Block);
        }
    }
});
//# sourceMappingURL=block.js.map