System.register([], function(exports_1) {
    "use strict";
    var FileProvider;
    return {
        setters:[],
        execute: function() {
            FileProvider = (function () {
                function FileProvider(file, http) {
                    this.file = file;
                    this.http = http;
                }
                FileProvider.prototype.getData = function () {
                    return this.http.get(this.file).map(function (res) { return res.json(); });
                };
                return FileProvider;
            }());
            exports_1("FileProvider", FileProvider);
        }
    }
});
//# sourceMappingURL=file-provider.js.map