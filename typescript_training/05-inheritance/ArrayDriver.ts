import {Shape} from './Shape';
import {Circle} from './Circle';
import {Retangle} from './Retangle';

let myShape = new Shape(10, 15);
let myCircle = new Circle(5, 10, 15);
let myRetangle = new Retangle(0, 0, 3, 7);

// Declarar um array de shapes

let theShapes: Shape[] = [];

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRetangle);

for (let tempShape of theShapes) {
  console.log(tempShape.getInfo());
}
