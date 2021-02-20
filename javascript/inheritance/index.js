// function Car(door) {
//   this.wheels = 4;
//   this.door = door;

//   this.drive = function () {
//     console.log("Number of wheels", this.wheels, this.color);
//   };
// }

// Car.prototype.cleaning = function() {
//   console.log("Car cleaning Name: ", this.name)
// }

// function tataCar() {
//   this.name = 'tata';
//   this.color = "white";
//   Car.call(this, 10);
// }
// tataCar.prototype = new Car();

// var tataCarObj = new tataCar();

class Car {
  constructor(door) {
    this.wheels = 4;
    this.door = door;
  }

  cleaning() {
    console.log("Car cleaning Name: ", this.name);
  }
}

class tataCar extends Car {
  constructor() {
    super(10);
    this.name = "tata";
    this.color = "white";
  }
}

var tataCarObj = new tataCar();
