export class Shape {
    protected _area: number;
    protected _parameter: number;
    constructor(protected type: string) {
        this._area = 0;
        this._parameter = 0;
    }
    public area(): void {
        console.log(`Area of ${this.type} is ${this._area}`);
    }
    public parameter(): void {
        console.log(`Parameter of ${this.type} is ${this._parameter}`);
    }
}

export interface IShape {
    base: number;
    height: number;
    area: () => void;
    parameter: () => void;
}