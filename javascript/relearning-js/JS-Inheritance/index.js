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

class subaruCar extends Car
{
  constructor()
  {
    super(2);
    this.name = "Subaru";
    this.color = "Matte Black";
  }
}

var subaruCarObj = new subaruCar();

class mazdaCar extends Car
{
  constructor()
  {
    super(2);
    this.name = "Mazda";
    this.color = "Red";
  }
}

var mazdaCarObj = new mazdaCar();