System.register(["./Rectangle.js", "./Triangle.js"], function (exports_1, context_1) {
    "use strict";
    var Rectangle_js_1, Triangle_js_1;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Rectangle_js_1_1) {
                Rectangle_js_1 = Rectangle_js_1_1;
            },
            function (Triangle_js_1_1) {
                Triangle_js_1 = Triangle_js_1_1;
            }
        ],
        execute: function () {
            window.onload = function () {
                // console.log("Welcome to typeScript!!");
                var rect = new Rectangle_js_1.Rectangle(2, 4);
                rect.area();
                rect.parameter();
                var tri = new Triangle_js_1.Triangle(2, 3);
                tri.area();
                tri.parameter();
            };
        }
    };
});
