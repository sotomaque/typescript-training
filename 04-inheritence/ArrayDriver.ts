import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myCircle = new Circle(5, 10, 20);
let myRect = new Rectangle(12, 10, 4, 6);


let theShapes: Shape[] = [];
theShapes.push(myCircle);
theShapes.push(myRect);

console.log('calling get info for each shape');
for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
}
