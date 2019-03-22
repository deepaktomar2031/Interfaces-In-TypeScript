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
    var Shape_js_1, Rectangle;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Shape_js_1_1) {
                Shape_js_1 = Shape_js_1_1;
            }
        ],
        execute: function () {
            Rectangle = /** @class */ (function (_super) {
                __extends(Rectangle, _super);
                function Rectangle(base, height) {
                    var _this = _super.call(this, "rectangle") || this;
                    _this.base = base;
                    _this.height = height;
                    return _this;
                }
                Rectangle.prototype.area = function () {
                    this._area = this.base * this.height;
                    _super.prototype.area.call(this);
                };
                Rectangle.prototype.parameter = function () {
                    this._parameter = 2 * (this.base + this.height);
                    _super.prototype.parameter.call(this);
                };
                return Rectangle;
            }(Shape_js_1.Shape));
            exports_1("Rectangle", Rectangle);
            ;
        }
    };
});
