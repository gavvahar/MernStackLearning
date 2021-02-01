// Named
function abc() {
  var b = 20;
  console.log("abc ....");
}

//Anonymous
var xyz  = function () {
  var b = 20;
  console.log("xyz ....");
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
