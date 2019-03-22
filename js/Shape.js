System.register([], function (exports_1, context_1) {
    "use strict";
    var Shape;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Shape = /** @class */ (function () {
                function Shape(type) {
                    this.type = type;
                    this._area = 0;
                    this._parameter = 0;
                }
                Shape.prototype.area = function () {
                    console.log("Area of " + this.type + " is " + this._area);
                };
                Shape.prototype.parameter = function () {
                    console.log("Parameter of " + this.type + " is " + this._parameter);
                };
                return Shape;
            }());
            exports_1("Shape", Shape);
        }
    };
});
