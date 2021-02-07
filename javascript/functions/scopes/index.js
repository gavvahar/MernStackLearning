var a = 10;
console.log("global: ", this);
function abc() {
  var b = 20;
  console.log(a, b);
  console.log("local: ", this);
}

console.log(a);

if(true) {      // while, for, ...
  var x = 'hello....';
  console.log(x);
  x = 'world....';
  console.log(x);

}

//console.log("outside: ", x);


for(let i = 0; i< 10; i++) {
  console.log(i);
}
//console.log("outside: ", i);

for(let c = 0; c <=10; c++)
{
  let i;
  i = c*c;
  console.log(i);
}