console.log("Hello.....");

var a = 10;
console.log(a);

str = "nihar";
console.log(str);

function abc() {
  var b = 20;
  console.log("from abc", a, b);
}

function parent() {
  abc();
  z = 20;
  console.log("z: ", z);
}
parent();

//console.log("global", a, b);

var xyz;
console.log("xyz: ", xyz, typeof xyz);
xyz = 50;
console.log("xyz: ", xyz, typeof xyz);
xyz = 'Nihar';
console.log("xyz: ", xyz, typeof xyz);

xyz = false;
console.log("xyz: ", xyz, typeof xyz);

xyz = null;
console.log("xyz: ", xyz, typeof xyz);

for(var i=0; i<10; i++) {
  console.log(i);
}

// while
var i = 1;
var numbers = "";
while (i <= 10)
{
  if ( i != 10)
  {
    numbers += i + ", ";
  } else
  {
    numbers += i;
  }
  i++;
}
console.log(numbers);
// do while
var i = 0, total = 0;
do
{
  total = total + i;
  i++;
}while(i <= 100)
console.log(total);
// if else
// switch
var days;
var year = new Date().getFullYear();
var month = new Date().getMonth();
//month = 3;
//month = 1;
//year = 2020;
switch (month)
{
  case 0:
  case 2:
  case 4:
  case 6:
  case 7:
  case 9:
  case 11:
    days = 31;
    break;
  case 1:
    if (year % 4 != 0)
      days = 28;
    else
      days = 29;
    break;
  default:
    days = 30;
}
console.log(days);
console.log(month);