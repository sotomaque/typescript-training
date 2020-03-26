"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRect = new Rectangle_1.Rectangle(12, 10, 4, 6);
var theShapes = [];
theShapes.push(myCircle);
theShapes.push(myRect);
console.log('calling get info for each shape');
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log(tempShape.getInfo());
}
console.log('\nprinting array of shapes as is');
console.log(theShapes);
