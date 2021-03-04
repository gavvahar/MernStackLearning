
function * abc() {
  const i = 100;
  console.log('Hello...');
  yield 'Hello';
  console.log('World.');
  yield 'World';
  console.log('print i=', i);
  yield i;
}

const obj = abc();
console.log(obj.next().value);
//console.log(obj.next().value);


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(response => console.log(response));

// const fetchJson = function * (url) {
//   let request = yield fetch(url);
//   let jsonRes = request.json();
//   return jsonRes;
// }

function * car()
{
  const c = 2012;
  console.log(c);
  yield 'Mustang';
  console.log('Shelby');
  yield 'GT500';
  console.log('Super Snake');
}
const obj1 = car();
for(let t = 0; t < 3; t++)
{
  console.log(obj1.next().value);
}