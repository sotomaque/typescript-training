import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';


let myCircle = new Circle(5, 10, 20);
console.log(myCircle.getInfo());

let myRect = new Rectangle(12, 10, 4, 6);
console.log(myRect.getInfo());