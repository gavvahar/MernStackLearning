//let const var

if (true) {
  const a = 10;
  //a = 20;  //cannot reassigned
}
//console.log(a);

const x = { a: 1 };
x.a = 5;
//x = {b: 10} //assignment error

//Templates
let str = "Hello";
let str1 = "world";
let check = false;
console.log(`${check ? str : "NoNo"} ----- ${str1}`);

// function abc() {
//   let a = 10;
//   return a;
// }

// const abc1 = () => {
//   let a = 10;
//   return a;
// };

const obj = {
  a: 10,
  b: "hello",
  abc: {
    x1: 100,
    y1: 200,
  },
};

const {
  a,
  abc: { x1 },
  ...rest
} = obj;

console.log(obj.abc, x1);
console.log(rest);

const testArr = [10, 20, 30];

const [a1, ...xyz] = testArr;
console.log(a1, xyz);

function test(a, b = 10, ...rest) {
  console.log(a, b, rest);
}
