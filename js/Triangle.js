System.register(["./Shape.js"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
            return extendStatics(d, b);
        }
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var Shape_js_1, Triangle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Shape_js_1_1) {
                Shape_js_1 = Shape_js_1_1;
            }
        ],
        execute: function () {
            Triangle = /** @class */ (function (_super) {
                __extends(Triangle, _super);
                function Triangle(base, height) {
                    var _this = _super.call(this, "triangle") || this;
                    _this.base = base;
                    _this.height = height;
                    return _this;
                }
                Triangle.prototype.area = function () {
                    this._area = 0.5 * this.base * this.height;
                    _super.prototype.area.call(this);
                };
                Triangle.prototype.parameter = function () {
                    this._parameter = 0.5 * this.base * this.height;
                    _super.prototype.parameter.call(this);
                };
                return Triangle;
            }(Shape_js_1.Shape));
            exports_1("Triangle", Triangle);
        }
    };
});
