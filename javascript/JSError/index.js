try {
  const a = 10;
  var x = 1;
   if(a > 9)
   {
     throw('MyError', 'number is too big');
   } 
  const dateObj = new Date('02/03/2021');/*'sdsdsds'*/
  console.log(a, dateObj.getTime()); 
} catch (err) {
  console.log(err);
  document.getElementById('error').innerHTML = err.message;
} finally {
  console.log("finally got it ....");
}


// var a = 10;
// console.log(+'30' + a);

try
{
  var c = 1967;
  x = 100;
  if(c >= x)
  {
    throw('MyError', 'number is too big');
  }
} catch (err)
{
  console.log(err);
  document.getElementById('error').innerHTML = err.message;
} finally
{
  console.log(c + ' / ' + x + ' = ' + c / x);
}