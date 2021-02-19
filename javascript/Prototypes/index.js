var obj = {x: 10};

console.log(obj, obj.prototype);

function abc() {
  this.x=10;
}

abc.prototype.y = 10;
abc.prototype.test = function() {
consol.log(test);
};

var aObj = new abc();
console.log(aObj);


var obj = {x: 10};

console.log(obj, obj.prototype);

function car()
{
  this.x='Dodge';
}

car.prototype.y = 'Viper';
car.prototype.test = function() {
consol.log(test);
};

var Car = new car();
console.log(Car);