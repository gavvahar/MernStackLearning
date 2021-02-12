try {
  const a = 10;
  var x = 1;
  // if(a > 9) {
  //   throw('MyError', 'number is too big');
  // } 
  const dateObj = new Date('sdsdsds');
  console.log(a, dateObj.getTime()); 
} catch (err) {
  console.log(err);
  document.getElementById('error').innerHTML = err.message;
} finally {
  console.log("finally got it ....");
}


// var a = 10;
// console.log(+'30' + a);
