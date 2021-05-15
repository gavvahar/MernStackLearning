//localStorage
localStorage.setItem('test', 'hello');
localStorage.setItem('num', 2);
localStorage.setItem('obj', JSON.stringify({a: 10}));

console.log(localStorage.getItem('test'));
localStorage.removeItem('test');
console.log(localStorage.test);

///localStorage.clear();

//sessionStorage
sessionStorage.setItem('test', 'hello');
