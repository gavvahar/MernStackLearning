console.log("Hello world...");
var a =10;
console.log(a);


// myscript.js
// global.x = 5;
// setTimeout(() => {
//   debugger;
//   console.log('world');
// }, 1000);
// console.log('hello');


var t = ["Mustang", "Lexus", "Ferrari", "Bugatti"];
var aObj = new Array(2);
t.map(x => console.log(x));

var t = [1967, 2012, 2015, 2020, 2021];
console.log(t.map(x => x*2));
console.log(t.map(function(x) {
  return x*4;
}));

console.log(t.filter(x => x !== 2020));


class Car
{
  constructor(door)
  {
    this.wheels = 4;
    this.door = door;
  }
  cleaning()
  {
    console.log("Car cleaning Name: ", this.name);
  }
}
class subaruCar extends Car {
  constructor() {
    super(2);
    this.name = "Subaru";
    this.color = "Matte Black";
  }

  getName() {
    return this.name;
  }
  getColor()
  {
    return this.color;
  }
}

var subaruCarObj = new subaruCar();
console.log(subaruCarObj.getName());
console.log(subaruCarObj.getColor());