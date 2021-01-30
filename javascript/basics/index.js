console.log("Hello.....");

var a = 10;
console.log(a);

str = "nihar";
console.log(str);

function abc() {
  var b = 20;
  console.log("from abc", a, b);
}

function parent() {
  abc();
  z = 20;
  console.log("z: ", z);
}
parent();

//console.log("global", a, b);

var xyz;
console.log("xyz: ", xyz, typeof xyz);
xyz = 50;
console.log("xyz: ", xyz, typeof xyz);
xyz = 'Nihar';
console.log("xyz: ", xyz, typeof xyz);

xyz = false;
console.log("xyz: ", xyz, typeof xyz);

xyz = null;
console.log("xyz: ", xyz, typeof xyz);

for(var i=0; i<10; i++) {
  console.log(i);
}

// while
// do while
// if else
// switch