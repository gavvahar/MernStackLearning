var a = [1, 2];
var aObj = new Array(10);

var arrayObj = [20, 10, 'hello', {x: 50}, true];

var t = [1967, 2015, 2020, 2021];
var aObj = new Array(2);
t.map(x => console.log(x));

//map
var t = [1967, 2015, 2020, 2021];
console.log(t.map(x => x*2));
console.log(t.map(function(x) {
  return x*2;
}));

//reduce
console.log(t.reduce((acc, a) => {
  return acc+a;
}, 0));


//filter 
console.log(t.filter(x => x !== 2020));
