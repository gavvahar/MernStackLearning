class Vehicle {
 constructor(a) {
  this.a = a;
 } 

 getValue() {
  console.log(this.a);
 }
}

const vehicleObj = new Vehicle(10);


class Car extends Vehicle {
  constructor(a) {
    super(a);
   }
}

const carObj = new Car(10);

class Model extends Car
{
  constructor(a)
  {
    super(a);
   }
}

const modelObj = new Model(1967);