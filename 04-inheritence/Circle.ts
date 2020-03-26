import { Shape } from './Shape';

export class Circle extends Shape {

    constructor(theX: number, theY: number, private _radius: number) {
        super(theX, theY);
    }
    
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    public getArea(): number {
        return 3.14159*this._radius*this._radius
    }

    public getCircumference(): number {
        return 2*3.14159*this._radius;
    }

    getInfo(): string {
        return super.getInfo() + `, radius=${this._radius}, area=${this.getArea()}, circumference=${this.getCircumference()}`
    }

}