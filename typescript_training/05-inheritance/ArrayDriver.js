"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Retangle_1 = require("./Retangle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 15);
var myRetangle = new Retangle_1.Retangle(0, 0, 3, 7);
// Declarar um array de shapes
var theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRetangle);
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var tempShape = theShapes_1[_i];
    console.log(tempShape.getInfo());
}
