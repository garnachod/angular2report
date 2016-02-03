System.register([], function(exports_1) {
    var GlobalColor;
    return {
        setters:[],
        execute: function() {
            GlobalColor = (function () {
                function GlobalColor() {
                    this.backgroundColor = 'rgba(245, 208, 159, 0.4)';
                    this.primaryColor = 'rgba(91, 104, 158, 0.7)';
                    this.secondaryColor = 'rgba(204, 89, 205, 1)';
                }
                return GlobalColor;
            })();
            exports_1("GlobalColor", GlobalColor);
        }
    }
});
//# sourceMappingURL=global-color.service.js.map