
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


// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(response => console.log(response));

// const fetchJson = function * (url) {
//   let request = yield fetch(url);
//   let jsonRes = request.json();
//   return jsonRes;
// }