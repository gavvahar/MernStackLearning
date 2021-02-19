function abc() {
  var  a = 10;
  var xyz = function() {
    console.log(a);
  }
  return xyz;
}

var z = abc();
z();


function car()
{
  var make = 'Ferrari';
  var Car = function()
  {
    console.log(make + ' 488 GTB');
  }
  return Car;
}

var t = car();
t();