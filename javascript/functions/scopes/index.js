var a = 10;
console.log("global: ", this);
function abc() {
  var b = 20;
  console.log(a, b);
  console.log("local: ", this);
}

console.log(a);

if(true) {      // while, for, ...
  const x = 'hello....';
  console.log(x);
  x = 'world....';
  console.log(x);

}

//console.log("outside: ", x);


for(let i = 0; i< 10; i++) {
  console.log(i);
}
console.log("outside: ", i);
