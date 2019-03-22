import { Shape, IShape } from "./Shape.js";

export class Rectangle extends Shape implements IShape {
    constructor(public base: number, public height: number) {
        super("rectangle");
    }

    public area() {
        this._area = this.base * this.height;
        super.area();
    }
    public parameter() {
        this._parameter = 2 * (this.base + this.height);
        super.parameter();
    }
};