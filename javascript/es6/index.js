//let const var

if(true) {
  const a = 10;
  //a = 20;  //cannot reassigned 
}
//console.log(a);

const x = {a: 1};
x.a = 5;
//x = {b: 10} //assignment error


//Templates
let str = 'Hello';
let str1 = 'world';
let check = false;
console.log(`${check? str: 'NoNo'} ----- ${str1}`);

// () => {

// }