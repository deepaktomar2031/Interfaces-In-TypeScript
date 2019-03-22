import { Rectangle } from "./Rectangle.js";
import { Triangle } from "./Triangle.js";

window.onload = () => {
    // console.log("Welcome to typeScript!!");

    let rect = new Rectangle(2, 4);
    rect.area();
    rect.parameter();

    let tri = new Triangle(2, 3);
    tri.area();
    tri.parameter();
}