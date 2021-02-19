var regexTest = /hello/i;

var input = 'Hello world...';

console.log(regexTest.test(input));
console.log(input.match(regexTest));


var car = /Nissan/i;
var model = 'Nissan GTR';
console.log(car.test(model));
console.log(model.match(car));

car = /Ford/s;
model = 'Ford Mustang';
console.log(car.test(model));
console.log(model.match(car));