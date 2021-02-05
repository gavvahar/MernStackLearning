// Named
function abc() {
  var b = 20;
  console.log("abc ....");
}

//Anonymous
var xyz  = function () {
  var b = 20;
  console.log("xyz ....");
  console.log(b);
}

// IIFE
(function (x) {
 console.log(x, this);
}('hello...'));

//Arrow function
var x = () => {
  return 'nihar....';
}
console.log(x());
var y = () => 'nihar....';
console.log(y());


var car = () => 'Tesla Roadster';
console.log(car());