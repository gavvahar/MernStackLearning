var car = /Ferrari/i;
var model = 'Ferrari 488 GTB';
console.log(car.test(model));
console.log(model.match(car));

car = /Bugatti/i;
model = 'Bugatti Chiron';
console.log(car.test(model));
console.log(model.match(car));

car = /Ford/i;
model = 'Ford GT';
console.log(car.test(model));
console.log(model.match(car));