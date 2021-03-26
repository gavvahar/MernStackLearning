var a = [1, 2];
var aObj = new Array(10);

var t = ["Mustang", "Lexus", "Ferrari", "Bugatti"];
var aObj = new Array(2);
t.map(x => console.log(x));

var t = [1967, 2012, 2015, 2020, 2021];
console.log(t.map(x => x*2));
console.log(t.map(function(x) {
  return x*4;
}));

console.log(t.filter(x => x !== 2020));