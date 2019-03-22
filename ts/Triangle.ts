import { Shape, IShape } from "./Shape.js";

export class Triangle extends Shape implements IShape {
    constructor(public base: number, public height: number) {
        super("triangle");
    }
    public area() {
        this._area = 0.5 * this.base * this.height;
        super.area();
    }
    public parameter() {
        this._parameter = 0.5 * this.base * this.height;
        super.parameter();
    }
}