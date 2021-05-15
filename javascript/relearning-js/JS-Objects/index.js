var a = {
  x: 10,
  y: 'xbox',
  obj: {
    w: 40,
    abc: function() {
      console.log("abc: ", this.w);
    }
  },
  z: true,
};
console.log(a);
var car =
{
  y:2012,
  c: 'Mustang Shelby GT500 Super Snake',
  obj:
  {
    b: 18,
    abc: function()
    {
      console.log(this.b);
    }
  },
  z: true,
};
console.log(car);