import {Shape} from './Shape';
import {Circle} from './Circle';
import {Retangle} from './Retangle';

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 15);
console.log(myCircle.getInfo());

let myRetangle = new Retangle(0, 0, 3, 7);
console.log(myRetangle.getInfo());
