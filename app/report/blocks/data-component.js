System.register([], function(exports_1) {
    var DataComponent;
    return {
        setters:[],
        execute: function() {
            DataComponent = (function () {
                function DataComponent() {
                }
                DataComponent.prototype.setData = function (data) {
                    this.data = data;
                };
                return DataComponent;
            })();
            exports_1("DataComponent", DataComponent);
        }
    }
});
//# sourceMappingURL=data-component.js.map