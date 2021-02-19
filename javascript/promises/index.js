// for(var i= 0; i< 1000; i++) {
//   console.log(" ---- ", i);
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }


var b = new Promise(function(resolve, reject) {
  //resolve('Person A - I am done success');

  reject("Failes");
});

var c = new Promise(function(resolve, reject) {
  resolve('PersonB - I am done success');

  //reject("Failes");
});


// a.then((res) => {
//   console.log(res);
// }).catch(err => console.log(err)); 


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


Promise.all([b, c])
  .then(([res1, res2]) => console.log(res1, res2))
  .catch(err => console.log(err)); 




//async await

async function myWork() {
  return new Promise(function(resolve, reject) {
    //resolve('MyWork - I am done success');
  reject("MyWork Failes");
  });
}

async function checkWork() {
  try{
    const res = await myWork();
    console.log(res);
  } catch (err) {
    console.log(err)
  }; 
  
}

checkWork();
